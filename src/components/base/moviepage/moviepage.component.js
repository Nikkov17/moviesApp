import React from 'react';
import PropTypes from 'prop-types';
import moviesapi from '../../../api/moviesapi';
import './moviepage.css';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchForData = this.fetchForData.bind(this);
  }

  componentDidMount() {
    this.fetchForData();
  }

  fetchForData() {
    const that = this;
    const splittedPathname = this.props.history.location.pathname.split('/');
    const movieId = splittedPathname[splittedPathname.length - 1];

    moviesapi.getMovieInfo(movieId)
      .then((item) => {
        that.setState({ item: item });
      });
  }

  render() {
    let { item } = this.state;
    let card;
    let genresList;

    if (item) {
      let { genres } = item;

      genresList = <ul className="genres-list">{genres.map(el => <li>{el}</li>)}</ul>;
      card = <div className="Movie-page-card">
        {item.poster_path ? <img className="Movie-page-img" src={item.poster_path} alt="movie poster" /> : null}
        <div className="card-text movie-title">
          {item.title}
        </div>
        <div className="card-text movie-description">
          {item.overview}
        </div>
        <div className="card-text movie-description">
          Release date :
          {item.release_date}
        </div>
        <div className="card-text movie-description">
          Genres:
          {genresList}
        </div>
      </div>;
    }

    return (
      <div className="Movie-page">
        {card}
      </div>
    );
  }
}

MoviePage.propTypes = {
  history: PropTypes.object
};

export default MoviePage;
