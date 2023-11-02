import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

// App Component that renders the page header and form for user input
class App extends Component{

  render () {
    return (
      <div className='App'>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}
export default App;