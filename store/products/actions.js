import axios from 'axios'
import { apiUrl } from '../../src/config/constants'

const allProductsFetched = (data) => {
  return {
    type: 'ALL_PRODUCTS_FETCHED_SUCCESS',
    payload: data
  }
}

export const fetchAllProducts = (limit, offset) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products`, {
        params: {
          limit,
          offset
        }
      })
      dispatch(allProductsFetched(response.data.products))
    } catch (e) {
      console.log(e.message)
    }
  }
}
