import store from './state';

describe('state', () => {
  it('check that store has been created', () => {
    expect(store.dispatch).toBeInstanceOf(Function);
    expect(store.getState).toBeInstanceOf(Function);
    expect(store.replaceReducer).toBeInstanceOf(Function);
    expect(store.subscribe).toBeInstanceOf(Function);
  });
});
