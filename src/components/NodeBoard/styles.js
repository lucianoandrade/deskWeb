import styled from 'styled-components';

export const NodeBoardContainer = styled.div.attrs({
  className: 'screen-board'
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 14px 0 14px 24px;

  header {
    display: flex;
    align-items: center;
  }
`;

export const Row = styled.div`
  display:flex;
  justify-content:space-between;
  position: fixed;

  ul {
    display: contents;
    .location {
      position: fixed;
      right: 0;
      margin-right: 24px;
      a {
        font-family: "Oxygen", sans-serif;
        font-size: 14px !important;
        line-height: 18px;
        text-align: right;
        color:${({theme}) => theme.palette.gray} !important;
      }
      span {
        font-family: "Oxygen", sans-serif;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        color:${({theme}) => theme.palette.black};
      }
    }
  }
`;

export const NotFound = styled.h2`
  text-align:center;
  margin-top:20px;
  border: 1px solid red;
`;