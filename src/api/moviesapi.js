export default function getData(value) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${value}`)
    .then(response => response.json())
    .then(json => {
      return json;
    });
}
