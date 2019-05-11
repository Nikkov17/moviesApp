import middleware from './promises';

describe('promises', () => {
  describe('middleware', () => {
    it('should return next', () => {
      let action = {
        type: 'not promise',
        promise: jest.fn()
      };
      let next = jest.fn();

      middleware({})(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it('should return middleware', () => {
      let thenFunc = jest.fn();
      let action = {
        type: 'PROMISE',
        promise: {
          then: thenFunc
        }
      };
      let next = jest.fn();

      middleware({})(next)(action);

      expect(thenFunc).toHaveBeenCalled();
    });
  });
});
