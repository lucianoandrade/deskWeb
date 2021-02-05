import instance from './instance';

export class CommentsService {
async sendComment(serviceOrderId , description, isPrivate, paralyze) {
    let response = {};
    await instance.post(`/comments`,{serviceOrderId , description, isPrivate, paralyze}).then((responseDto) => {
        response = responseDto;
    }).catch((err) => {
        response = err.response;
    });
    return response;
  }
}