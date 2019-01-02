import {combineReducers} from 'redux'
import MoviesReducer from './MoviesReducer'
import UserReducer from "./UserReducer";

let AppReducer = combineReducers({
  Movies: MoviesReducer,
  Users: UserReducer,
});

export default AppReducer
