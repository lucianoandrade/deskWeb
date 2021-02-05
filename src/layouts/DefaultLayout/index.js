import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../state/ducks/auth/actions';


import { 
  DefaultLayoutContainer,
  Menu,
  Container,
  Body,
  MenuIcon
} from './styles';

import Navbar from '../../components/Navbar';
import Menubar from '../../components/Menubar';


const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  const stateToProps = useSelector(
    ({ authReducer }) => ({
      authReducer
    }),
  );

  const dispatchToProps = {
    signOut: useCallback(() => dispatch(signOut()), [dispatch]),
  };

  return (
    <DefaultLayoutContainer>
      <Menubar />
      <Container>
        <Navbar
          children={children}
          user={stateToProps.authReducer.user}
          signOut={dispatchToProps.signOut}
        />
        <Body>{children}</Body>
      </Container>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
