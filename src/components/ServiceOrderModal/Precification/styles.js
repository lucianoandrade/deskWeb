import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';

export const Container = styled.div`
  header {
     margin-top: -30px;
     width: 90%;
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
        margin-left: 12px;
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
    display:flex;
    flex-direction:column;
    margin-right:20px;

    h2{
      font-size:18px;
      font-weight:700;
      font-family: "Oxygen", sans-serif;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      color: #465A78;
      background: #F1F5FA;
      padding: 8px;
      border-radius: 3px;
    }

    section {
      display: flex;
      padding: 16px 0 28px 0;
      align-items: flex-end;

      .tipoHora{
        display:flex;
        flex-direction: column;
        font-family: "OxygenBold", sans-serif;
        font-weight: 700 !important;
        font-size: 14px;
        line-height: 150%;
        color: ${({ theme }) => theme.palette.black};
        max-width: 217px;
        align-self: flex-start;
        margin-right: 20px;

        p {
          font-family: "Oxygen", sans-serif;
          font-weight: 700 !important;
        } 

        div {
          label {
            vertical-align: super;
            margin-left: 8px;
            font-size: 14px;
          }
        }

        .inputTotal {
          background: #F3F3F3;
        }
      }

      .quantidade{
        display:flex;
        flex-direction: column;
        font-family: "OxygenBold", sans-serif;
        font-weight: 700 !important;
        font-size: 14px;
        line-height: 150%;
        color: ${({ theme }) => theme.palette.black};
        margin-right: 20px;
        max-width: 217px;

        p {
          font-family: "Oxygen", sans-serif;
          font-weight: 700 !important;
        } 
      }
    }

    .valores{
        display:flex;
        flex-direction: column;
        margin-right:20px;
        width: 100%;
        max-width: 217px;

        p {
          font-family: "Oxygen", sans-serif;
          font-weight: 700 !important;
        } 
    }
    
    .estimativa{
      display:flex;
      flex-direction: column;
      margin: 16px 0 28px;
      max-width: 217px;
    }

    p{
      font-family: "Oxygen", sans-serif;
      font-weight:700 !important;
      font-size:14px;
      margin-right:12px;
    }

    /* input[type="text"]{
        height:42px;
        width:50px;
        font-size:12px;
        font-family: "Oxygen", sans-serif;
        font-weight:700;
        color: ${props=>props.theme.palette.lightGray};
    }

    input[type="text"]:valid, input[type="text"]:focus {
      color: ${props=>props.theme.palette.black};
    } */

    input[type="checkbox"]{
      position: relative;
	    cursor: pointer;
      margin: 15px 0 12px;
    }

      input[type=checkbox]:before {
        content: "";
        display: block;
        /* position: absolute; */
        height: 24px;
        width: 24px;
        top: 0;
        left: 0;
        background-color:#fff;
        border: 1px solid #e9e9e9;
        border-radius: 3px;
      }
      input[type=checkbox]:checked:before {
        content: "";
        display: block;
        /* position: absolute; */
        width: 24px;
        height: 24px;
        top: 0;
        left: 0;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 3px;
      }
      input[type=checkbox]:checked:after {
        content: "";
        display: block;
        width: 5px;
        height: 11px;
        border: solid #1269EB;
        border-width: 0 4px 4px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 4px;
        left: 8px;
        border-radius: 3px;
      }

      .labelCheckbox {
        margin-left: 20px !important;
        font-size: 14px !important;
        vertical-align: bottom !important;
      }

    input[type="number"], input[type="text"]{
      width:${props=>props.width};
      height:42px;
      font-size:12px;
      font-family: "Oxygen", sans-serif;
      font-weight:700;
      padding: 0 10px;
      border: 1px solid #dedede;
      border-radius:4px;
      margin: 8px 0 0;
      max-width: 217px;
      color: ${props=>props.theme.palette.lightGray};

      ::placeholder {
        color: ${props=>props.theme.palette.lightGray};
      }
    }

    input[type="number"]:valid, input[type="number"]:focus {
      color: ${props=>props.theme.palette.black};
    }
`;

export const RightSide = styled.div`
    width:calc(100% - 400px - 20px);

    h2{
        font-size:18px;
        font-weight:700;
        font-family: "Oxygen", sans-serif;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
        color: #465A78;
        background: #F1F5FA;
        padding: 8px;
        border-radius: 3px;
    }

    div {
      margin: 8px 0;
      font-family: "Oxygen", sans-serif;
    }
`;

export const Select = styled.select`
    width:${props=>props.width};
    height:42px;
    font-size:16px;
    font-family:Roboto, sans-serif;
    font-weight:400;
    padding: 0 10px;
    border: 1px solid #dedede;
    border-radius:4px;
    margin: 8px 0 0;
`;

export const Option=styled.option`
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
export const ArrowLeft = styled(HiArrowLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.palette.primary};
`;