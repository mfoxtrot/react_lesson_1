import Operation from './src/operation';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const m = new Operation(10,2)

    return (
      <div>
        <p>Addition: { m.addition() }</p>
        <p>Subtraction: { m.subtraction() }</p>
        <p>Multiplication: { m.multiplication() }</p>
        <p>Division: { m.division() }</p>
      </div>
    )
  }
}

ReactDOM.render (
  <App/>,
  document.getElementById('root')
);
