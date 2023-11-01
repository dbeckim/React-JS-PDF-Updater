import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import SubmitButton from './components/Button/Button';

class App extends Component{

  render () {
    return (
      <div className='App'>
        <Header />
        <Form />
        <SubmitButton /> 
      </div>
    );
  }
}
export default App;