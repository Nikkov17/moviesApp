import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from './input.component';
import { updateMoviesList } from '../../../actions/actions';

const InputContainer = (props) => (
  <Input {...props} />
);

export default connect(
  (state) => { return { moviesList: state.moviesList }; },
  (dispatch) => bindActionCreators({ updateMoviesList }, dispatch)
)(InputContainer);
