import React from 'react';

import { ContainerStyle } from './styles';

const Container = ({ children, backgroundColor = 'transparent', ...rest }) => (
  <ContainerStyle backgroundColor={backgroundColor} {...rest}>
    {children}
  </ContainerStyle>
);

export default Container;
