import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #465a78;

  min-width: 138px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  cursor: pointer;
  :hover {
    color: #0E2341;
  }
`;

export const DropdownMenuItem = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <div>{children}</div>
    </Wrapper>
  );
};
