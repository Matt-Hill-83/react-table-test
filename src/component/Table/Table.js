import React from 'react';
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    
    this.generateHeaders = ()=> {
      let cells = this.props.cols.map(function(colData) {
        return <th key={colData.key}> {colData.label} </th>;
      });

      return <tr> {cells} </tr>;
    };
    
    this.generateRows = ()=> {
      let cols = this.props.cols;
      let data = this.props.data;

      return data.map(function(item) {
        let cells = cols.map(function(colData) {
          return <td> {item[colData.key]} </td>;
        });

        return <tr key={item.id}> {cells} </tr>;
      });
    };

  }

  render() {
    return (
        <table className="matt-table">
            <thead> {this.generateHeaders()} </thead>
            <tbody> {this.generateRows()} </tbody>
        </table>
    );
  }

}

export default Table;