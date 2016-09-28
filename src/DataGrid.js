import React, { Component } from 'react';
var Handsontable = require('handsontable');

class DataGrid extends Component {

  componentDidMount() {
    this.datagrid = new Handsontable(this.props.container, {
      data: this.props.data,
      rowHeaders: true,
      colHeaders: true
    });
  }

  componentWillUnmount() {
    this.datagrid.destroy();
  }

  render() {
    return <div id={this.props.container} />
  }
}

export default DataGrid;
