import React from 'react';
import './Table.css';


class Table extends React.Component {
  render() {
    return (
      <div className="table-1">
        <div>
          {this.props.value}
        </div>
        <table className="zui-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Height</th>
                    <th>Born</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DeMarcus Cousins</td>
                    <td>C</td>
                    <td>6'11"</td>
                    <td>08-13-1990</td>
                    <td>$4,917,000</td>
                </tr>
                <tr>
                    <td>Isaiah Thomas</td>
                    <td>PG</td>
                    <td>5'9"</td>
                    <td>02-07-1989</td>
                    <td>$473,604</td>
                </tr>
                <tr>
                    <td>Ben McLemore</td>
                    <td>SG</td>
                    <td>6'5"</td>
                    <td>02-11-1993</td>
                    <td>$2,895,960</td>
                </tr>
                <tr>
                    <td>Marcus Thornton</td>
                    <td>SG</td>
                    <td>6'4"</td>
                    <td>05-05-1987</td>
                    <td>$7,000,000</td>
                </tr>
                <tr>
                    <td>Jason Thompson</td>
                    <td>PF</td>
                    <td>6'11"</td>
                    <td>06-21-1986</td>
                    <td>$3,001,000</td>
                </tr>
            </tbody>
        </table>        
      </div>
    );
  }
}

export default Table;

    // var cols = [
    //     { key: 'firstName', label: 'First Name' },
    //     { key: 'lastName', label: 'Last Name' }
    // ];

    // var data = [
    //     { id: 1, firstName: 'John', lastName: 'Doe' },
    //     { id: 2, firstName: 'Clark', lastName: 'Kent' }
    // ];

    // var Table = React.createClass({

    //     render: function() {
    //         var headerComponents = this.generateHeaders(),
    //             rowComponents = this.generateRows();

    //         return (
    //             <table>
    //                 <thead> {headerComponents} </thead>
    //                 <tbody> {rowComponents} </tbody>
    //             </table>
    //         );
    //     },

    //     generateHeaders: function() {
    //         var cols = this.props.cols;  // [{key, label}]

    //         // generate our header (th) cell components
    //         return cols.map(function(colData) {
    //             return <th key={colData.key}> {colData.label} </th>;
    //         });
    //     },

    //     generateRows: function() {
    //         var cols = this.props.cols,  // [{key, label}]
    //             data = this.props.data;

    //         return data.map(function(item) {
    //             // handle the column data within each row
    //             var cells = cols.map(function(colData) {

    //                 // colData.key might be "firstName"
    //                 return <td> {item[colData.key]} </td>;
    //             });
    //             return <tr key={item.id}> {cells} </tr>;
    //         });
    //     }
    // });


    // React.render(<Table cols={cols} data={data}/>, document.getElementById('example'));