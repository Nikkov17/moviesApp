import React from 'react';
import './listcard.css';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <li className="card">
        {item.poster_path ? <img className="img" src={item.poster_path} alt="movie poster" /> : null}
        <p className="card-text movie-title">{item.title}</p>
        <p className="card-text movie-description">{item.overview}</p>
      </li>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.object
};

export default ListCard;
