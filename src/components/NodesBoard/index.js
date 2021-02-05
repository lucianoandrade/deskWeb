import React from 'react';

import Board from '../Kanban/Board';

import { NodesBoardContainer } from './styles';

const NodesBoardComponent = () => {
  return (
    <NodesBoardContainer>
      <div className="content">
        <main>
          <Board 
            type="island-board"
          />
        </main>
      </div>
    </NodesBoardContainer>
  )
};

export default NodesBoardComponent;
