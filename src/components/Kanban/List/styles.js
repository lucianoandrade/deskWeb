import styled from 'styled-components';
import { lighten } from 'polished';
import { ReactComponent as IconInvalid } from '../../../assets/images/iconInvalid.svg';

export const Container = styled.div`
  padding: 0 10px;
  /* height: 100%; */
  /* height: auto; */
  flex: 0 0 320px;
  /* width: 100%;
  max-width: 300px; */
  background-color: transparent;

  .list {
    background-color: #F1F5FA;
    border-radius: 4px;
    max-height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    /* &:hover {
      overflow-y: auto;
    } */
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding: 10px;
    background: #F1F5FA;
    font-family: "Oxygen", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    border-bottom: 1px solid #FFF;
    border-radius: 10px 10px 0px 0px;

    h2 {
      font-family: "Oxygen", sans-serif;
      font-weight: 700;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.palette.darkBlue};
      
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.darkBlue};
      }

      .cardsLength {
        color: ${({ theme }) => theme.palette.gray};
      }
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: ${({ theme }) => theme.palette.primary};
      border: 0;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  ul {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 8px 0;
    background: #F1F5FA;
    width: 300px;

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => lighten(0.01, props.theme.palette.primary)};
      border-radius: 10px;
      border: 4px solid ${(props) => lighten(0.35, props.theme.palette.primary)};
    }
  }
`;
export const IconUserInvalid = styled(IconInvalid)`
  width: 20px;
  height: 17px;
  margin-right: 3px;
  vertical-align: middle;
`;