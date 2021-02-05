import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
`;

const Menu = styled.div`
  background: #ffffff;
  border: 1px solid #e8edf3;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  position: absolute;
  top: 54px;
  right: 24px;
  padding: 12px;
  z-index: 99999;

  > *::after {
    content: '';
    display: block;
    background: #e8edf3;
    border-radius: 4px;
    width: 100%;
    height: 1px;
    margin-top: 12px;
  }
  > *:last-child {
    margin-top: 12px;
  }
  > *:last-child::after {
    content: '';
    display: none;
  }
`;

export const DropdownMenu = ({ children, open, onClose }) => {
  if (!open || !children) return null;
  return (
    <BackDrop onClick={onClose}>
      <Menu onClick={(e) => e.stopPropagation()}>{children}</Menu>
    </BackDrop>
  );
};
