import {SIGN_IN} from "../Actions/ActionTypes";

let INITIAL_STATE = {
  status: 0,
  token: '',
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

    default:
      return state

  }
};

export default UserReducer;