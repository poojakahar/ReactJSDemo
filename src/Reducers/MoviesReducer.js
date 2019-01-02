import {EDIT_MOVIE, GET_MOVIE, GET_MOVIES, NEW_MOVIE, REMOVE_MOVIE, SEARCH} from "../Actions/ActionTypes";

let INITIAL_STATE={
  status: 0,
  movies: [],
  movie: {},
  from: 'get',
};

let MoviesReducer = (state = INITIAL_STATE, action) => {
  let {movies} = state;
  switch(action.type)
  {
    case GET_MOVIES:
      return{
        status: action.status,
        movies: action.payload
      };

    case GET_MOVIE:
      return{
        status: action.status,
        movie: action.payload[0]
      };

    case NEW_MOVIE:
      return{
        ...state,
        status: action.status,
        movies: [...state.movies, action.payload[0]],
        from: 'new'
      };

    case EDIT_MOVIE:
      const res = action.payload[0];
      const index = movies.findIndex(x => x.id === res.id);
      const updateMovie = Object.assign([], movies, {[index]: res});
      return{
        ...state,
        status: action.status,
        movies: updateMovie,
        from: 'edit'
      };

    case REMOVE_MOVIE:
      let filter = movies.filter((el) => { return parseInt(el.id) !== parseInt(action.payload.id) });
      return{
        ...state,
        status: action.status,
        movies: filter,
        from: 'delete'
      };

    case SEARCH:
      return{
        ...state,
        status: action.status,
        movies: action.payload
      };

    default:
      return state
  }
};

export default MoviesReducer
