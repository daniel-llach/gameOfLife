import React from "react"
import { connect } from "react-redux"

import { fetchCells } from "../actions/cellsActions"

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
  //
  // fetchTweets() {
  //   this.props.dispatch(fetchTweets())
  // }

  render() {
    const { cells } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }

    // const mappedTweets = tweets.map(tweet => <li key={tweets.indexOf(tweet)}> {tweet.text} </li>)

    return <div>
      <h1>Game of life</h1>
      <button onClick={this.nextCells.bind(this)}>next</button>
    </div>
  }
}
