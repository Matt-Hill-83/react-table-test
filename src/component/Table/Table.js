import React from 'react';
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    
    this.generateHeaders = ()=> {
        return this.props.cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
    };

    this.generateRows = ()=> {
      let cols = this.props.cols;
      let data = this.props.data;

      return data.map(function(item) {
          var cells = cols.map(function(colData) {
            return <td> {item[colData.key]} </td>;
          });

          return <tr key={item.id}> {cells} </tr>;
      });
    };

  }

  render() {
      // let headerComponents = this.generateHeaders();
      // let rowComponents    = this.generateRows();

      return (
          <table className="matt-table">
              <thead> {this.generateHeaders()} </thead>
              <tbody> {this.generateRows()} </tbody>
          </table>
      );
  }

}

export default Table;