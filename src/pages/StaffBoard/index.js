import React from 'react';
import { useParams } from 'react-router-dom';

import StaffBoardComposer from '../../composers/StaffBoard';

const StaffBoardPage = () => {
  const { nodeId } = useParams();

  return (
    <StaffBoardComposer nodeId={nodeId} />
  );
}

export default StaffBoardPage;
