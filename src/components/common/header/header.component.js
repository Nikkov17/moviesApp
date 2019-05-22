import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Input from '../../base/input/input.container';

class Header extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <React.Fragment>
        <h1 className="movie-title">Enter movie title</h1>
        <Input history={history} />
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object
};

export default Header;
