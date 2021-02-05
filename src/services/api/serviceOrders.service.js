import instance from './instance';

export class ServiceOrdersService {
  async getById(id) {
    let response = {};

    await instance
      .get(`/service-orders/${id}`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });

    return response;
  }

  async getOSChildren(id) {
    let response = {};

    await instance
      .get(`/service-orders/${id}/children`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });

    return response;
  }

  async patchResponsible(serviceOrderId, userId, nodeId) {
    await instance.patch(`/service-orders/${serviceOrderId}/responsible`, {
      userId,
      nodeId,
    });
  }

  async patchNodePriorities(serviceOrders) {
    let response = {};

    await instance
      .patch(`/service-orders/node-priorities`, serviceOrders)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });

    return response;
  }

  async patchUserPriorities(serviceOrders) {
    let response = {};

    await instance
      .patch(`/service-orders/user-priorities`, serviceOrders)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });

    return response;
  }

  async patchPriority(id, currentPriorityActive) {
    let response = {};

    let baseRoute = '';
    if (currentPriorityActive) {
      baseRoute = 'disable-priority';
    } else {
      baseRoute = 'enable-priority';
    }

    await instance
      .patch(`/service-orders/${id}/${baseRoute}`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });

    return response;
  }

  async patchToHomologation(id, versionId, description) {
    let response = {};
    await instance
      .patch(`/service-orders/${id}/send-to-homologation`, {
        versionId,
        description,
      })
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async sendFile(id, file) {
    let response = {};
    await instance
      .post(`/service-orders/${id}/file`, file, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async getServiceOrdersModules() {
    let response = {};
    await instance
      .get(`/service-orders/modules`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async patchSetParent(id, parentId) {
    let response = {};
    await instance
      .patch(`/service-orders/${id}/set-parent/${parentId}`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async deleteSetParent(id) {
    let response = {};
    await instance
      .delete(`/service-orders/${id}/set-parent/`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async createServiceOrder(data) {
    let response = {};
    await instance
      .post(`/service-orders`, data)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async getServiceOrdersOrphan() {
    let response = {};
    await instance
      .get(`/service-orders/orphan`)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response;
  }

  async getServiceOrdersInAttendance(userId) {
    let response = {};
    await instance
      .get(`/service-orders/inAttendance`, userId)
      .then((responseDto) => {
        response = responseDto;
      })
      .catch((err) => {
        response = err.response;
      });
    return response.data;
  }

  async fileUnlocked(id, file) {
    await instance
      .get(`/service-orders/${id}/file-unlocked/${file}`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${file}`);
        document.body.appendChild(link);
        link.click();
      });
  }

  async searchServiceOrder(text) {
    return instance.get(`/service-orders/searchByText/${text}`);
  }
}
