import React, { Component } from 'react';
import Handsontable from 'handsontable';
import 'handsontable.css';

class DataGrid extends Component {

  componentDidMount() {
    this.datagrid = new Handsontable(
      document.getElementById(this.props.container), {
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
