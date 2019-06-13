import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './main.component';
import { updateMoviesList } from '../../../actions/actions';

const mapStateToProps = (state) => { return { moviesList: state.moviesList }; };
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateMoviesList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
