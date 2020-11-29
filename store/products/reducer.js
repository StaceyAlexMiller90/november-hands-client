const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_FETCHED_SUCCESS':
      return action.payload
    case 'MORE_PRODUCTS_FETCHED_SUCCESS':
      return [...state, ...action.payload]
    default:
      return state
  }
}
