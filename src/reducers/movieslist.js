import {
  UPDATE_MOVIES_LIST
} from '../actions/actions';

export default function moviesListReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_MOVIES_LIST:
      return action.list;
    default:
      return state;
  }
}
