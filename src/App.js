import React, { Component } from 'react';
import DataGrid from './DataGrid';
import './App.css';


class App extends Component {

  render() {

    var data1 = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];

    var data2 = [
      ["", "Seat", "Renault", "Mercedes", "Audi"],
      ["2016", 1, 3, 1, 1],
      ["2017", 2, 1, 2, 1],
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2>Handsontable React Component</h2>
        </div>
        <div className="App-body">
          <div className="App-section">
            <DataGrid container="datagrid1" data={data1} />
          </div>
          <div className="App-section">
            <DataGrid container="datagrid2" data={data2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
