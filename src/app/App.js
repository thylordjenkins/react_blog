import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './../components/Header';
import Footer from './../components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;