import instance from './instance';

export class UsersService {
  async getById(id) {
    let response = {};

    await instance.get(`/users/${id}`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getServiceOrderByUserId(id) {
    let response = {};
    await instance.get(`/users/${id}/service-orders`).then((responseDto) => {
      response = responseDto;

    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async getSupervisor (customerId) {
    let response = {};
    await instance.get(`/users/supervisor/by-customer-id/${customerId}`).then((responseDto) => {
      response = responseDto;

    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async changePassword(oldPass, newPass) {
    return instance.patch('/users/changePassword', {
      oldPass,
      newPass,
    });
  }
}
