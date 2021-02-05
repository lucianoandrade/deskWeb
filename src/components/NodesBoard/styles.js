import styled from 'styled-components';

export const NodesBoardContainer = styled.div.attrs({
  className: 'screen-board'
})`
  display: flex;
  flex: 1;
  height: 100%;
  > * {
    flex: 1;
  }
`;
