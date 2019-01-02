import Global from '../config/Global';
import APIConst from '../API/APIConst';
import API from '../API/API';
import {EDIT_MOVIE, GET_MOVIE, GET_MOVIES, NEW_MOVIE, REMOVE_MOVIE, SEARCH} from "./ActionTypes";

export const getMovie = () => {
  const url = Global.BASE_URL + "/" + APIConst.MOVIE;

  return ((dispatch,getState) => {
    return API(url,'get').then((response) => {
    dispatch({
        type: GET_MOVIES,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};

export const getOneMovie = (id) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + id;

  return ((dispatch,getState) => {
    return API(url, 'get').then((response) => {
    dispatch({
        type: GET_MOVIE,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};

export const newMovie = (data) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE;

  return ((dispatch,getState) => {
    return API(url, 'post', data).then((response) => {

    dispatch({
        type: NEW_MOVIE,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};

export const editMovie = (data) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + data.id;

  return ((dispatch,getState) => {
    return API(url, 'put', data).then((response) => {
      debugger
    dispatch({
        type: EDIT_MOVIE,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};

export const removeMovie = (id) => {
  let url = Global.BASE_URL + "/" + APIConst.MOVIE + "/" + id;

  return ((dispatch,getState) => {
    return API(url, 'delete').then((response) => {
      dispatch({
        type: REMOVE_MOVIE,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};

export const search = (name) => {
  let url = Global.BASE_URL + "/search/" + APIConst.MOVIE + "?name=" + name;

  return ((dispatch,getState) => {
    return API(url, 'get').then((response) => {
      dispatch({
        type: SEARCH,
        payload: response.data,
        status: response.status
      })
    },(err) => {
      return Promise.reject(err)
    }).catch((err) => {
      return Promise.reject(err)
    })
  })
};