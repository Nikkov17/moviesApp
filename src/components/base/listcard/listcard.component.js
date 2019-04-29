import React from 'react';
import './listcard.css';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <li className="card">
        {item.img ? <img className="img" src={item.img} alt="movie poster" /> : null}
        <p className="card-text movie-title">{item.title}</p>
        <p className="card-text movie-description">{item.description}</p>
      </li>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.object
};

export default ListCard;
