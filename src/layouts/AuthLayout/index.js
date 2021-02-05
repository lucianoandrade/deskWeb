import React from 'react';

import { 
  AuthLayoutContainer,
} from './styles';

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutContainer>
      {children}
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
