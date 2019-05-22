import moviesapi from '../api/moviesapi';

export const UPDATE_MOVIES_LIST = 'UPDATE_MOVIES_LIST';

export function updateMoviesList(value) {
  return {
    type: 'PROMISE',
    promise: moviesapi.getData(value)
  };
}

export function getMovieInfo(value) {
  return {
    type: 'PROMISE',
    promise: moviesapi.getData(value)
  };
}
