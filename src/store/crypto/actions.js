import * as types from './types'

export const setTableLoadingData = value => {
  return {
    type: types.SET_LOADING_CRYPTO_DATA,
    payload: value
  }
}