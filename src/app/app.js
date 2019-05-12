import React from 'react';
import './app.css';
import ErrorBoundary from '../components/common/errorboundary/errorboundary.component';
import Header from '../components/common/header/header.component';
import Main from '../components/common/main/main.container';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <header className="header">
          <Header />
        </header>
        <div className="main">
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
