import {
  UPDATE_MOVIES_LIST
} from '../actions/actions';

export default function moviesListReducer(state = {}, action) {
  const list = action.list || [];
  switch (action.type) {
    case UPDATE_MOVIES_LIST:
      return { ...state, list };
    default:
      return state;
  }
}
