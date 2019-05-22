import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './app.css';
import ErrorBoundary from '../components/common/errorboundary/errorboundary.component';
import Header from '../components/common/header/header.component';
import Main from '../components/common/main/main.container';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router history={history}>
          <header className="header">
            <Header history={history} />
          </header>
          <div className="main">
            <Main history={history} />
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
