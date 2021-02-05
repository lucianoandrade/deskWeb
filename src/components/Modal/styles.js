import styled from 'styled-components';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* width: calc(100% - 260px); */
  height: 100%;
  background: ${(props) => (props.open ? 'rgba(0, 0, 0, 0.35)' : 'transparent')};
  z-index: ${(props) => (props.open ? '999' : '-999')};
  transition: 0.1s all;
  display: flex;

  .modal-content {
    overflow: ${props => props.overflow ? 'auto' : 'hidden'};
    background-color: #FFF;
    margin: auto;
    padding: 32px;
    width: 100%;
    max-width: ${props => props.stylewidth ? props.stylewidth : '1000px'};
    max-height: 92%;
    height: auto;
    transition: 0.5s all;
    right: ${(props) => (props.open ? 0 : '-100%')}!important;
    border-radius: 6px;

    .close-modal {
      display: flex;
      flex-flow: row-reverse;

    .icon {
        height: 24px;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
          fill: ${({ theme }) => theme.palette.gray};
        }

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.palette.secondary};
        }
      }
    }
  }
`;
