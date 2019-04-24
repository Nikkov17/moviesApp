import React from 'react';
import './input.css';

class Input extends React.Component {
  render() {
    return (
      <div className="input-container">
        <div className="input-container-wrapper">
          <label className="input-label" htmlFor="titleInput">Find your movie</label>
          <input className="input" id="titleInput" type="text" />
        </div>
      </div>
    );
  }
}

export default Input;
