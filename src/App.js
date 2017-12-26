import React, { Component } from 'react';
import './App.css';

// Components
import Image from './components/Image';
import Input from './components/Input';

/*
componentWillMount
Lo utilizamos para hacer llamadas a una api o db

componentDidMount
Lo utilizamos para hacer llamadas despues del rendereo. Ejemplo Slick-carousel

componentWillUnmount
utilizado cuando un component se va a desmontar
*/

class App extends Component {
    constructor(){
        super();
        this.state = {
            inputType: 'text'
        }
        this.onClickChild = this.onClickChild.bind(this);
    }
    onClickChild(e){
        this.setState({inputType: 'number'});
    }
    render(){
        return(
            <div>
                <Image
                    id={1}
                    src="https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg"
                    onClickChild={this.onClickChild}
                />
                <Input
                    id={2}
                    type={this.state.inputType}/>
            </div>
        )
    }
}

export default App;
