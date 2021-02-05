import React, { useState, useEffect, memo } from 'react';
import produce from 'immer';

import BoardContext from './context';

import List from '../List';
import ServiceOrderModal from '../../ServiceOrderModal';
import SelectModal from '../../SelectModal';

import { Container } from './styles';

export default function Board({
  type,
  title,
  data,
  islandAll,
  serviceOrderSelected,
  serviceOrderLoading,
  handleClickServiceOrder,
  setServiceOrderSelected,
  patchResponsible,
  patchNodePriorities,
  patchUserPriorities,
  handlePatchPriority,
  getUserByNode,
  updateOs,
  beginTreatment,
  checkIfIsInAttendant,
  stopTreatment,
  levelOs,
  typeOs,
  orderHourPrice,
  confirmPrecification
}) {
  const [lists, setLists] = useState(data);
  const [statePriority, setStatePriority] = useState();
  const [changedIsland, setChangedIsland] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [islandId, setIslandId] = useState();
  const [serviceOrderId, setServiceOderId] = useState();
  const [serviceOrderInfo, setServiceOderInfo] = useState();
  const [islandDropped, setIslandTo] = useState();
  const [islandDragged, setIslandFrom] = useState();
  const [costumerId, setCostumerId ] = useState();

  useEffect(() => {
    setLists(data)
  }, [data])


  async function handlePatchResponsible(serviceOrderId, userId, nodeId) {
    await patchResponsible(serviceOrderId, userId, nodeId);
  }

  async function handlePatchPriorities(toListIndex, fromIndex, toIndex) {
    if (type === 'node-board') {
      // Alterar prioridade da OS em uma ilha
      const serviceOrders = [];

      const serviceOrdersList = lists[toListIndex].cards;
      const serviceOrder = lists[toListIndex].cards[fromIndex];

      let aux = 0
      let firt = '';
      for (let index = 0; index < serviceOrdersList.length; index++) {
        if (index === fromIndex) {
          if (firt !== 'to') {
            firt = 'from';
            aux = -1;
          }
        }

        if (index === toIndex) {
          if (firt !== 'from') {
            firt = 'to';
            aux = 1;
          }
        }

        serviceOrders.push({
          serviceOrderId: serviceOrdersList[index].id,
          priority: index + aux,
        });

        if (index === toIndex) {
          if (firt === 'from') {
            aux = 0;
          }
        }

        if (index === fromIndex) {
          if (firt === 'to') {
            aux = 0;
          }
        }
      }
    } else {
      // Alterar prioridade da OS em um funcionário
    }
  }

  function activeModalOperators() {
    setChangedIsland(false)
    setOpenSelect(true)
  }

  function move(fromListIndex, toListIndex, fromIndex, toIndex) {
    setLists(produce(lists, draft => {

      const dragged = draft[fromListIndex].cards[fromIndex];
      const serviceOrder = lists[fromListIndex].cards[fromIndex];
      
      if(!lists[toListIndex].invalid) {
        if (fromListIndex !== toListIndex) {
          const fromList = lists[fromListIndex];
          const toList = lists[toListIndex];
          if (type === 'node-board') {
            setIslandId(toList.id)
            setIslandFrom({ ...fromList, listIndex: fromListIndex, index: fromIndex });
            setIslandTo({ ...toList, listIndex: toListIndex, index: toIndex });
            setServiceOderInfo(serviceOrder)
            setServiceOderId(serviceOrder.id)
            // handlePatchResponsible(serviceOrder.id, null, toList.id);
          } else {
            setIslandFrom(fromList)
            setIslandTo(toList)
            confirmUser(serviceOrder.id, toList.userId, toList.nodeId);
            // handlePatchResponsible(serviceOrder.id, toList.id, null);
          }
          
          draft[fromListIndex].cards.splice(fromIndex, 1);
          draft[toListIndex].cards.splice(toIndex, 0, dragged);
          setChangedIsland(true);
        } else {
          draft[fromListIndex].cards.splice(fromIndex, 1);
          draft[toListIndex].cards.splice(toIndex, 0, dragged);
          
          setStatePriority({
            toListIndex,
          });
          setChangedIsland(false);
        }
      }
    }));
  }


  async function confirmUser(serviceOrderId, userId, nodeId) {
    await handlePatchResponsible(serviceOrderId, userId, nodeId)
    updateOs(true)
  }

  useEffect(() => {
    async function patch(list) {
      if (type === 'node-board') {
        await patchNodePriorities(list);
      } else {
        await patchUserPriorities(list);
      }
    };

    if (statePriority) {
      const newList = lists[statePriority.toListIndex].cards.map((serviceOrder, index) => {
        return {
          serviceOrderId: serviceOrder.id,
          priority: index,
        };
      });

      if (type === 'node-board') {
        patch(newList);
      } else {
        patch(newList);
      }

      setStatePriority();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists]);

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {serviceOrderLoading && (
        <ServiceOrderModal
          data={serviceOrderSelected}
          open={false}
          setOpen={setServiceOrderSelected}
          handlePatchPriority={handlePatchPriority}
          beginTreatment={beginTreatment}
          checkIfIsInAttendant={checkIfIsInAttendant}
          stopTreatment={stopTreatment}
          updateOs={handleClickServiceOrder} // Evitando carregar toda a ilha novamente
          levelOs={levelOs}
          typeOs={typeOs}
          orderHourPrice={orderHourPrice}
          confirmPrecification={confirmPrecification}
          nodes={data}
          islandAll={islandAll}
        />
      )}
      {openSelect && type === 'node-board' && <SelectModal islandDropped={islandDropped} islandDragged={islandDragged} move={move} nodes={data} serviceOderInfo={serviceOrderInfo} close={() => {setOpenSelect(false);}} confirmUser={confirmUser} getUserByNode={getUserByNode} />}
      <Container className="lists">
        {lists ? (
          lists.map((list, index) => {
            return <List
              boardType={type}
              data={list}
              index={index}
              handleClickServiceOrder={handleClickServiceOrder}
              activeModalOperators={activeModalOperators}
            />
          })
        ) : null}
      </Container>
    </BoardContext.Provider>
  );
}
