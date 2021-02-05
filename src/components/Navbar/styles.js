import styled, { css } from 'styled-components';
import { ReactComponent as CreateOS } from '../../assets/images/createos.svg';

export const Container = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  /* background-color: ${({ theme }) => theme.palette.primary}; */
  padding: 10px 24px;
  height:60px;
  width:100%;
  color:${({ theme }) => theme.palette.black};

  @media screen and (max-width:960px){
      width:100%;

      .search{
        display:none;
      }
    }

  img{
    height:40px;
  }  

  >div {
    margin-right: 20px;
  }

  ul {
    /* margin-bottom: -2px; */

    li {
      list-style: none;
      
      a {
        /* color: #FFF; */
        font-weight: bold;
        font-size: 0.9em;
        margin-right: 10px;
        border-bottom: 2px solid transparent;
        padding-bottom: 2px;
      
        &:hover {
          cursor: pointer;
        }
      }

      a.active {
        border-bottom: 2px solid #FFF;
      }
    }
    .tasksInAttendance {
      display: flex;
      margin-right: 20px;
      align-items: center;

      .openTask {
        margin-right: 12px;
        font-family: "Oxygen", sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color:${({ theme }) => theme.palette.gray};
      }
      .osOpen {
        display: flex;
        p {
          font-family: "Oxygen", sans-serif;
          font-size: 14px;
          line-height: 18px;
          margin-right: 12px;
          padding: 10px 12px 12px;
          background: #F1F5FA;
          color:${({ theme }) => theme.palette.darkBlue};
          border-radius: 3px;

          span {
            font-size: 14px;
            font-weight: 900;
            margin-left: 12px;
            cursor: pointer;
          }
        }
        .stopService-hover {
          position: absolute;
          transition: 500ms all;
          padding: 0 8px;
          height: 25px;
          background: rgba(70, 90, 120, 0.9);
          color: #fff;
          border-radius: 13px;
          font-family: "OxygenBold", sans-serif;
          font-size: 12px;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          margin-top: 10px;
        }
      }
      .moreTasks {
        font-family: "Oxygen", sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        color: ${({ theme }) => theme.palette.primary};
        cursor: pointer;
      }
    }
  }

  .icon{
    margin-left:24px;
    cursor:pointer;
  }

  .create-os {
    cursor:pointer;
    margin-left: 24px;
  }

  .actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .btn-signout {
      cursor: pointer;
      background-color: transparent;
      border: 0;
      color: ${props=>props.theme.palette.darkBlue};
      font-weight:700;
      font-size: .9em;
      line-height: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* margin-top: 4px; */

      svg {
        margin-left: 5px;
      }
    }
  }
`;

export const IconCreateOS = styled(CreateOS)`
    width: 40px;
    height: 40px;
`;