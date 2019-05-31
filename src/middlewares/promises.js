const middleware = store => next => action => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }

  return action.promise.then((data) => store.dispatch({
    type: 'UPDATE_MOVIES_LIST',
    list: data
  }));
};

export default middleware;
