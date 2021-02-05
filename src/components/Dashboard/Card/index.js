import React from 'react';
import { useHistory } from 'react-router-dom';
import { serviceOrdersColors } from '../../../constants/serviceOrders.constants';
import { NodesService } from '../../../services/api/nodes.service';
import generateCardDataMap from '../../../utils/generateCardDataMap';
import { getServiceOrderPercentage } from '../../../utils/math';
import Card from '../../Kanban/Card';
import Modal from '../../Modal';
import { serviceOrdersPreviewModalDescription } from './constants';
import {
  DashboardCardLink,
  IconCalendar,
  IconClockCheck,
  IconHours,
  IconUser,
  NoServiceOrderMessage,
  StatusHead,
  StatusList,
  StatusListNodeName,
} from './styles';

const nodeService = new NodesService();

/**
 * @typedef {'priority' | 'nopreviewdate' | 'beyond7days' | 'next7days' | 'today' | 'delayed'} ServiceOrderStatus
 */

const DashboardCard = ({ item, link = true }) => {
  const [open, setOpen] = React.useState(false);
  /** @type {[ServiceOrderStatus, Funcion]} */
  const [previewModalType, setPreviewModalType] = React.useState('');
  const [previewModalNode, setPreviewModalNode] = React.useState('');
  /** @type {[ServiceOrder[] | null, Function]} */
  const [previewModalData, setPreviewModalData] = React.useState(null);
  React.useEffect(() => {
    if (open) {
      nodeService
        .getServiceOrdersByStatus(item.nodeId, previewModalType)
        .then((result) =>
          setPreviewModalData(result.data.map(generateCardDataMap))
        );
    }
  }, [item.nodeId, previewModalType, open]);

  /**
   * @param {ServiceOrderStatus} type
   */
  const handlePreviewModalOpen = (type) => {
    setPreviewModalType(type);
    setPreviewModalNode(item.name);
    setPreviewModalData(null);
    setOpen(true);
  };

  const history = useHistory();
  const handleOSClick = (nodeId) => {
    history.push(`/staff-board/${nodeId}`);
  };
  return (
    <>
      <DashboardCardLink to={`/staff-board/${item.nodeId}`}>
        <div style={{ padding: '0 1.5rem' }}>
          <div className='header'>
            <span className='title'>{item.name}</span>
            <div className='service-orders-total'>
              <span>
                Total de OS's: <strong>{item.total}</strong>
              </span>
            </div>
          </div>
          <div className='items'>
            <div className='item'>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('priority');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.priority }}
                />
                <span>Prioritárias</span>
                <strong>{item.priority ? item.priority : '-'}</strong>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('delayed');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.delayed }}
                />
                <span>Entrega(s) atrasada(s)</span>
                <strong>{item.delayed ? item.delayed : '-'}</strong>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('today');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.today }}
                />
                <span>Entrega(s) hoje</span>
                <strong>{item.today ? item.today : '-'}</strong>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('next7days');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.next7Days }}
                />
                <span>Entrega(s) prox 7 dias</span>
                <strong>{item.next7Days ? item.next7Days : '-'}</strong>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('beyond7days');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.beyond7Days }}
                />
                <span>Entrega(s) acima de 7 dias</span>
                <strong>{item.beyond7Days ? item.beyond7Days : '-'}</strong>
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handlePreviewModalOpen('nopreviewdate');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <div
                  className='indicator'
                  style={{ backgroundColor: serviceOrdersColors.noPreviewDate }}
                />
                <span>Sem previsão de entrega</span>
                <strong>{item.noPreviewDate ? item.noPreviewDate : '-'}</strong>
              </div>
            </div>
            <div className='item'>
              <div className='status'>
                <div className='icons'>
                  <IconUser />
                </div>
                <span>colaboradores</span>
                <strong>{item.users ? item.users : '-'}</strong>
              </div>
              <div className='status'>
                <div className='icons'>
                  <IconHours />
                </div>
                <span>horas diárias</span>
                <strong>{item.workingHours ? item.workingHours : '-'}</strong>
              </div>
              <div className='status'>
                <div className='icons'>
                  <IconClockCheck />
                </div>
                <span>horas já previsionadas</span>
                <strong>{item.occupiedHours ? item.occupiedHours : '-'}</strong>
              </div>
              <div className='status'>
                <div className='icons'>
                  <IconCalendar />
                </div>
                <span>dias já previsionados</span>
                <strong>{item.occupiedDays ? item.occupiedDays : '-'}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className='percentage'>
          {item.beyond7Days > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.beyond7Days,
                flex: getServiceOrderPercentage(item.total, item.beyond7Days),
              }}
            />
          )}
          {item.next7Days > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.next7Days,
                flex: getServiceOrderPercentage(item.total, item.next7Days),
              }}
            />
          )}
          {item.today > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.today,
                flex: getServiceOrderPercentage(item.total, item.today),
              }}
            />
          )}
          {item.delayed > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.delayed,
                flex: getServiceOrderPercentage(item.total, item.delayed),
              }}
            />
          )}
          {item.priority > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.priority,
                flex: getServiceOrderPercentage(item.total, item.priority),
              }}
            />
          )}
          {item.noPreviewDate > 0 && (
            <div
              style={{
                backgroundColor: serviceOrdersColors.noPreviewDate,
                flex: getServiceOrderPercentage(item.total, item.noPreviewDate),
              }}
            />
          )}
        </div>
      </DashboardCardLink>
      <Modal
        overflow
        stylewidth='660px'
        id={item.nodeId}
        open={open}
        setOpen={setOpen}
      >
        <StatusHead>
          <div className='title'>
            <div
              className='indicator'
              style={{ backgroundColor: serviceOrdersColors[previewModalType] }}
            />
            <h4>{serviceOrdersPreviewModalDescription[previewModalType]}</h4>
          </div>
          <div className='service-orders-total'>
            <span>
              Total de OS's:{' '}
              <strong>
                {Array.isArray(previewModalData) && previewModalData.length}
              </strong>
            </span>
          </div>
        </StatusHead>
        <StatusListNodeName>{previewModalNode}</StatusListNodeName>
        <StatusList>
          {Array.isArray(previewModalData) &&
            previewModalData.length > 0 &&
            previewModalData.map((card) => (
              <Card
                card={card}
                key={card.Id}
                activeModalOperators={() => {}}
                handleClickServiceOrder={() => {
                  handleOSClick(item.nodeId);
                }}
              />
            ))}
          {Array.isArray(previewModalData) && previewModalData.length === 0 && (
            <NoServiceOrderMessage>
              Não existem tarefas com esse status.
            </NoServiceOrderMessage>
          )}
        </StatusList>
      </Modal>
    </>
  );
};

export default DashboardCard;
