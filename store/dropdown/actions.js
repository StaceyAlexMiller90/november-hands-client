import axios from 'axios'
import { apiUrl } from '../../src/config/constants'

const optionsFetched = (data) => {
  return {
    type: 'OPTIONS_FETCHED_SUCCESS',
    payload: data
  }
}

export const fetchDropdownOptions = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/categories/collections`)
      dispatch(optionsFetched(response.data))
    } catch (e) {
      console.log(e.message)
    }
  }
}
