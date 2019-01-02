import axios from 'axios';
import Global from '../config/Global';

export class UserService {
  registerUser = (params) => {
    return axios.post(`${Global.BASE_URL}/users`, params);
  };

  authUser = (params) => {
    return axios.post(`${Global.BASE_URL}/auth_user`, params, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  }
}