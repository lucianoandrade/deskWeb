/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardHeader from '../../components/Dashboard/CardHeader';
import DashboardLoadingCard from '../../components/Dashboard/LoadingCard/index';
import { DashboardService } from '../../services/api/dashboard.service';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';
import generateCardDataMap from '../../utils/generateCardDataMap';
// import { search } from '../../utils/search';
import Board from '../Kanban/Board';
import { NotFound, Row, StaffBoardContainer } from './styles';

const StaffBoardComponent = ({
  authReducer,
  boardReducer,
  getNodeBoard,
  clearBoard,
  getServiceOrdersByUserId,
  getServiceOrderById,
  getServiceOrdersUnassigned,
  getServiceOrdersAssigned,
  getDashboardCard,
  beginTreatment,
  stopTreatment,
  checkIfIsInAttendant,
  levelOs,
  typeOs,
  orderHourPrice,
  confirmPrecification,
}) => {
  const [lists, setLists] = useState([]);
  const [listAux, setListAux] = useState([]);
  const [headerCard, setDashboard] = useState(null);
  const [serviceOrderSelected, setServiceOrderSelected] = useState();
  const [serviceOrderLoading, setServiceOrderLoading] = useState(false);
  const [islandAll, setIslandAll] = useState([]);
  const [updateOs, setUpdateOs] = useState(true);
  const location = useLocation();

  momentDurationFormatSetup(moment);

  useEffect(() => {
    setUpdateOs(true);
    getNodeBoard();
  }, [getNodeBoard]);

  useEffect(() => {
    async function setBoard() {
      setUpdateOs(!!location.state?.update);
      const listas = [];
      const allServiceOrders = await getServiceOrdersAssigned();

      const cardsServiceOrdersUnassigned = allServiceOrders
        .filter((item) => item.responsible.length === 0)
        .map(generateCardDataMap);

      listas.push({
        title: 'Sem responsável',
        userId: undefined,
        cards: cardsServiceOrdersUnassigned || [],
        invalid: false,
        node: boardReducer.nodeBoard.name,
        nodeId: boardReducer.nodeBoard.id,
      });

      for (const user of boardReducer.nodeBoard.users) {
        const userOSs = allServiceOrders.filter((so) => {
          const osResponsibleIds = so.responsible?.map(
            (responsible) => responsible.userId
          );
          return osResponsibleIds.includes(user.id);
        });
        const userCards = userOSs.map(generateCardDataMap);
        const list = {
          title: user.name,
          id: user.id,
          userId: user.id,
          cards: userCards,
          invalid: false,
          node: boardReducer.nodeBoard.name,
          nodeId: boardReducer.nodeBoard.id,
        };
        listas.push(list);
      }

      const userIslandId = boardReducer.nodeBoard.users.map((item) => item.id);
      const userSwitchedIslandsServiceOrders = allServiceOrders.filter(
        (item) =>
          item.responsible?.[0]?.userId &&
          !userIslandId.includes(item.responsible?.[0]?.userId)
      );
      const userSwitchedIslands = userSwitchedIslandsServiceOrders.reduce(
        (prev, curr) => {
          if (curr.responsible?.[0]?.userId) {
            prev[curr.responsible[0].userId] = curr.responsible[0];
          }
          return prev;
        },
        {}
      );

      for (const { userId, user } of Object.values(userSwitchedIslands)) {
        const cards = userSwitchedIslandsServiceOrders
          .filter((so) => so.responsible?.[0]?.userId === userId)
          .map(generateCardDataMap);
        const list = {
          title: user.name,
          id: userId,
          userId: userId,
          cards,
          invalid: true,
        };
        listas.push(list);
      }

      // setDelay('delay');
      setLists(listas);
      setUpdateOs(false);
    }

    async function handleGetDashboardCard(nodeId) {
      const dashboardCard = await getDashboardCard(nodeId);
      setDashboard(dashboardCard);
    }

    async function getIslandAll() {
      const dashboardService = new DashboardService();
      const dashboardApi = await dashboardService.get(authReducer.user.id);
      if (dashboardApi) {
        setIslandAll(dashboardApi);
      }
    }

    if (boardReducer.nodeBoard && updateOs) {
      // clearBoard()
      setBoard();
      handleGetDashboardCard(
        boardReducer.nodeBoard && boardReducer.nodeBoard.id
      );
    }
    if (!boardReducer.nodeBoard) {
      setLists([]);
      setListAux([]);
    }

    getIslandAll();
  }, [boardReducer.nodeBoard, updateOs]);

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

    if (nodeId === null) {
      nodeId = boardReducer.nodeBoard.id;
    }

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
    const node = lists.find((node) => {
      return !serviceOrder.responsible || serviceOrder.responsible.length === 0
        ? !node.userId
          ? true
          : false
        : node.userId ===
            serviceOrder.responsible[serviceOrder.responsible.length - 1]
              .userId;
    });
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
        <StaffBoardContainer>
          <header className='header-path-finder'>
            <Row>
              <ul>
                <li>
                  <div className='dashboard'>
                    {!headerCard && <DashboardLoadingCard />}
                    {headerCard && (
                      <CardHeader
                        boardReducer={boardReducer}
                        item={headerCard}
                        link={false}
                      />
                    )}
                  </div>
                </li>
                <li className='location'>
                  <Link to='/dashboard'>Dashboard /</Link>
                  <span>
                    {' '}
                    {boardReducer.nodeBoard
                      ? boardReducer.nodeBoard.name
                      : '--'}
                  </span>
                </li>
              </ul>
            </Row>
          </header>
          {listAux[0] && listAux[0].userId === -1 ? (
            <NotFound>OS não encontrada!</NotFound>
          ) : (
            <div className='content'>
              <main>
                <Board
                  type='island-board'
                  data={listAux.length > 0 ? listAux : lists}
                  beginTreatment={beginTreatment}
                  updateOs={setUpdateOs}
                  stopTreatment={stopTreatment}
                  serviceOrderSelected={serviceOrderSelected}
                  serviceOrderLoading={serviceOrderLoading}
                  handleClickServiceOrder={handleClickServiceOrder}
                  setServiceOrderSelected={SetServiceOrderLoading}
                  patchResponsible={handlePatchResponsible}
                  patchNodePriorities={handlePatchNodePriorities}
                  patchUserPriorities={handlePatchUserPriorities}
                  handlePatchPriority={handlePatchPriority}
                  checkIfIsInAttendant={checkIfIsInAttendant}
                  islandAll={islandAll}
                  levelOs={levelOs}
                  typeOs={typeOs}
                  orderHourPrice={orderHourPrice}
                  confirmPrecification={confirmPrecification}
                />
              </main>
            </div>
          )}
        </StaffBoardContainer>
      )}
    </>
  );
};

export default StaffBoardComponent;
