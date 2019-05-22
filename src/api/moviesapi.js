const getData = function (URLSearchParams) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?${URLSearchParams}`)
    .then(response => response.json())
    .then(json => {
      return json.data;
    });
};

const getMovieInfo = function (id) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export default { getData, getMovieInfo };
