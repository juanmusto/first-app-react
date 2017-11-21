import React, { Component } from 'react';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Image/>
        <Input/>
      </div>
    )
  }
}

export default App;
