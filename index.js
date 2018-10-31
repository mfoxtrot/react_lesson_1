console.log('Hello, World!');

import Operation from './src/operation';
const m = new Operation(10, 2);

console.log(m.addition());
console.log(m.subtraction());
console.log(m.multiplication());
console.log(m.division());

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
