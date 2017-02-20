import { evolveCells } from './../../js/cellsEvolution.js'

export function fetchCells(cells) {

  let newCells = evolveCells(cells)

  return {
    type: "FETCH_CELLS_FULFILLED",
    payload: newCells
  }


}
