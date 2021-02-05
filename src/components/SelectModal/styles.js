import styled from 'styled-components';

export const Title = styled.div`
    margin-top: -20px;
    font-size:18px;
    font-family: 'Oxygen', sans-serif;  
    font-weight:700;
    color:#212121;
    width: 100%;
    display: flex;

    .cardId {
      font-family: "Oxygen", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.palette.black};
      margin-right: 12px;
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
`;

export const Choices = styled.div`
    margin-top: 28px;
`;

export const Select = styled.select`
    width:100%;
    height:42px;
    font-size:14px;
    font-family: 'Oxygen', sans-serif;
    font-weight:400;
    padding: 0 10px;
    border: 1px solid #dedede;
    border-radius:4px;
    margin-bottom: 24px;
`;

export const Option=styled.option`
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
    color: ${({ theme }) => theme.palette.black};
`;

export const SubTitle = styled.label`
    font-size: 12px;
    font-family: "OxygenLIght", sans-serif;
    line-height: 140%;
    color: ${({ theme }) => theme.palette.gray};
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