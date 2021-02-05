import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Form = styled.form`
   display:flex;
   margin:0;
   border: 1px solid #E2E2E2;
   box-sizing: border-box;
   border-radius: 2px;
`;

export const Input = styled.input`
   height:40px;
   border-radius: 3px;
   outline:none;
   border:none;

   &::placeholder {
      color: ${props=>props.theme.palette.lightGray}
   }
`;

export const Button = styled.button`
   outline:none;
   border:none;
   width:32px;
   background:${props=>props.theme.palette.white};
   color:#C0C0C0;

   &:hover{
       cursor:pointer;
   }
`;

export const SearchIcon = styled(FaSearch)`
   height:20px;
   margin:10px 14px;
   color:#C0C0C0;
   cursor:pointer;
`;