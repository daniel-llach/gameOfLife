import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import RowCells from './RowCells.js'

export default class Board extends Component {

  render(){
    const { cells } = this.props
    const mappedRows = cells.map(row => <RowCells key={cells.indexOf(row)} cells={row} />)

    return (
      <div className="board">
        {mappedRows}
      </div>
    )
  }
}
