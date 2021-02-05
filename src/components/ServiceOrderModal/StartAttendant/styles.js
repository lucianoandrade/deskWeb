import styled from 'styled-components';

export const Container = styled.div`
  header {
    h1 {
      margin-top: 8px;
      margin-bottom: 8px;

      strong {
        color: ${({ theme }) => theme.palette.primary};
        display: block;
        font-size: 14px;
        font-weight: 600;
      }
    }

    p {
      font-size: 1em;
      margin-top: 6px;
      color: #505050;
    }
  }

  div{
      display:flex;
      justify-content:space-between;
  }

  .text {
    h1 {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const Button = styled.button`
    height:42px;
    width:80%;
    background: ${({ theme }) => theme.palette.primary};
    color:#fff;
    outline:none;
    margin-top:32px;

    &:hover{
        cursor:pointer;
    }
`