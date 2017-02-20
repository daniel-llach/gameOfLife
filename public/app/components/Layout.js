import React from "react"
import { connect } from "react-redux"

import { fetchCells } from "../actions/cellsActions"
import Board from './Board.js'

@connect((store) => {
  return {
    cells: store.cells.cells
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    let initCells = [
      [1,1,1],
      [1,0,0],
      [1,1,0]
    ]
    this.props.dispatch(fetchCells(initCells))
  }

  nextCells(){
    this.props.dispatch(fetchCells(this.props.cells))
  }

  randomCells(){
    let newCells = []
    for(let i=0;i<3;i++){
      let newRow =[]
      for(let x=0;x<3;x++){
        newRow.push( Math.floor((Math.random() * 2)) )
      }
      newCells.push(newRow)
    }

    this.props.dispatch(fetchCells(newCells))
  }

  render() {
    const { cells } = this.props;

    return <div>
      <h1>Game of life</h1>
      <button onClick={this.randomCells.bind(this)}>random</button>
      <div className="boardContainer">
        <Board cells={cells}/>
      </div>
      <button onClick={this.nextCells.bind(this)}>next</button>
    </div>
  }
}
