import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from '../../assets/images/menu.svg';
import { ReactComponent as IconHome } from '../../assets/images/iconhome.svg';
import { ReactComponent as iconHomeWhite } from '../../assets/images/iconHomeWhite.svg';
import { ReactComponent as vectorReport } from '../../assets/images/vectorReport.svg';
import { RiDashboardLine } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai';
import { lighten } from 'polished';


export const Wrapper = styled.div`
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  align-items:center;
  min-width: ${props => props.expansion ? '256px' : '60px'};
  height:100vh;
  background:${({ theme }) => theme.palette.primary};
  color:${({theme}) => theme.palette.white};
  padding: 23px 10px;
  overflow: auto;
  overflow-x: hidden;
  transition-delay: 150ms;
  transition: all 0.5s ease 0s;
  font-family: "Oxygen", sans-serif;

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

  .active{
    width: ${props => props.expansion ? '224px' : '40px'};
    min-height: ${props => props.expansion ? '56px' : '40px'};
    padding: ${props => props.expansion ? '6px 12px' : '0 10px'};
    margin-bottom: ${props => props.expansion ? '0' : '23px'};
    background:${props=>props.theme.palette.white};
    color: ${({theme}) => theme.palette.gray};
    border-radius:8px;
    font-weight: bold;
    cursor:pointer;
    display: flex;
    align-items: center;
    transition: all 0.5s ease 0s;
    transition-delay: -300ms;

    .icon {
      color: ${({theme}) => theme.palette.primary};
    }
  }

  .not-active{
    width: ${props => props.expansion ? '224px' : '40px'};
    min-height: ${props => props.expansion ? '56px' : '40px'};
    padding: ${props => props.expansion ? '6px 12px' : '0 10px'};
    margin-bottom: ${props => props.expansion ? '0' : '23px'};
    border-radius:8px;
    cursor:pointer;
    color: #D0E1FB;
    display: flex;
    align-items: center;
    transition: all 0.5s ease 0s;
    transition-delay: -300ms;
    
    :hover {
      color: ${props=>props.theme.palette.white};
    }
  }

  span {
    display: ${props => props.expansion ? 'inline-flex' : 'none'};
    vertical-align: middle;
    font-size: 16px;
  }

  .titleMenu {
    display: ${props => props.expansion ? 'inline-flex' : 'none'};
    vertical-align: middle;
    font-size: 16px;
    width: 100%;
    max-width: 150px;
  }

  @media screen and (max-width:960px){
    display:none;
  }
`;

export const MenuIcon = styled(HamburgerMenu)`
  width:24px;
  height:24px;
  margin-left: ${props => props.expansion ? '192px' : '0'};
  color:${({theme}) => theme.palette.white};
  cursor:pointer;
  margin-bottom:23px;
  transition: all 0.5s ease 0s;
`;

export const IconHouse = styled(IconHome)`
  min-height: 20px;
  min-width: 20px;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 14px;
  cursor:pointer;
`;

export const IconWhiteHome = styled(iconHomeWhite)`
  min-height: 20px;
  min-width: 20px;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 14px;
  cursor:pointer;
`;

export const IconReport = styled(vectorReport)`
  min-height: 20px;
  min-width: 20px;
  display: inline-flex;
  vertical-align: middle;
  margin-right: 14px;
  cursor:pointer;
`;

export const IconBoard = styled(RiDashboardLine)`
    min-height: 20px;
    min-width: 20px;
    display: inline-flex;
    vertical-align: middle;
    margin-right: 14px;
    cursor:pointer;
`;

export const IconLineDown = styled(AiOutlineDown)`
    width: 14px;
    height: 14px;
    vertical-align: -webkit-baseline-middle;
`;

export const Temp = styled.div`
  display: ${props => props.expansion && props.reportView  ? 'flex' : 'none'};
  height: 32px;
  width: 224px;
  border-radius: 8px;
  background: ${({theme}) => theme.palette.white};
  color: ${({theme}) => theme.palette.gray};
  align-items: center;
  cursor: pointer;
  span {
    padding: 6px 12px 8px 48px;
    font-family: 'Oxygen', sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
`;