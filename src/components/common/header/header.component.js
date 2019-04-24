import React from 'react';
import './header.css';
import Input from '../../base/input/input.component';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="movie-title">Enter movie title</h1>
        <Input />
      </React.Fragment>
    );
  }
}

export default Header;
