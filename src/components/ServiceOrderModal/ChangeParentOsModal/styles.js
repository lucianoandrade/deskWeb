import styled from 'styled-components';

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
        color: ${({ theme }) => theme.palette.black};
      }
    }
  }
`;

export const Text = styled.p`
  font-family: "Oxygen";
  font-size: 16px;
  line-height: 150%;
  width:100%;
  max-width: 460px;
  /* color: ${({ theme }) => theme.palette.black}; */
  color: #000;
  margin-bottom: 28px;
  font-weight: 400;
  text-align: left;
`;

export const Buttons  = styled.div`
  display: flex;
  margin-top: 24px;
  align-self: flex-end;
`;

export const Button  = styled.button`
    background:${props=>props.theme.palette.primary};
    color: #fff;
    border: none;
    padding: 10px 12px 12px;
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
    margin-right: 20px;
    border-radius: 3px;
    font-size: 12px;
    font-family: "OxygenBold", sans-serif;
    &:hover{
      cursor: pointer;
    }
`;