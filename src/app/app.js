import React from 'react';
import './app.css';
import ErrorBoundary from '../components/common/errorboundary/errorboundary.component';
import Header from '../components/common/header/header.component';
import Main from '../components/common/main/main.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [{
        id: 1,
        title: 'first movie',
        description: 'first movie description',
        img: 'https://cdn3.movieweb.com/i/movie/gEh4g0Db8qqSuAVOoGuEqYp9XRTdR2/384:50/Shazam.jpg'
      }, {
        id: 2,
        title: 'second movie',
        description: 'second movie description',
        img: 'https://m.media-amazon.com/images/M/MV5BMjQ0NDkyOTg2OF5BMl5BanBnXkFtZTgwMzk4NzcwOTE@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
      }, {
        id: 3,
        title: 'third movie',
        description: 'third movie description',
        img: 'https://cdn3.movieweb.com/i/movie/gEh4g0Db8qqSuAVOoGuEqYp9XRTdR2/384:50/Shazam.jpg'
      }, {
        id: 4,
        title: 'fourth movie',
        description: 'fourth movie description',
        img: 'https://m.media-amazon.com/images/M/MV5BMjQ0NDkyOTg2OF5BMl5BanBnXkFtZTgwMzk4NzcwOTE@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
      }]
    };

    this.getMoviesList = this.getMoviesList.bind(this);
  }

  getMoviesList(data) {
    this.setState({ moviesList: data });
  }

  render() {
    const { moviesList } = this.state;

    return (
      <ErrorBoundary>
        <header className="header">
          <Header getMoviesList={this.getMoviesList} />
        </header>
        <div className="main">
          <Main moviesList={moviesList} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
