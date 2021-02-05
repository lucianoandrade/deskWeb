import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 0 10px 0;
  align-items: center;
  border-radius: 4px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: box-shadow 100ms,transform 100ms,background-color 100ms,border-color 100ms;
  cursor: grab;
  transition: 0.5s;
  color: ${({ theme }) => theme.palette.gray};
  border-top: ${({ isOver, theme }) => isOver ? `1px solid ${theme.palette.primary}` : 'none' };

  .content {
    display: flex;
    flex-direction: column;
    font-family: "OxygenLIght", sans-serif;
    font-size: 15px;
    text-align: center;
    padding-top: 16px;
    p {
      font-weight: normal;
      min-height: 57px;
      max-height: 87px;
      white-space: normal;
      text-overflow: ellipsis;
      width: 100%;
      display: block;
      overflow: hidden;
      font-size: 0.8em;
    }

    .labels {
      margin-top: 15px;

      span {
        font-size: .6em;
        background-color: #f4f5f5;
        color: 000;
        padding: 4px;
        border-radius: 2px;
        margin-right: 4px;
        margin: 0 4px 4px 0;
        /* width: auto; */
        white-space: nowrap;
        float: left;
      }
    }
  }
`;

