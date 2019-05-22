import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from './input.component';
import { updateMoviesList } from '../../../actions/actions';

const mapStateToProps = (state) => { return { moviesList: state.moviesList }; };
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateMoviesList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
