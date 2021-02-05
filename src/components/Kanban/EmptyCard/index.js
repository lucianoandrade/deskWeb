import React, { useRef, useContext, useState } from 'react';
import { useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container } from './styles';

export default function EmptyCard({ index, listIndex, hidden, activeModalOperators }) {
  const { move } = useContext(BoardContext);

  const ref = useRef();
  const [{ isOver }, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;
      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
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
  });

  dropRef(ref);

  return (
    <Container isOver={isOver} ref={ref} hidden={hidden}>
      <div className='content'>Arraste uma OS para este quadro</div>
    </Container>
  );
}
