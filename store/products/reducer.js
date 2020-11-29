const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_FETCHED_SUCCESS':
      return action.payload
    default:
      return state
  }
}
