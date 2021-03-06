import Global from '../config/Global';
import APIConst from '../API/APIConst';
import API from '../API/API';
import {ERROR, SIGN_IN} from "./ActionTypes";

export const authUser = (data) => {
  let url = Global.BASE_URL + "/" + APIConst.AUTH_USER;

  return ((dispatch, getState) => {
    return API(url, 'post', data).then((response) => {
      dispatch({
        type: SIGN_IN,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: err.response.data.Error,
        status: err.response.status,
      })
    })
  })
};