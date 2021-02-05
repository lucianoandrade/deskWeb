import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const DefaultLayoutContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:calc(100vw - 60px);

  @media screen and (max-width:960px){
    width:100%;
  }
`;

export const Menu = styled.div`
  display:flex;
  justify-content:center;
  width:60px;
  height:100vh;
  background:${({ theme }) => theme.palette.primary};
  padding:23px 10px;
  color:${({theme}) => theme.palette.white};

  @media screen and (max-width:960px){
    display:none;
  }
`;

export const Body = styled.div`
  height:calc(100vh - 60px); 
  overflow-y:auto;
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  width:24px;
  height:24px;
  color:${({theme}) => theme.palette.white};
`;