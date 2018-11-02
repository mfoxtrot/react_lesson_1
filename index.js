import Operation from './src/operation';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

console.log('Hello, World!');

const m = new Operation(10, 2);

console.log(m.addition());
console.log(m.subtraction());
console.log(m.multiplication());
console.log(m.division());

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello, World!</div>
    )
  }
}

ReactDOM.render (
  <App/>,
  document.getElementById('root')
);
