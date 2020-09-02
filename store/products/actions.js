import axios from 'axios'
import { apiUrl } from '../../src/config/constants'

const productsFetched = (data) => {
  return {
    type: 'PRODUCTS_FETCHED_SUCCESS',
    payload: data
  }
}

export const fetchProducts = (limit, offset) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products`, {
        params: {
          limit,
          offset
        }
      })
      console.log('hello')
      dispatch(productsFetched(response.data.products))
    } catch (e) {
      console.log(e.message)
    }
  }
}
