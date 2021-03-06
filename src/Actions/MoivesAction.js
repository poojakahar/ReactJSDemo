import Global from '../config/Global';
import APIConst from '../API/APIConst';
import API from '../API/API';
import {EDIT_MOVIE, ERROR, GET_MOVIE, GET_MOVIES, NEW_MOVIE, NOT_FOUND, REMOVE_MOVIE, SEARCH} from "./ActionTypes";
import {getToken} from "../config/service";

const token = getToken();

export const getMovie = () => {
  const url = Global.BASE_URL + "/" + APIConst.MOVIE;

  return ((dispatch,getState) => {
    return API(url,'get', {}, {token}).then((response) => {
      dispatch({
        type: GET_MOVIES,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};

export const getOneMovie = (id) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + id;

  return ((dispatch,getState) => {
    return API(url, 'get', {}, {token}).then((response) => {
    dispatch({
        type: GET_MOVIE,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};

export const newMovie = (data) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE;

  return ((dispatch,getState) => {
    return API(url, 'post', data, {token}).then((response) => {

    dispatch({
        type: NEW_MOVIE,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};

export const editMovie = (data) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + data.id;

  return ((dispatch,getState) => {
    return API(url, 'put', data, {token}).then((response) => {
    dispatch({
        type: EDIT_MOVIE,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};

export const removeMovie = (id) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + id;

  return ((dispatch,getState) => {
    return API(url, 'delete', {}, {token}).then((response) => {
      dispatch({
        type: REMOVE_MOVIE,
        payload: response.data,
        status: response.status
      })
    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};

export const search = (name) => {
  let url = Global.BASE_URL + "/search/" + APIConst.MOVIE + "?name=" + name;

  return ((dispatch,getState) => {
    return API(url, 'get',{}, {token}).then((response) => {
      if(response.status === Global.NOT_FOUND_CODE) {
        dispatch({
          type: NOT_FOUND,
          payload: response.data,
          status: response.status
        })

      } else {

        dispatch({
          type: SEARCH,
          payload: response.data,
          status: response.status
        })

      }

    }).catch((err) => {
      dispatch({
        type: ERROR,
        error: ((err.response && err.response.data && err.response.data.Error) || 'Error'),
        status: ((err.response && err.response.status) || Global.ERROR_CODE),
      })
    })
  })
};