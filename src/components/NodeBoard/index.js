/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardHeader from '../../components/Dashboard/CardHeader';
import DashboardLoadingCard from '../../components/Dashboard/LoadingCard/index';
import { DashboardService } from '../../services/api/dashboard.service';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';
import generateCardDataMap from '../../utils/generateCardDataMap';
import Board from '../Kanban/Board';
import { NodeBoardContainer, Row } from './styles';

const NodeBoardComponent = ({
  authReducer,
  boardReducer,
  getUserBoard,
  getServiceOrdersByNodeId,
  getServiceOrdersAll,
  getServiceOrderById,
  getUserByNode,
  beginTreatment,
  checkIfIsInAttendant,
  stopTreatment,
  levelOs,
  typeOs,
  orderHourPrice,
  confirmPrecification,
}) => {
  const [lists, setLists] = useState([]);
  const [serviceOrderSelected, setServiceOrderSelected] = useState();
  const [serviceOrderLoading, setServiceOrderLoading] = useState(false);
  const [updateOs, setUpdateOs] = useState(true);
  const [dashboard, setDashboard] = useState([]);
  const [headerCard, setHeaderCard] = useState({});

  const stateToProps = useSelector(({ authReducer }) => ({ authReducer }));

  momentDurationFormatSetup(moment);
  useEffect(() => {
    getUserBoard();
  }, [getUserBoard]);

  // setTimeout(function () {
  //   setUpdateOs(true);
  // }, 60000);

  useEffect(() => {
    async function setBoard() {
      setUpdateOs(false);
      const overviews = await getServiceOrdersAll().catch(() => {});

      const listas = boardReducer.userBoard.nodes.map(
        ({ node, nodeId }, id) => {
          return {
            id: nodeId,
            title: node.name,
            nodeId: nodeId,
            cards:
              overviews
                .find((ov) => ov.id === nodeId)
                ?.serviceOrders?.map(generateCardDataMap) || [],
          };
        }
      );

      setLists(listas);
      setUpdateOs(false);
    }

    async function getDashboard() {
      const dashboardService = new DashboardService();
      const dashboardApi = await dashboardService.get(
        stateToProps.authReducer.user.id
      );
      if (dashboardApi) {
        setDashboard(dashboardApi);
      }
    }

    if (boardReducer.userBoard && updateOs) {
      setBoard();
    }

    getDashboard();

    setHeaderCard({
      name: 'Todos os Quadros',
      total: dashboard
        .map((item) => item.total)
        .reduce((total, next) => total + next, 0),
      priority: dashboard
        .map((item) => item.priority)
        .reduce((total, next) => total + next, 0),
      delayed: dashboard
        .map((item) => item.delayed)
        .reduce((total, next) => total + next, 0),
      today: dashboard
        .map((item) => item.today)
        .reduce((total, next) => total + next, 0),
      next7Days: dashboard
        .map((item) => item.next7Days)
        .reduce((total, next) => total + next, 0),
      beyond7Days: dashboard
        .map((item) => item.beyond7Days)
        .reduce((total, next) => total + next, 0),
      noPreviewDate: dashboard
        .map((item) => item.noPreviewDate)
        .reduce((total, next) => total + next, 0),
    });
  }, [boardReducer.userBoard, updateOs]);

  const handleClickServiceOrder = async (serviceOrderId) => {
    if (serviceOrderSelected?.id !== serviceOrderId)
      setServiceOrderSelected(null);
    setServiceOrderLoading(true);
    const serviceOrder = await getServiceOrderById(serviceOrderId);

    if (serviceOrder) {
      setServiceOrderSelected(serviceOrder);
    }
  };

  const handlePatchResponsible = async (serviceOrderId, userId, nodeId) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchResponsible(serviceOrderId, userId, nodeId);
  };

  const handlePatchNodePriorities = async (serviceOrders) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchNodePriorities(serviceOrders);
  };

  const handlePatchUserPriorities = async (serviceOrders) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchUserPriorities(serviceOrders);
  };

  const handlePatchPriority = async (serviceOrder) => {
    const serviceOrdersService = new ServiceOrdersService();
    await serviceOrdersService.patchPriority(
      serviceOrder.id,
      serviceOrder.globalPriority
    );

    const node = lists.find((node) => node.id === serviceOrder.nodeId);

    if (node) {
      let priority = false;
      if (serviceOrder.globalPriority) {
        priority = false;
      } else {
        priority = true;
      }

      node.cards.find(
        (card) => card.id === serviceOrder.id
      ).globalPriority = priority;

      setLists(lists);
    }
  };

  const SetServiceOrderLoading = (value) => {
    setServiceOrderLoading(value);
    if (!value) {
      setUpdateOs(true);
    }
  };

  return (
    <>
      {lists?.length === 0 ? (
        <DashboardLoadingCard />
      ) : (
        <NodeBoardContainer>
          <header className='header-path-finder'>
            <Row>
              <ul>
                <li>
                  <div className='dashboard'>
                    {!headerCard && <DashboardLoadingCard />}
                    {headerCard && (
                      <CardHeader item={headerCard} link={false} />
                    )}
                  </div>
                </li>
                <li className='location'>
                  <Link to='/node-board'>Quadros /</Link>
                  <span> Todos os Quadros</span>
                </li>
              </ul>
            </Row>
          </header>
          {
            <div className='content'>
              <main>
                <Board
                  type='node-board'
                  data={lists}
                  serviceOrderSelected={serviceOrderSelected}
                  serviceOrderLoading={serviceOrderLoading}
                  handleClickServiceOrder={handleClickServiceOrder}
                  setServiceOrderSelected={SetServiceOrderLoading}
                  patchResponsible={handlePatchResponsible}
                  patchNodePriorities={handlePatchNodePriorities}
                  patchUserPriorities={handlePatchUserPriorities}
                  handlePatchPriority={handlePatchPriority}
                  getUserByNode={getUserByNode}
                  updateOs={setUpdateOs}
                  beginTreatment={beginTreatment}
                  checkIfIsInAttendant={checkIfIsInAttendant}
                  stopTreatment={stopTreatment}
                  levelOs={levelOs}
                  typeOs={typeOs}
                  orderHourPrice={orderHourPrice}
                  confirmPrecification={confirmPrecification}
                />
              </main>
            </div>
          }
        </NodeBoardContainer>
      )}
    </>
  );
};

export default NodeBoardComponent;
