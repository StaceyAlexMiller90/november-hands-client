const initialState = {
  productCount: 0,
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_FETCHED_SUCCESS':
      return {
        ...state,
        productCount: action.payload.productCount,
        products: action.payload.products
      }
    case 'MORE_PRODUCTS_FETCHED_SUCCESS':
      return {
        ...state,
        products: [...state.products, ...action.payload]
      }
    default:
      return state
  }
}
