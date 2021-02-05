import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { MdOpenInNew } from 'react-icons/md';
import SyncLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';
import { NodesService } from '../../services/api/nodes.service';
import { CommentsService } from '../../services/api/comments.service';
import { VersionByProjectService } from '../../services/api/versionByProject.service';
import Modal from '../Modal';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
import TreatmentHistoryModal from './TreatmentHistory';
import PrecificationModal from './Precification';
import SelectModal from '../SelectModal';
import HomologationModal from './SendToHomologation';
import ChangeParentOsModal from './ChangeParentOsModal';
import { STATUS } from '../../constants/status.constants';
import DashboardLoadingCard from '../../components/Dashboard/LoadingCard/index';

import { 
  Container, 
  IconBookmarkNormal, 
  IconBookmarkActive, 
  IconPlayCircle,
  IconPause, 
  IconFileInvoiceDollar,
  IconListAlt,
  IconExchangeAlt,
  IconComment,
  IconEdit,
  IconPlus,
  IconArrowBack,
  IconPaperclip,
  DownloadIcon,
  ButtonCancel,
  Button } from './styles';

const ServiceOrderModal = ({
  node,
  data,
  islandAll,
  setOpen,
  open,
  handlePatchPriority,
  beginTreatment,
  checkIfIsInAttendant,
  stopTreatment,
  updateOs,
  levelOs,
  typeOs,
  orderHourPrice,
  confirmPrecification,
  nodes
}) => {
  const [globalPriority, setGlobalPriority] = useState(false);
  const [openTreatmentHistory, setOpenTreatmentHistory] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [precification, setPrecification] = useState(false);
  const [homologation, setoHomologation] = useState(false);
  const [changeParentOs, setChangeParentOs] = useState(false); 
  const [startTreatment, setStartTreatment] = useState(false);
  const [serviceOrderId, setServiceOrderId] = useState()
  const [latestComments, setLatestComments] = useState(-5)
  const [iconDisplay, setIconDisplay] = useState(true)
  const [interna, setInterna] = useState(false)
  const [paralisa, setParalisa] = useState(false)
  const [valueTextArea, setValueTextArea] = useState('')
  const [priorityHover, setPriorityHover] = useState(false)
  const [osDaughters, setOsDaughters] = useState([]);
  const [serviceOrders, setServiceOrders] = useState([]);
  const [valueOSDaughter, setValueOSDaughter] = useState('');
  const [inputOSDaughter, setInputOSDaughter] = useState(false);
  const [modalOsFather, setModalOsFather] = useState(false);
  const [loader, setLoader] = useState(false);

  const loggedUserId = useSelector((state) => state?.authReducer?.user?.id);
  const stateToProps = useSelector(({ authReducer }) => ({authReducer}));

  const history = useHistory();

  const getOsDaughters = async (id) => {
    const serviceOrdersService = new ServiceOrdersService();
    const osDaughtersApi = await serviceOrdersService.getOSChildren(id);

    if (osDaughtersApi) {
      setOsDaughters(osDaughtersApi.data);
    }
  };

  const saveComment = async (serviceOrderId, description, isPrivate, paralyze) => {
    if (description !== '') {
      const commentsService = new CommentsService();
      await commentsService.sendComment(serviceOrderId, description, isPrivate, paralyze);
      updateOs(data.id);
      setValueTextArea('');
      setIconDisplay(true);
    }
  }

  const getVersionByProject = async (id) => {
    const versionProjectService = new VersionByProjectService();
    const serviceVersionProject = await versionProjectService.getVersionProject(id);
    return serviceVersionProject.data
  };
  
  const sendHomologation = (id, versionId, description) => {
    const sendHomologationService = new ServiceOrdersService();
    sendHomologationService.patchToHomologation(id, versionId, description)
    updateOs(data.id)
    setoHomologation(false)
  }

  const handleUploadFile = (e) => {
    uploadAttachment(data.id, e.target.files[0])
  }

  const uploadAttachment = (id, cardFile) => {
    const formData = new FormData();
    formData.append('input-Attachment', cardFile, cardFile.name)
    const serviceOrdersService = new ServiceOrdersService();
    serviceOrdersService.sendFile(id, formData).then((response) => {
      if(response.status >= 200 && response.status < 300) {
        toast.success('Anexo enviado com sucesso');
        updateOs(data.id);
        document.querySelector('#attachments').scrollIntoView();
        document.querySelector('#comments').scrollIntoView();
      } else {
        toast.error('Erro ao tentar anexar');
      }
    }).catch((err) => {
      toast.error('Erro ao tentar anexar');
    }); 
  }

  const downloadAttachment = (id, file) => {
    const downloadFile = new ServiceOrdersService();
    downloadFile.fileUnlocked(id, file);
  }

  useEffect(() => {
    if (data) {
      setServiceOrderId(data.id)
      setGlobalPriority(data.globalPriority);
      getStatusAttendant()
      getOsDaughters(data.id)
      getServiceOrders()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getStatusAttendant = async () => {
    const result = await checkIfIsInAttendant(loggedUserId)
    result.data.map(item => 
      item.ServiceOrderId === data.id &&
      setStartTreatment(true)
    )
  }

  const renderFilesComments = (comment) => {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <a
          target="_blank"
          rel='noopener noreferrer'
          href={`https://webdesk.tasken.com/os/${data.id}/${comment.description}`}
          style={{ marginLeft: 0 }} className="label">
          {comment.description}&nbsp;<MdOpenInNew />
        </a>
      </div>
    );
  };

  const openStartTreatment = async () => {
    if (!startTreatment) {
      const status = await beginTreatment(loggedUserId, data.id)

      if (status.data === 'Ok') {
        updateOs(data.id)
        setStartTreatment(true)
        await checkIfIsInAttendant(data.userId)
      }
    } else {
      const status = await stopTreatment(loggedUserId, data.id)
      if (status.data === 'Ok') {
        updateOs(data.id)
        setStartTreatment(false)
      }
    }
    history.push({treatment: startTreatment})
  }

  const openHomologation = async () => {
    setoHomologation(true)
  }

  const openChangeParentOs = async () => {
    setChangeParentOs(true)
  }

  const openPrecification = async () => {
    setPrecification(true)
  }

  function activeModalOperators() {
    setOpenSelect(true)
  }

  async function getUserByNode (nodeId) {
    const nodesService = new NodesService();
    const serviceOrders = await nodesService.getUsersByNode(nodeId);
    return serviceOrders.data;
  }

  async function confirmUser(serviceOrderId, userId, nodeId) {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchResponsible(serviceOrderId, userId, nodeId);
    updateOs(data.id)
  }

  async function getServiceOrders(){
    const serviceOrdersService = new ServiceOrdersService();
    const result = await serviceOrdersService.getServiceOrdersOrphan();
    setServiceOrders(result.data)
}

  momentDurationFormatSetup(moment);
  
  function getStatus(status) {
    return STATUS[status];
  }

  function handlerCheckBox(type, status) {
    type === 'interna' ? setInterna(!status) : setParalisa(!status)
  }

  const status = getStatus(data && data.statusId);

  const sectionDetails = useRef();

  const scrollToComments = () => {
    document.querySelector('#comments').scrollIntoView();
  }

  const resetCommentForm = () => {
    setValueTextArea('');
    setIconDisplay(true);
    setInterna(false);
    setParalisa(false);
  }
  
  const optionsValueOSDaughter = serviceOrders.filter(e => (data && data.id) ? e.id !== data.id : e.id).map((e) => (
    {value: `${e.id}`, label: `${e.id}`}
  ));

  const selectStyles = {
    control: styles => ({ ...styles, height: '48px'}),
    valueContainer: styles => ({ ...styles, height: '40px', position: 'initial'}),
    menu: styles => ({ ...styles, zIndex: '9999'}),
    input: styles => ({ ...styles, transform: 'translateY(-30%)'}),
    placeholder: styles => ({ ...styles, fontFamily: 'Oxygen'}),
    option: styles => ({ ...styles, fontFamily: 'Oxygen'})
  };

  const patchSetParent = async (id, parentId) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchSetParent(id, parentId);
    updateOs(data.id);
    setInputOSDaughter(false);
    setLoader(true);
    if(osDaughters.length > 0) {setLoader(false)}
  };

  const deleteSetParent = async (parentId) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.deleteSetParent(parentId);
    updateOs(data.id);
  };
  
  return (
    <>
      { openTreatmentHistory && (
        <TreatmentHistoryModal
          data={data.treatments}
          open={false}
          setOpen={() => setOpenTreatmentHistory()}
        />)
      }
      {/* { hasTreatmentStart && (
        <StartAttendant
          data={[]}
          open={false}
          confirm={openStartTreatment}
          setOpen={() => setHasTreatmentStart()}
        />)
      } */}
      { precification && (
        <PrecificationModal
          data={[]}
          open={false}
          setOpen={() => setPrecification()}
          orderlevelOs={levelOs}
          orderTypeOs={typeOs}
          orderHourPrice={orderHourPrice}
          customerId={data.customer.id}
          serviceOrderId={serviceOrderId}
          confirmPrecification={confirmPrecification}
        />)
      }
      { changeParentOs &&
        <ChangeParentOsModal
          open={false}
          setOpen={() => setChangeParentOs()}
          patchSetParent={patchSetParent}
          serviceOrders={serviceOrders}
          osId={data.id}
        />
      }
      { homologation &&
        <HomologationModal
          open={false}
          setOpen={() => setoHomologation()}
          getVersionByProject={getVersionByProject}
          sendHomologation={sendHomologation}
          versionId={data.projectId}
          serviceOrderId={data.id}
        />
      }  
      {openSelect &&
        <SelectModal 
          nodes={window.location.href.includes('staff-board') ? islandAll : nodes}
          user={nodes} 
          serviceOderInfo={data} 
          close={setOpenSelect} 
          confirmUser={confirmUser} 
          getUserByNode={getUserByNode} 
        />
      }
      <Modal
        open={true}
        setOpen={setOpen}
        id={'modal-bckg'}
        zIndex={"999"}
        overflow={false}
      >
        <div style={{ height: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <SyncLoader
            size={50}
            color={"#1293eb"}
            loading={!data}
          />
        </div>
        {data && (
        <Container 
        status={status}
        iconDisplay={iconDisplay}
        >
          <header>
            <p>OS {data.id}</p>
            <button
              onMouseOver={() => setPriorityHover(true)}
              onMouseOut={() => setPriorityHover(false)}
              onClick={(e) => {
                if (globalPriority) {
                  e.target.classList.remove('btn-priority-active');
                  e.target.classList.add('btn-priority-normal');
                } else {
                  e.target.classList.add('btn-priority-active');
                  e.target.classList.remove('btn-priority-normal');
                }
                setGlobalPriority(!globalPriority);
                handlePatchPriority(data)
              }}
              className={globalPriority ? 'btn-priority-active' : 'btn-priority-normal'}>
              {globalPriority ? <IconBookmarkActive/> : <IconBookmarkNormal/>}
            </button>
          </header>
          <div className="priority-hover" style={priorityHover ? {display: 'flex'} : {display: 'none'}}>
            <div className="btn-priority-hover">
              {globalPriority ? 
              <span>Desmarcar Prioridade</span>
              : 
              <span>Marcar Prioridade</span>
              }
            </div>
          </div>
          <div className="buttons">
            <div>
              <button
                onClick={(e) => {
                  openStartTreatment();
                }}
                className={'btn-treatments blue'}>
                {startTreatment ? <IconPause/> : <IconPlayCircle/>}
                {startTreatment ? 'Parar atendimento' : 'Iniciar atendimento'}
              </button>
            </div>
            <div>
              <button
                onClick={(e) => {
                  openPrecification();
                }}
                className={'btn-treatments'}>
                <IconFileInvoiceDollar/>
                Precificar e previsionar
              </button>
            </div>
            <div>
              <button
                onClick={(e) => {
                  setOpenTreatmentHistory(true);
                }}
                className={'btn-treatments'}>
                <IconListAlt/>
                Atendimentos
              </button>
            </div>
            <div>
              <button
                onClick={() => activeModalOperators()}
                className={'btn-treatments'}>
                <IconExchangeAlt/>
                Trocar de Ilha
              </button>
            </div>
            <div>
              <button
                onClick={() => openHomologation()}
                style={startTreatment ? {display: 'block'} : {display: 'none'}}
                className={'btn-treatments'}>
                <IconArrowBack/>
                Enviar para Homologação
              </button>
            </div>
            <div>
              <label className="btn-treatments" for='input-Attachment'>
                <IconPaperclip/>
                Anexar
              </label>
              <input
                onChange={handleUploadFile} 
                id='input-Attachment'
                type="file"
                name='input-Attachment'
                style={{visibility: "hidden", position: "fixed", left: "-9000px"}}    
              />
            </div>
          </div>
          <div className="content">
            <section className="status">
              <div className="topics"> 
                <p>Status</p>
                <label className="statusTitle">{data.status.name && data.status.name.length > 0 ? data.status.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>OS pai</p>
                <label>
                  {data.ServiceOrderMasterId ? 
                  <span className="osDad" onClick={() => updateOs(data.ServiceOrderMasterId)}>
                    {`OS ${data.ServiceOrderMasterId}`}
                  </span> : ''}
                  {osDaughters.length > 0 ? <span>--</span> : <IconEdit onClick={() => setModalOsFather(!modalOsFather)}/>}
                </label>
                
                <div className="fatherOsModal" onMouseLeave={() => setModalOsFather(!modalOsFather)} style={modalOsFather ? {display: 'block'} : {display: 'none'}}>
                  {
                    serviceOrders.filter(e => e.id !== data.id).slice(-4).map((item, index) => (
                      <div key={index} className="optionsOS" onClick={() => patchSetParent(data.id, item.id)}>
                        <span className="osId">{`OS ${item.id}`}</span>
                        <span className="oSDescription">{item.description}</span>
                      </div>
                    ))
                  }

                  <div className="oSlinksFather">
                    {data.ServiceOrderMasterId ? 
                    <div className="oSlink" onClick={() => deleteSetParent(data.id)}>Remover OS pai</div> : ''}
                    <div className="oSlink"onClick={() => openChangeParentOs()}>Ver todas as OSs</div>
                  </div>
                </div>

              </div>

              <div className="topics"> 
                <p>Responsável</p>
                <label>{data.responsible && data.responsible.length > 0 ? data.responsible[0].user.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Cliente</p>
                <label>{data.customer ? data.customer.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Solicitante</p>
                <label>{data.creatorUser ? data.creatorUser.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Supervisor</p>
                <label>{data.supervisorUser ? data.supervisorUser.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Tipo</p>
                <label>{data.type ? data.type.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Módulo</p>
                <label>{data?.module?.name || '--'}</label>
              </div>  
              <div className="topics"> 
                <p>Centro de custo</p>
                <label>{data?.costCenter?.name || '--'}</label>
              </div>
              <div className="topics"> 
                <p>Nível</p>
                <label>{data.classification ? data.classification.name : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Data de criação</p>
                <label>{data.date ? moment(data.date).utc().format('DD/MM/yyyy HH:mm:ss') : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Data de solicitação</p>
                <label>{data.beginDate ? moment(data.beginDate).utc().format('DD/MM/yyyy HH:mm:ss') : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Data de previsão</p>
                <label>{data.previewDate ? moment(data.previewDate).utc().format('DD/MM/yyyy HH:mm:ss') : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Data de conclusão</p>
                <label>{data.endDate ? moment(data.endDate).utc().format('DD/MM/yyyy HH:mm:ss') : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Tempo total de atendimento</p>
                <label>{data.totalTreatmentTime ? moment.duration(data.totalTreatmentTime, "seconds").format("h[(_)] m[(_)] s[(_)]", { userLocale: "pt-BR" }) : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Horas estimadas</p>
                <label>{data?.budgets?.[0]?.hours ? `${data.budgets[0].hours} horas` : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Horas extras</p>
                <label>{data.extraHours ? data.extraHours : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Versão de entrega</p>
                <label>{data.deliveryVersion ? data.deliveryVersion.number : '--'}</label>
              </div>
              <div className="topics"> 
                <p>Versão atual</p>
                <label>{data.bugVersion ? data.bugVersion.number : '--'}</label>
              </div>
              <div className="listOfAttachments">
                <p id='attachments'>{`Anexos (${data.comments.filter(item => item.isFileUpload === true).length})`}
                  <label for='input-Attachment'>
                    <IconPlus/>
                  </label>
                  <input
                    onChange={handleUploadFile} 
                    id='input-Attachment'
                    type="file"
                    name='input-Attachment'
                    style={{visibility: "hidden", position: "fixed", left: "-9000px"}}    
                  />
                </p>
                <table>
                  <thead>
                    <tr className="tableTitle">
                      <td className="name">Nome</td>
                      <td className="size">Tamanho</td>
                      <td className="icon"></td>
                    </tr>
                  </thead>
                  <tbody>
                  {data.comments.map(item => {
                    if(item.isFileUpload && item.description) {
                      return (
                        <tr className="tableContent">
                          <td className="name">{item.description}</td>
                          <td className="size">{item.size ? `${parseInt(item.size / 1000)}KB` : ''}</td>
                          <td className="icon">
                            {
                              item.size ?
                              <DownloadIcon onClick={() => downloadAttachment(data.id, item.description)}/>
                              :
                              <a
                                target="_blank"
                                rel='noopener noreferrer'
                                href={`https://webdesk.tasken.com/os/${data.id}/${item.description}`}
                              >
                              <DownloadIcon/>
                              </a>
                            }
                          </td>
                        </tr>
                      )
                    }
                    return null;
                  })
                  }
                  </tbody>
                </table>
              </div>
            </section>
            <section className="details"
              ref={sectionDetails}
              style={{maxHeight: `${iconDisplay ? '341px' : '250px'}`}}
              >
              <div className="text">
                <h1>Local de alteração</h1>
                <p>
                  {data.path || '--'}
                </p>
              </div>
              <div className="text">
                <h1>Descrição</h1>
                <p>
                  {data.description ? data.description.split("\n").map((i, key) => {
                    return (i.trim() === "") ? <br /> : <div key={key}>{i}</div>;
                  }) : '--'}
                </p>
              </div>
              <div className="osDaughter" style={data.ServiceOrderMasterId ? {display: "none"} : {display: "block"}}>
                <h1>OSs filhas <IconPlus onClick={() => setInputOSDaughter(!inputOSDaughter)}/></h1>
                
                <div className="inputOSDaughter" style={inputOSDaughter ? {display: 'flex'} : {display: 'none'}}>
                  <Select
                    menuPortalTarget={document.querySelector('#modal-bckg')}  
                    options={optionsValueOSDaughter}
                    isClearable={true}
                    onChange={(e) => {e ? setValueOSDaughter(e.value) : setValueOSDaughter(null)}} 
                    placeholder="Pesquisar por id ou resumo da OS"
                    styles={selectStyles}
                  />
                  <div className="OnDaughter">
                    <div className="ButtonsOSDaughter">
                      <ButtonCancel onClick={() => {setValueOSDaughter(''); setInputOSDaughter(false)}} style={{ marginRight: 12 }}>Cancelar</ButtonCancel>
                      <Button 
                        onClick={() => patchSetParent(parseInt(valueOSDaughter), data.id)}
                      >
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="osDaughter-box">
                  <ul>
                    {osDaughters.length > 0 ? osDaughters.map(item => {
                      return (
                        <li onClick={() => updateOs(item.id)}>
                          <div>
                            <span className="osDaughterTitle">{`OS ${item.id}`}</span>
                            <p className="osDaughterDescription">{item.description}</p>
                            <span className="label">{getStatus(item.statusId).title}</span>
                          </div>
                        </li>
                      )               
                    }) : loader ? <DashboardLoadingCard /> :
                        <li style={inputOSDaughter ? {display: 'none'} : {display: 'flex'}}>
                          <div>
                            <p className="osDaughterNone">Nenhuma OS filha adicionada. <span className="osDaughterPlus" onClick={() => setInputOSDaughter(!inputOSDaughter)}>Adicionar</span></p>
                          </div>
                        </li>
                    }     
                  </ul>
                </div>
              </div>
              <div className="comments">
                <h1 id='comments'>Comentários</h1>
                <div className="comments-box">
                  <ul>
                    {data.events.filter(x => x.user).concat(data.comments).sort((a, b) => a.date.localeCompare(b.date)).slice(latestComments).slice(0).reverse().map((comment) => {
                      if (Object.keys(comment).includes('description')) {
                        //comentario 
                        return (
                          <li style={comment.userId === stateToProps.authReducer.user.id ? {backgroundColor: "#F1F5FA"} : {backgroundColor: "#FFF"}}>
                            <div>
                              <p className="commentTitle">
                                <div className="commentUser">
                                  <strong>{comment.user.name}</strong> 
                                  {`${moment(comment.date).utc().format('DD/MM/yyyy')} às ${moment(comment.date).utc().format('HH:mm:ss')}`}
                                </div>
                                {comment.isPrivate && (
                                  <span className="label">
                                    Privado
                                  </span>
                                )}
                                {comment.isBudget && (
                                  <span className="label">
                                    Evento
                                  </span>
                                )}
                              </p>
                              <p>
                                {comment.isFileUpload ? (
                                 comment.size ? 
                                 <div style={{ marginTop: 10, marginBottom: 10, cursor: 'pointer'}}>
                                    <span
                                      onClick={() => downloadAttachment(data.id, comment.description)}
                                      style={{ marginLeft: 0 }} className="label">
                                      {comment.description}&nbsp;<MdOpenInNew />
                                    </span>
                                  </div>
                                 : renderFilesComments(comment)
                                ) : comment.isBudget && comment.description.trim() !== "" ?
                                    <div dangerouslySetInnerHTML={{ __html: `Orçamento aprovado por <b>${comment.user.name}</b>. Data de previsão alterada para <b>${comment.description.split(" ")[0]}</b>.` }} />
                                    : comment.isBudget && comment.description.trim() === "" ?
                                      `Orçamento enviado.`
                                      : comment.description.split("\n").map((i, key) => {
                                        return (i.trim() === "") ? <br /> : <div key={key}>{i}</div>;
                                      })}
                              </p>
                            </div>
                          </li>
                        );
                      } else {
                        //evento
                        let message = "";
                        if (comment.statusId) {
                          message = `O status da OS foi alterado para <b>${comment.status.name}</b>.`
                        }
                        if (comment.responsibleId) {
                          message = `O responsável da OS foi alterado para <b>${comment.responsible.name}</b>.`
                        }
                        return (
                          <li>
                            <div>
                              <p className="commentTitle">
                              <div className="commentUser">
                                <strong>{comment.user.name}</strong>
                                {`${moment(comment.date).utc().format('DD/MM/yyyy')} às ${moment(comment.date).utc().format('HH:mm:ss')}`}
                              </div>  
                              <span className="label">
                                  Evento
                              </span>
                              </p>
                              <p>
                                <div dangerouslySetInnerHTML={{ __html: message }} />
                              </p>
                            </div>
                          </li>
                        );
                      }
                    })}      
                  </ul>
                </div>
                <button className="moreComments" onClick={() => {setLatestComments(latestComments - 3); scrollToComments()}} style={data && data.comments.length > 5 ? {display: "block"} : {display: "none"}}>Ver 3 comentários antigos</button>
              </div>
              <div className="inputComment">
                <label className="input-icon">
                  <IconComment style={{display: `${iconDisplay ? 'block' : 'none'}`}}/>
                </label>
                <textarea required className={iconDisplay ? '' : 'focus'} value={valueTextArea} onFocus={() => {setIconDisplay(false); setTimeout(scrollToComments, 300)}} onChange={e => setValueTextArea(e.target.value)} placeholder="Adicionar comentário..." />
                <div className="inputOn" style={{display: `${iconDisplay ? 'none' : 'flex'}`}}>

                  <div className="checkboxComment">
                    <div className="checkboxAndLabel">
                      <input type="checkbox" id="interna" onClick={() => handlerCheckBox('interna', interna)} checked={interna} />
                      <label className="labelCheckbox" for="interna">Interna</label>
                    </div>
                    <div className="checkboxAndLabel">
                      <input type="checkbox" id="paralisa" onClick={() => handlerCheckBox('paralisa', paralisa)} checked={paralisa} />
                      <label className="labelCheckbox" for="paralisa">Paralisa</label>
                    </div>
                  </div>

                  <div className="ButtonsComment">
                    <ButtonCancel onClick={resetCommentForm} style={{ marginRight: 12 }}>Cancelar</ButtonCancel>
                    <Button onClick={() => saveComment(data.id,valueTextArea,interna,paralisa)}>Comentar</Button>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </Container>)}
      </Modal>
    </>
  );
}

export default ServiceOrderModal;