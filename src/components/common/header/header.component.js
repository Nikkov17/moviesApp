import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import Input from '../../base/input/input.component';

class Header extends React.Component {
  render() {
    const { getMoviesList } = this.props;

    return (
      <React.Fragment>
        <h1 className="movie-title">Enter movie title</h1>
        <Input getMoviesList={getMoviesList} />
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  getMoviesList: PropTypes.func
};

export default Header;
