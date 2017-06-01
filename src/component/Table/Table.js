import React from 'react';
import './Table.css';

class Table extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.props.clickHandler;
    
    this.handleClick = () => {
      this.props.clickHandler(this.props.name);
    };

    this.generateHeaders = ()=> {
      let cells = this.props.cols.map(function(colData) {
        return <th key={colData.key}> {colData.label} </th>;
      });

      return <tr> {cells} </tr>;
    };

    this.generateRows = ()=> {
      let cols = this.props.cols;
      let data = this.props.data;
      var that = this;

      return data.map(function(item) {

        console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
        console.log('that.handleClick: ');
        console.log(that.handleClick);
        console.log('|------------------------------------------------------------------------------------------------|')
        
        
        let cells = cols.map((colData) =>{
          return <td name="testname" onClick={that.handleClick}> {item[colData.key]} </td>;
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