import { c } from '../constants'

export const setYear = year => {
  return {
    type: c.SET_YEAR,
    payload: year,
  }
}
