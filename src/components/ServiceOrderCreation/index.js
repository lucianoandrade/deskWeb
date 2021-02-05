import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { NodesService } from '../../services/api/nodes.service';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';
import { VersionByProjectService } from '../../services/api/versionByProject.service';
import { UsersService } from '../../services/api/users.service';
import Modal from '../Modal';

import {
    Container,
    Body,
    LeftSide,
    RightSide,
    SelectStyle,
    Option,
    Button,
    ButtonCancel,
    Footer,
    AttachmentButton,
    IconPaperclip,
    IconClose
} from './styles';

const CreateOSModal = ({
    open,
    setOpen
}) => {

    const [customers, setCustomers] = useState([]);
    const [typeOS, setTypeOS] = useState([]);
    const [costCenter, setCostCenter] = useState([]);
    const [modules, setModules] = useState([]);
    const [project, setProject] = useState([]);
    const [versionProject, setVersionProject] = useState([]);
    const [serviceOrders, setServiceOrders] = useState([]);
    const [supervisor, setSupervisor] = useState([]);

    const [typeOSData, setTypeOSData] = useState(null);
    const [description, setDescription] = useState('');
    const [path, setPath] = useState('');
    const [customerData, setCustomerData] = useState(null);
    const [modulesData, setModulesData] = useState(null);
    const [costCenterData, setCostCenterData] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const [versionProjectData, setVersionProjectData] = useState(null);
    const [serviceOrderId, setServiceOrderId] = useState(null);
    const [supervisorId, setSupervisorId] = useState(null);
    const [files, setFiles] = useState([]);
    const [isClearable, setIsClearable] = useState(true);

    async function getTypeOs(){
        const nodesService = new NodesService();
        const result = await nodesService.typeOS()
        setTypeOS(result.data)
    }

    async function getCustomers(){
        const nodesService = new NodesService();
        const result = await nodesService.getCustomers()
        setCustomers(result.data)
    }

    async function getCostCenter(customerId){
        const nodesService = new NodesService();
        const result = await nodesService.getCostCenter(customerId)
        setCostCenter(result.data)
    }

    async function getServiceOrdersModules(){
        const serviceOrdersService = new ServiceOrdersService();
        const result = await serviceOrdersService.getServiceOrdersModules()
        setModules(result.data)
    }

    async function getProject(){
        const nodesService = new NodesService();
        const result = await nodesService.getProject()
        setProject(result.data)
    }

    async function getVersionProject(id){
        const versionByProjectService = new VersionByProjectService();
        const result = await versionByProjectService.getVersionProject(id)
        setVersionProject(result.data)
    }

    async function getServiceOrders(){
        const serviceOrdersService = new ServiceOrdersService();
        const result = await serviceOrdersService.getServiceOrdersOrphan();
        setServiceOrders(result.data)
    }

    async function getSupervisor(customerId){
        const usersService = new UsersService();
        const result = await usersService.getSupervisor(customerId);
        setSupervisor(result.data)
    }

    const patchSetParent = async (id, parentId) => {
        const serviceOrdersService = new ServiceOrdersService();
        await serviceOrdersService.patchSetParent(id, parentId);
    };

    useEffect(() => {
        getTypeOs()
        getCustomers()
        getServiceOrdersModules()
        getProject()
        getServiceOrders()
    },[])

    const handleUploadFile = (e) => {
        if(e.target.files[0] !== undefined) {
            setFiles([...files, e.target.files[0]])
        } 
    }
    
    const uploadAttachment = (id, cardFile) => {
        cardFile.map(item => {
            const formData = new FormData();
            const serviceOrdersService = new ServiceOrdersService();
            formData.append('input-Attachment', item, item.name)
            serviceOrdersService.sendFile(id, formData)
        })
    }

    async function confirm() {
        const data = {
            "typeId": typeOSData,
            "description": description,
            "path": path,
            "customerId": customerData,
            "moduleId": modulesData,
            "projectId": projectData,
            "costCenterId": costCenterData,
            "masterId": supervisorId,
            "bugVersionId": versionProjectData
        }        
        const serviceOrdersService = new ServiceOrdersService();
        const resultData = await serviceOrdersService.createServiceOrder(data);

        if(serviceOrderId) {
            patchSetParent(resultData.data.id, parseInt(serviceOrderId))
        }
        
        if(files.length !== 0) {
            uploadAttachment(resultData.data.id, files)
        }
        setOpen()
    }

    let optionsServiceOrders = serviceOrders.map((e) => (
        {value: `${e.id}`, label: `${e.id}`}
    ))
    
    return (
        <Modal
            open={true}
            setOpen={setOpen}
            id={"treatment"}
            zIndex={"1000"}
            overflow={true}
        >
            <Container>
                <header onClick={setOpen}>
                    <h1>
                        <strong>Criar Ordem de Serviço</strong>
                    </h1>
                </header>
                <Body>
                    <LeftSide>
                        <label>Local de alteração</label>
                        <input onChange={(e) => setPath(e.target.value)} value={path} type="text" placeholder="Ex: cadastro > usuários > grupo"/>

                        <label>Descrição</label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Adicionar descrição..."/>

                        <section>
                            <div className="selectLeftSide">
                                <label>Tipo</label>
                                <SelectStyle value={typeOSData} onChange={(e) => setTypeOSData(e.target.value)}>
                                    <Option value={null}>Selecione</Option>
                                    {typeOS.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>

                            <div className="selectLeftSide">
                                <label>Cliente</label>
                                <SelectStyle value={customerData} onChange={(e) => {getCostCenter(e.target.value); getSupervisor(e.target.value); setCustomerData(e.target.value)}}>
                                    <Option value={null}>Selecione</Option>
                                    {customers.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.acronym ? e.acronym : e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>
                        </section>

                        <section>
                            <div className="selectLeftSide">
                                <label>Centro de Custo</label>
                                <SelectStyle value={costCenterData} onChange={(e) => setCostCenterData(e.target.value)}>
                                    <Option value={null}>Selecione</Option>
                                    {costCenter.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>

                            <div className="selectLeftSide">
                                <label>Módulo</label>
                                <SelectStyle value={modulesData} onChange={(e) => setModulesData(e.target.value)}>
                                    <Option value={null}>Selecione</Option>
                                    {modules.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>
                        </section>
                        
                        <section>
                            <div className="selectLeftSide">
                                <label>Projeto</label>
                                <SelectStyle value={projectData} onChange={(e) => {setProjectData(e.target.value); getVersionProject(e.target.value)}}>
                                    <Option value={null}>Selecione</Option>
                                    {project.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>
                            
                            <div className="selectLeftSide">
                                <label>Versão Atual</label>
                                <SelectStyle value={versionProjectData} onChange={(e) => setVersionProjectData(e.target.value)}>
                                    <Option value={null}>Selecione</Option>
                                    {versionProject.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.number}</Option>
                                    ))}
                                </SelectStyle>
                            </div>
                        </section>

                        <section>
                            <div className="selectLeftSide">
                                <label>Supervisor que liberou a OS</label>
                                <SelectStyle onChange={(e) => setSupervisorId(e.target.value)}>
                                    <Option value={null}>Selecione</Option>
                                    {supervisor.map((e, index) => (
                                        <Option key={index} value={e.id}>{e.name}</Option>
                                    ))}
                                </SelectStyle>
                            </div>
                        </section>

                    </LeftSide>
                    <RightSide>
                        <section>
                            <div className="selectRightSide">
                                <label>OS Pai</label>
                                <Select
                                    isClearable={true}
                                    options={optionsServiceOrders} 
                                    onChange={(e) => {e ? setServiceOrderId(e.value) : setServiceOrderId(null)}}
                                    placeholder="Selecione ou busque…"
                                />
                            </div>
                        </section>

                        <section>
                            <div className="selectRightSide">
                                <label>Upload de Arquivos</label>
                                    <AttachmentButton for='input-Attachment'>
                                        <IconPaperclip/> Anexar arquivo(s)
                                    </AttachmentButton>
                                <input
                                    onChange={handleUploadFile} 
                                    id='input-Attachment'
                                    type="file"
                                    name='input-Attachment'
                                    style={{visibility: "hidden", position: "fixed", left: "-9000px"}}    
                                />
                            </div>
                        </section>

                        <div className="listOfAttachments">
                            <table>
                                <thead>
                                    <tr className="tableTitle">
                                        <td className="name">Nome</td>
                                        <td className="size">Tamanho</td>
                                        <td className="icon"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    files.length === 0 ?
                                    <tr className="tableContent">
                                        <td className="noFile" colSpan="3">Nenhum arquivo nesta lista.</td>
                                    </tr> 
                                        :
                                        files.map((item, index) => {
                                            return (
                                            <>
                                            <tr className="tableContent">
                                                <td className="name">{item.name}</td>
                                                <td className="size">{`${parseInt(item.size / 1000)}KB`}</td>
                                                <td className="icon" onClick={() => setFiles(files.filter(e => e !== files[index]))}
                                                    >
                                                    <IconClose/>
                                                </td>
                                            </tr>
                                            </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </RightSide>
                </Body>
                <Footer>
                    <Button onClick={confirm} style={{ marginRight: 20 }}>Criar OS</Button>
                    <ButtonCancel onClick={setOpen}>Cancelar</ButtonCancel>
                </Footer>
            </Container>
        </Modal>
    );
}

export default CreateOSModal;