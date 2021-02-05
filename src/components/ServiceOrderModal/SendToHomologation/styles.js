import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  header {
    margin-top: -30px;
    h1 {
      display: flex;
      margin-top: 8px;
      margin-bottom: 21px;
      align-items: center;
      cursor: pointer;

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
`;

export const ArrowLeft = styled(HiArrowLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.palette.primary};
`;

export const Select = styled.select`
  width: 266px;
  height: 40px;
  font-size:14px;
  font-family: 'Oxygen', sans-serif;
  font-weight:400;
  padding: 0 10px;
  border: 1px solid #dedede;
  border-radius:4px;
  margin-bottom: 36px;
`;

export const Textarea = styled.textarea`
  background: #FFF;
  border: 1px solid #E2E2E2;
  border-radius: 3px;
  width: 100%;
  height: 110px;
  padding: 12px 16px;
  margin-bottom: 20px;
  resize: none;
  font-family: "Oxygen", sans-serif;
  font-size: 14px;
  line-height: 150%;

  ::placeholder {
    color: #C0C0C0;
  }
`;

export const Option = styled.option`
    font-size:14px;
    font-family: 'Oxygen', sans-serif;
    font-weight:400;
`;

export const Label = styled.label`
    width: 400px;
    height: 21px;
    font-family: "OxygenBold", sans-serif;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.black};
`;

export const Buttons  = styled.div`
  display: flex;
`;

export const Button  = styled.button`
    background:${props=>props.theme.palette.primary};
    color: #fff;
    border: none;
    padding: 10px 12px 12px;
    width: 169px;
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
    padding: 10px 12px 12px;
    width: 74px;
    border-radius: 3px;
    font-size: 12px;
    font-family: "OxygenBold", sans-serif;
    &:hover{
      cursor: pointer;
    }
`;