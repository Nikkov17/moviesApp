import moviesListReducer from './movieslist';

describe('movieslist', () => {
  describe('moviesListReducer', () => {
    it('action return action list', () => {
      expect(moviesListReducer({}, {
        type: 'UPDATE_MOVIES_LIST',
        list: [1, 2]
      })).toEqual({ list: [1, 2] });
    });

    it('action return state', () => {
      expect(moviesListReducer({}, {})).toEqual({});
    });
  });
});
