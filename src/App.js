import React, { Component } from 'react';
import './App.css';

class App extends Component {
    getBox(number){
      return(
        <div className="App">
          <p className="App-text">{"Hola soy la caja #".concat(number) }</p>
        </div>
      );
    }
  render(){
    return(
      <div>
        {this.getBox(1)}
        {this.getBox(2)}
      </div>
    )
  }
}

export default App;
