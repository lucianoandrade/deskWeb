import styled, { css } from 'styled-components';
import { BsBookmarkFill } from 'react-icons/bs';
import { MdToday } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  margin: 0 0 10px 0;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(21,27,38,.15);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: box-shadow 100ms,transform 100ms,background-color 100ms,border-color 100ms;
  cursor: grab;
  transition: 0.5s;
  border-top: ${({ isOver, theme }) => isOver ? `1px solid ${theme.palette.primary}` : 'none' };

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin: 0;
    border-radius: 5px 5px 0 0;
    padding: 12px 12px 2px;
    place-content: space-between;

    .cardId {
      font-family: "Oxygen", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.palette.black};
    }
    .statusTitle {
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      background-color: ${(props) => props.status.backgroundColor || '#FFF'};
      color: ${(props) => props.status.color || '#FFF'};  
      font-family: "Oxygen", sans-serif;
      font-weight: 700;
      font-size: 12px;
      line-height: 150%;
      border-radius: 4px;
      text-align: center;
      padding: 0 8px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 4px 12px 2px;
    border: 2px solid transparent;

    p {
      height: 42px;
      width: 260px;
      font-family: "OxygenLIght", sans-serif;
      font-size: 14px;
      line-height: 150%;
      color: #222222;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .labels {

      span {
        font-size: 12px;
        font-family: "OxygenLIght", sans-serif;
        line-height: 140%;
        /* background-color: #f4f5f5; */
        color: ${({ theme }) => theme.palette.gray};
        /* padding: 4px;
        border-radius: 2px;
        margin-right: 4px;
        margin: 0 4px 4px 0; */
        float: left;
      }
    }
    .btn-priority-active {
      width: 16px;
      height: 16px;
    }
  }
  .priority {
    span{
      height: 17px;
      width: 71px;
      font-family: "OxygenLIght", sans-serif;
      font-weight: bold;
      font-size: 11px;
      line-height: 150%;
      text-align: center;
      text-transform: uppercase;
      color: ${({ theme }) => theme.palette.gray};
      margin-left: 4px;
    }
  }
  .labelsTime {
    margin: 8px 0 12px;
    font-family: "OxygenLIght", sans-serif;
    color: ${({ theme }) => theme.palette.gray};
    font-size: 12px;
    line-height: 150%;

    :last-child {
      margin-bottom: 0px;
    }

    .labelsTitle {
      width: 94px;
    }

    .labelsInfo {
      width: 100%;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 4px;
    }

    div {
      display: flex;
      margin-bottom: 8px;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      
      span {
        font-weight: bold;
      }
    }
  }
`;

export const IconBookmark = styled(BsBookmarkFill)`
  height: 9px;
  width: 9px; 
  color: ${({ theme }) => theme.palette.white};
`;

export const IconToday = styled(MdToday)`
  height: 16px;
  width: 16px;  
  margin-right: 5px;
  color: ${({ theme }) => theme.palette.primary};
`;


export const IconTime = styled(MdAccessTime)`
  height: 16px;
  width: 16px;  
  margin-right: 5px;
  color: ${({ theme }) => theme.palette.primary};
`;
