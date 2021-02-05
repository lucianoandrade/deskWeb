import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest, signFailure } from '../../state/ducks/auth/actions';
import AuthComponent from '../../components/Auth';

const AuthComposer = () => {
  const dispatch = useDispatch();

  const stateToProps = useSelector(
    ({ authReducer }) => ({
      authReducer
    }),
  );

  const dispatchToProps = {
    signInRequest: useCallback((
      username,
      password,
    ) => dispatch(signInRequest(username, password)), [dispatch]),
    setError: useCallback((error) => dispatch(
      dispatch(signFailure(error))
    ), [dispatch]),
  };

  useEffect(()=>{
    dispatch({type: 'PURGE'})
  }, [dispatch]);

  return (
    <AuthComponent {...stateToProps} {...dispatchToProps} />
  );
};

export default AuthComposer;
