import axios from 'axios'
import { apiUrl } from '../../src/config/constants'

export const fetchProducts = (type) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/products/${type}`, {
        params: {
          limit: 25,
          offset: 0
        }
      })
      console.log(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
}
