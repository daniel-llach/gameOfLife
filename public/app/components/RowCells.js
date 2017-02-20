import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class RowCells extends Component {
  render(){
    const { cells } = this.props
    console.log("cells: ", cells);
    const mappedCells = cells.map(cell => <li className={(cell==1)?'live':'dead'}> {cell} </li>)

    return (
      <div className="row">
        {mappedCells}
      </div>
    )
  }
}
