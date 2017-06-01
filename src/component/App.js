import React from 'react';
// import Display from './Display';
import Matt from './Matt';
import Table from './Table/Table';
// import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <Matt name="AC" clickHandler={this.handleClick} />
        <Table name="table-1" clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
