import React, { Component } from 'react';
import RomanNumberButton from './components/RomanNumberButton/RomanNumberButton';
import {  
  RomanNumberValues,
  RomanToNumber,
  validate
} from './utils';
import './App.css';

class App extends Component {
  state = {
    input: "",
    number: ""
  }

  hanldeClear = () => {
    this.setState({
      input: "",
      number: ""
    });
  }

  handleBtnClick = (number) => {
    const input = this.state.input;

    this.setState({ input: input + number.text }, () => {
      const num = RomanToNumber(this.state.input);

      if (!validate(this.state.input, num)) {
        this.setState({ number: "Invalid Roman Numeral" });
        return;
      }

      this.setState({ number: num });
    });
  }

  render() {
    const { input, number } = this.state;

    return (
      <div className="App">

        {
          Object.keys(RomanNumberValues).map((romanNumberKey, index) => (
            <RomanNumberButton
              key={index} 
              text={romanNumberKey}
              value={RomanNumberValues[romanNumberKey]}
              onClick={this.handleBtnClick}
            />
          ))
        }

        <h2> Your Roman Numeral is </h2>
        <h3> {input} </h3>

        <h2> Your Number is </h2>
        <h3> {number} </h3>

        <button 
          onClick={this.hanldeClear} 
          className="clear-btn"> 
          Clear Input 
        </button>
      </div>
    );
  }
}

export default App;
