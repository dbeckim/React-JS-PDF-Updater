import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

// App Component that renders the page header and form for user input
class App extends Component{

  render () {
    return (
      <div className='App'>
        <Header />
        <Form />
      </div>
    );
  }
}
export default App;