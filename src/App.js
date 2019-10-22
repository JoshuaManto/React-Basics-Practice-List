import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  };

  inputChangeHandler = input => {
    this.setState({
      text: input
    });
  };

  removeCharHandler = index => {
    // const result = [];

    // for (let i = 0; i < this.state.text.length; i++) {
    //   if (i !== index) result.push(this.state.text[i]);
    // }
    // const resultString = result.toString();
    // const str = this.state.text;
    // let resultString;

    // if (index === 0) resultString = str.substring(1);
    // else if (index === str.length - 1)
    //   resultString = str.substring(0, str.length - 1);
    // else
    //   resultString =
    //     str.substring(0, index) + str.substring(index + 1, str.length);

    const text = this.state.text.split('');
    text.splice(index, 1);
    const resultString = text.join('');

    this.setState({
      text: resultString
    });
  };

  render() {
    let charList = [];

    for (let i = 0; i < this.state.text.length; i++) {
      charList.push(
        <CharComponent
          char={this.state.text[i]}
          index={i}
          remove={this.removeCharHandler}
        ></CharComponent>
      );
    }

    return (
      <div className="App">
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}

        <input
          type="text"
          onChange={event => this.inputChangeHandler(event.target.value)}
          value={this.state.text}
        ></input>
        <p>{this.state.text}</p>

        <ValidationComponent
          textLength={this.state.text.length}
        ></ValidationComponent>

        {charList}
      </div>
    );
  }
}

export default App;
