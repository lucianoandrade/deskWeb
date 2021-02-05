import instance from './instance';

export class VersionByProjectService {
async getVersionProject(id) {
    let response = {};
    await instance.get(`/version/by-project/${id}`).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
        response = err.response;
    });
    return response;
  }
}