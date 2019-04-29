import React from 'react';
import './main.css';
import PropTypes from 'prop-types';
import ListCard from '../../base/listcard/listcard.component';

class Main extends React.Component {
  render() {
    const { moviesList } = this.props;

    return (
      <ul className="results-list">
        {moviesList ? moviesList.map((item) => <ListCard key={item.id} item={item} />) : null}
      </ul>
    );
  }
}

Main.propTypes = {
  moviesList: PropTypes.array
};

export default Main;
