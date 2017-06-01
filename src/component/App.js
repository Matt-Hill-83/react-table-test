import React from 'react';
// import Matt from './Matt';
import Table from './Table/Table';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total    : null,
      next     : null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {

    let cols = [
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' }
    ];

    let data = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Bob', lastName: 'Marley' }
    ];

    return (
      <div className="component-app">
        <Table cols={cols} data={data} name="table-1" clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
