import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Load from '../../assets/images/load.gif';
// import Container from '../Container';
// import Content from '../Content';

import {
  Background,
  CenterBox,
  DarkBackground,
  Logo,
  LogoArea,
  IconUser,
  IconLock
} from './styles';

const AuthComponent = ({authReducer, signInRequest, setError}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authReducer.error) {
      toast.error(authReducer.error);
      setError('');
    }
  }, [authReducer.error, setError]);

  const handleSubmitSignIn = (event) => {
    event.preventDefault();

    if (username && password) {
      signInRequest(username, password);
    } else {
      toast.warn('Informe seu usuário e senha para efetuar o login');
    }
  };

  return (
    <Background>
      <CenterBox>
        <LogoArea>
          <DarkBackground />
          <Logo />
        </LogoArea>
        <div className="box-auth">
          <h2>Seja bem vindo</h2>
          <p>
            Para se manter conectado, faça login com suas informações pessoais por nome de usuário e senha.
          </p>
          <form className="form-auth" onSubmit={handleSubmitSignIn}>
            <div className="field-box">
              <label>
                <div className="title-input-icon">
                  <IconUser />
                  <span>
                   <b>Usuário:</b>                      
                  </span>
                </div>
                <input value={username} onChange={(e) => setUsername(e.target.value)}  placeholder={`Seu usuário`} />
              </label>
            </div>
            <div className="field-box">
              <label>
                <div className="title-input-icon">
                  <IconLock />
                  <span>
                    <b>Senha:</b>                      
                  </span>
                </div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={`Sua senha`} />
              </label>
            </div>
            <div className="action-button">
              <button disabled={authReducer.loading} className="btn-login">
                {authReducer.loading ? (
                  <img src={Load} />
                ) : (
                  <span>Entrar Agora</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </CenterBox>
    </Background>
  )
};

export default AuthComponent;
