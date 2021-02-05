import instance from './instance';

export class NodesService {
  async getById(id) {
    let response = {};

    await instance.get(`/nodes/${id}`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getServiceOrdersByNodeId(id) {
    let response = {};

    await instance.get(`/nodes/${id}/service-orders`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getServiceOrdersAll() {
    let response = {};

    await instance.get(`/nodes/service-orders`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getServiceOrdersUnassigned(id) {
    let response = {};

    await instance.get(`/nodes/${id}/service-orders?unassigned=true`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getServiceOrdersAssigned(id) {
    let response = {};

    await instance.get(`/nodes/${id}/service-orders`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  /**
   * @param {Number} nodeId
   * @param {import('../../components/Dashboard/Card').ServiceOrderStatus} status
   */
  async getServiceOrdersByStatus(nodeId, status) {
    let response = {};

    await instance.get(`/nodes/${nodeId}/service-order/${status}`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });

    return response;
  }

  async getUsersByNode(id) {
    let response = {};
    await instance.get(`/users/${id}/usersByNode`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async startTreatment (userId,serviceOrderId) {
    let response = {};
    await instance.post(`/service-orders/start-attendance`,{userId,serviceOrderId}).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async getTreatmentStarted(userId){
    let response = {};
    await instance.get(`/users/${userId}/isInAttendance`).then((responseDto) => {
      response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async stopTreatment (userId,serviceOrderId) {
    let response = {};
    await instance.post(`/service-orders/stop-attendance`,{userId,serviceOrderId}).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async levelOs () {
    let response = {};
    await instance.get(`/service-orders/classifications`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async typeOS () {
    let response = {};
    await instance.get(`/service-orders/types`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async orderHourPrice (costumerId) {
    let response = {};
    await instance.get(`/customers/${costumerId}/hour-type-price`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async getCustomers (){
    let response = {};
    await instance.get(`/customers`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async getCostCenter (customerId){
    let response = {};
    await instance.get(`/cost-center/by-customer-id/${customerId}`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async getProject (){
    let response = {};
    await instance.get(`/project`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

  async confirmPrecification (data){
    let response = {};
    await instance.post(`/budget/insertBudget`,data).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
      response = err.response;
    });
    return response;
  }

}
