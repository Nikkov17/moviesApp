import getData from '../api/moviesapi';

export const UPDATE_MOVIES_LIST = 'UPDATE_MOVIES_LIST';

export function updateMoviesList(value) {
  return {
    type: 'PROMISE',
    promise: getData(value)
  };
}
