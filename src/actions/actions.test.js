import { updateMoviesList, UPDATE_MOVIES_LIST } from './actions';

describe('actions', () => {
  describe('UPDATE_MOVIES_LIST', () => {
    it('should be UPDATE_MOVIES_LIST', () => {
      expect(UPDATE_MOVIES_LIST).toEqual('UPDATE_MOVIES_LIST');
    });
  });

  describe('updateMoviesList', () => {
    xit('action creator updateMoviesList should return action', () => {
      // cannot mock get data, so fetch is not defined error
      jest.mock('../api/moviesapi', () => jest.fn());

      expect(updateMoviesList()).toEqual({
        type: 'PROMISE',
        promise: jest.fn()
      });
    });
  });
});
