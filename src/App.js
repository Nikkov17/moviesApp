import React from 'react';
import './App.css';
import Header from './components/common/header/header.component';

class App extends React.Component {
  render() {
    return (
      <header className="header">
        <Header />
      </header>
    );
  }
}

export default App;
