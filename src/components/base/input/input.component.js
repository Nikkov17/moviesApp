import React from 'react';
import './input.css';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    let { inputRef } = this;
    let { value } = inputRef.current;
    let { getMoviesList } = this.props;

    getMoviesList([{
      title: 'this is components feedback check',
      description: `value from input: ${value}`
    }]);
  }

  render() {
    return (
      <div className="input-container">
        <form className="input-container-wrapper" onSubmit={this.onFormSubmit}>
          <label className="input-label" htmlFor="titleInput">Find your movie
            <input className="input" id="titleInput" type="text" ref={this.inputRef} />
          </label>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  getMoviesList: PropTypes.func
};

export default Input;
