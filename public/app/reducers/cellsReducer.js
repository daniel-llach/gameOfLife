export default function reducer(state={
  cells: []
}, action) {
  switch (action.type){
    case "FETCH_CELLS_FULFILLED": {
      return {
        ...state,
        cells: action.payload,
      }
    }
  }
  return state
}
