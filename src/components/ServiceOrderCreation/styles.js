import styled from 'styled-components';
import { FaPaperclip } from 'react-icons/fa';
import { ReactComponent as IconCloseOutline } from '../../assets/images/close-outline.svg';

export const Container = styled.div`
  header {
     margin-top: -30px;
     cursor: pointer;
    h1 {
      display: flex;
      margin-top: 8px;
      margin-bottom: 8px;
      align-items: center;

      strong {
        display: block;
        height: 25px;
        width: 508px;
        font-family: "Oxygen", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.palette.black};
      }
    }

    p {
      font-size: 1em;
      margin-top: 6px;
      color: #505050;
    }
  }

  .text {
    h1 {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  display:flex;
  flex-direction:column;
`;

export const Body = styled.div`
    margin-top: 24px;
    display:flex;
    justify-content:space-between;
`;

export const Footer = styled.div`
  margin-top: 8px;
  display:flex;
  justify-content:flex-start;
`;

export const LeftSide = styled.div`
  width:80%;
  max-width: 552px;
  display:flex;
  flex-direction:column;
  margin-right:32px;

  label {
    font-size: 14px;
    font-weight:700;
    font-family: "Oxygen", sans-serif;
    line-height: 150%;
    color: #222222;
    padding-bottom: 8px;
  }

  input[type="text"]{
    height:40px;
    width: 100%;
    font-size: 14px;
    font-family: "Oxygen", sans-serif;
    color: ${props=>props.theme.palette.lightGray};
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px 16px 10px;
    margin-bottom: 24px;
  }

  input[type="text"]:valid, input[type="text"]:focus {
    color: ${props=>props.theme.palette.black};
  }

  textarea {
    background: #FFF;
    border: 1px solid #E2E2E2;
    border-radius: 3px;
    width: 100%;
    height: 110px;
    resize: none;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    line-height: 150%;
    padding: 12px 16px 0;
    margin-bottom: 24px;

    ::placeholder {
      color: #C0C0C0;
    }
  }

  section {
    display: flex;
    margin-bottom: 24px;
    align-items: flex-end;

    .selectLeftSide{
      display:flex;
      flex-direction: column;
      width: 100%;
      max-width: 266px;
      font-family: "Oxygen", sans-serif;
      font-size: 14px;
      line-height: 150%;
      color: ${({ theme }) => theme.palette.black};
      margin-right: 20px; 
    }
  }
`;

export const RightSide = styled.div`
  width: 100%;
  max-width: 328px;

  label {
    font-size: 14px;
    font-weight:700;
    font-family: "Oxygen", sans-serif;
    line-height: 150%;
    color: #222222;
    padding-bottom: 8px;
  }
  .selectRightSide{
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 328px;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => theme.palette.black};
    margin-bottom: 24px; 
  }

  .listOfAttachments {
    margin-right: 12px;

    table {
      margin-top: 4px;
      border-spacing: 0;
      thead {
        font-family: "Oxygen", sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        color: ${({ theme }) => theme.palette.gray};

        .tableTitle {
          width: 100%;
          height:32px;
          .name {
            padding: 0 20px 0 8px;
            width: 100%;
            height:32px;
            max-width: 172px;
            height: 32px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; 
          }
          .size {
            padding-right: 28px;
            width: 100%;
            height:32px;
            max-width: 68px;
          }
          .icon {
            height:32px;
            padding-right: 8px;
          }
        }
      }
      tbody {
        font-family: "Oxygen", sans-serif;
        font-size: 12px;
        line-height: 150%;
        color: #1F191A;

        .tableContent {
          width: 100%;
          height: 32px;
          vertical-align: middle;
          td{
            border-top: 1px solid #DBE5ED;
          }
          .name {
            padding: 0 20px 0 8px;
            max-height:32px;
            width: 100%;
            max-width: 172px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .size {
            padding-right: 28px;
            max-height:32px;
            width: 100%;
            max-width: 68px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .icon {
            padding-right: 8px;
            max-height:32px;
            cursor: pointer;
            vertical-align: middle;
          }
        }
        .tableContent:nth-child(odd) {         
          background: #F8F8F8;
        }
        .tableContent:nth-child(even) {
          background: #FFFFFF;
        }
        .noFile {
          width: 100%;
          height: 32px;
          font-family: "Oxygen", sans-serif;
          font-size: 12px;
          line-height: 150%;
          text-align: center;
          color: ${({ theme }) => theme.palette.black};
          border-top: 1px solid #DBE5ED;
          border-bottom: 1px solid #DBE5ED;
          background: #F8F8F8;
        }
      }
    }
  }
`;

export const SelectStyle = styled.select`
    height:40px;
    min-width: 266px;
    font-size:14px;
    font-family: "Oxygen", sans-serif;
    font-weight:400;
    padding: 0 16px;
    border: 1px solid #dedede;
    border-radius:3px;
`;

export const Option = styled.option`
  font-size:14px;
  font-family:Roboto, sans-serif;
  font-weight:400;
  background:${props=>props.theme.palette.white};
  color: ${props=>props.theme.palette.black};
`;

export const Button  = styled.button`
    background:${props=>props.theme.palette.primary};
    border:none;
    color: #fff;
    border: none;
    height: 40px;
    width: 78px;
    border-radius: 3px;
    font-family: "OxygenBold", sans-serif;
    font-size: 12px;
    
    &:hover{
      cursor: pointer;
    }
`;
export const ButtonCancel = styled.button`
    background:#F1F5FA;
    border:none;
    color: ${props=>props.theme.palette.gray};
    border: none;
    height: 40px;
    width: 78px;
    border-radius: 3px;
    font-size: 12px;
    font-family: "OxygenBold", sans-serif;
    &:hover{
      cursor: pointer;
    }
`;

export const AttachmentButton  = styled.label`
    background:${props=>props.theme.palette.primary};
    color: #fff !important;
    border: none;
    height: 32px;
    width: 100%;
    border-radius: 3px;
    font-family: "OxygenBold", sans-serif !important;
    font-size: 12px !important;
    text-align: center !important;
    line-height: 150% !important;
    padding: 8px;
    
    &:hover{
      cursor: pointer;
    }
`;

export const IconPaperclip = styled(FaPaperclip)`
  height: 12px;
  width: 12px;
  color: ${({ theme }) => theme.palette.white};
`

export const IconClose = styled(IconCloseOutline)`
  height: 24px;
  width: 24px;
`