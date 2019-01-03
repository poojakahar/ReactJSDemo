import {ERROR, SIGN_IN} from "../Actions/ActionTypes";

let INITIAL_STATE = {
  status: 0,
  token: '',
  error: '',
};

let UserReducer = (state = INITIAL_STATE, action) => {
  switch(action.type)
  {
    case SIGN_IN:
      return {
        ...state,
        status: action.status,
        token: action.payload.auth_token
      };

    case ERROR:
      return{
        ...state,
        status: action.status,
        error: action.error
      };

    default:
      return state

  }
};

export default UserReducer;