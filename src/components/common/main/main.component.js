import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './main.css';
import PropTypes from 'prop-types';
import ListCard from '../../base/listcard/listcard.component';
import InvalidPage from '../404page/404page.component';
import MoviePage from '../../base/moviepage/moviepage.component';

class Main extends React.Component {
  componentDidMount() {
    const { moviesList } = this.props;
    const query = this.getQuery();

    if (Object.keys(moviesList).length === 0 && query) {
      const { updateMoviesList } = this.props;
      const searchUrlParams = new URLSearchParams();

      searchUrlParams.set('search', query);
      updateMoviesList(searchUrlParams);
    }
  }

  getQuery() {
    const { history } = this.props;
    const query = history.location.pathname.split('=')[1];

    return query;
  }

  render() {
    const { moviesList, history } = this.props;
    const Ul = <ul className="results-list">
      {moviesList && moviesList.list
        ? moviesList.list.map((item) => <ListCard key={item.id} item={item} history={history} />)
        : null}
    </ul>;

    return (
      <Switch>
        <Route exact={true} path={['/', '/search/search=:request']} render={() => Ul} />
        <Route exact={true} path={'/movie/:id'} render={() => <MoviePage history={history} />} />
        <Route component={InvalidPage} />
      </Switch>
    );
  }
}

Main.propTypes = {
  moviesList: PropTypes.object,
  history: PropTypes.object,
  updateMoviesList: PropTypes.func
};

export default Main;
