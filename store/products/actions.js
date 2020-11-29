import axios from 'axios'
import { apiUrl } from '../../src/config/constants'

const allProductsFetched = (data) => {
  console.log('data', data)
  return {
    type: 'ALL_PRODUCTS_FETCHED_SUCCESS',
    payload: data
  }
}

const moreProductsFetched = (data) => {
  return {
    type: 'MORE_PRODUCTS_FETCHED_SUCCESS',
    payload: data
  }
}

export const fetchAllProducts = (offset) => {
  const limit = 25
  return async (dispatch) => {
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

export const fetchMoreProducts = (offset) => {
  return async (dispatch) => {
    const limit = 25
    try {
      const response = await axios.get(`${apiUrl}/products`, {
        params: {
          limit,
          offset
        }
      })
      dispatch(moreProductsFetched(response.data.products))
    } catch (e) {
      console.log(e.message)
    }
  }
}
