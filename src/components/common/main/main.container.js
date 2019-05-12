import React from 'react';
import { connect } from 'react-redux';
import Main from './main.component';

const MainContainer = (props) => (
  <Main {...props} />
);

export default connect(
  (state) => { return { moviesList: state.moviesList }; }
)(MainContainer);
