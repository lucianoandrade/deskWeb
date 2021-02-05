import React, { useRef, useState, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { STATUS } from '../../../constants/status.constants';

import { Container, IconBookmark, IconToday, IconTime} from './styles';

export default function Card({
  card,
  index,
  listIndex,
  handleClickServiceOrder,
  activeModalOperators
}) {

  const ref = useRef();
  const { move } = useContext(BoardContext);
  const [openSelect, setOpenSelect] = useState(false);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      item.targetIndex = targetIndex;
      item.targetListIndex = targetListIndex;
    },
    drop(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedListIndex === targetListIndex) return;
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      activeModalOperators();
    },
    collect: monitor => ({ isOver: monitor.isOver() })
  })
  dragRef(dropRef(ref));

  function getStatus(status) {
    return STATUS[status];
  }

  const status = getStatus(card.status);
  
  return (
    <Container
      ref={ref}
      isOver={isOver}
      status={status}
      onClick={() => handleClickServiceOrder(card.id)}
    >
      <div className="header">
        <div className="cardId">{`OS ${card.id}`}</div>
        <div className="statusTitle">{`${status.title}`}</div>
      </div>
      <div className="content"> 
        <div className="labels">
        <span>{`${card.labels.customerName || '--'} | ${card.labels.type || '--'}`}</span>
        </div>
        <div style={{ marginBottom: '7px' }}>
          {card && card.globalPriority ? (
            <div className="priority"> 
              <button className="btn-priority-active">
                <IconBookmark/>
              </button>
              <span>Prioridade</span>
            </div> 
          ) : ''}
        </div>
        <p>
          {card.title}
        </p>
        <div className="labelsTime">
          {card.labels.previewDate ? <div><IconToday /><span className="labelsTitle">Data de Previsão:</span><span className="labelsInfo">{`${card.labels.previewDate}`}</span></div> : ""}
          {card.labels.totalTreatmentTime ? <div><IconTime />{card.labels.totalTreatmentTime}</div> : ""}
        </div>
      </div>
    </Container>
  );
}
