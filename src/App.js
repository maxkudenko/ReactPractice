import React, { Component } from 'react';
import Header from './Components/Header/Header';
import RegisterForm from './Components/RegisterForm/RegisterForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome to EasyGo!</h1>
        <RegisterForm />
      </div>
    );
  }
}

export default App;
