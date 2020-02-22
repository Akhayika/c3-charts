import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import LineChart from './linechart.jsx';

const columns=[
  ["My Number",30,200,100,400,150,250],
  ["Your Number",50,20,10,40,15,25]
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <LineChart/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
