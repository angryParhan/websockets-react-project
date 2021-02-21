import * as types from './types'

const initialCryptoState = {
  loadingTableData: false
}

export const cryptoReducer = (state = initialCryptoState, action) => {
  switch (action.type) {
    case types.SET_LOADING_CRYPTO_DATA:
      return {
        ...state,
        loadingTableData: action.payload
      }
    default: return state
  }
}