import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { history, updateMoviesList } = this.props;
    let { inputRef } = this;
    let { value } = inputRef.current;
    const searchUrlParams = new URLSearchParams();

    searchUrlParams.set('search', value);
    history.push(`/search/search=${value}`);
    updateMoviesList(searchUrlParams);
  }

  render() {
    return (
      <div className="input-container">
        <form className="input-container-wrapper" onSubmit={this.onFormSubmit}>
          <label className="input-label" htmlFor="titleInput">
            Find your movie
            <input className="input" id="titleInput" type="text" ref={this.inputRef} />
          </label>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  updateMoviesList: PropTypes.func,
  history: PropTypes.object
};

export default Input;
