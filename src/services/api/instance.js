import axios from 'axios';
import { store } from '../../state';

const instance = axios.create({
  baseURL: process.env.REACT_APP_WEBDESKAPI || 'http://10.10.10.101:4000',
});

instance.interceptors.request.use((request) => {
  const token = store.getState().authReducer.token;
  request.headers = {
    Authorization: `Bearer ${token}`
  }
  return request;
})

instance.interceptors.response.use((response) => response, (error) => {
  if (error && error.response && error.response.status === 401) {
    localStorage.setItem('persist:webdesk-admin', '');
    window.location.reload(); //forçando reload para voltar a tela de login
  }

  return Promise.reject(error);
});

export default instance;
