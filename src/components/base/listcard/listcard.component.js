import React from 'react';
import './listcard.css';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
  constructor(props) {
    super(props);

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick() {
    const { item } = this.props;
    const url = `/movie/${item.id}`;

    this.props.history.push(url);
  }

  render() {
    const { item } = this.props;

    return (
      <li className="card" onClick={this.onCardClick}>
        {item.poster_path ? <img className="img" src={item.poster_path} alt="movie poster" /> : null}
        <p className="card-text movie-title">{item.title}</p>
        <p className="card-text movie-description">{item.overview}</p>
      </li>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.object,
  history: PropTypes.object
};

export default ListCard;
