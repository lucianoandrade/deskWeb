import React from 'react';

import { ContentStyle } from './styles';

const Content = ({ children }) => (
  <ContentStyle>
    {children}
  </ContentStyle>
);

export default Content;
