const initialState = {
  categories: [],
  collections: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPTIONS_FETCHED_SUCCESS':
      const { categories, collections } = action.payload
      return {
        categories,
        collections
      }

    default:
      return state
  }
}
