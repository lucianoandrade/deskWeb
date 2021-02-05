import instance from './instance';

export class AuthenticationService {
  async signin(requestDto) {
    let response = {};

    await instance.post('/auth/signin', requestDto).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
      console.error(err)
    });
    return response;
  }
}
