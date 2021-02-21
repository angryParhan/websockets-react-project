import axios from 'axios'

const apiKey = 'bdd0b06034120d270306394eaba4e8322f2ca68de04eb0b077c6d7b19c8e236f'


class CryptoModel {
  resource = 'https://min-api.cryptocompare.com/data'


  getBlockChainList () {
    return axios(`${this.resource}/blockchain/list`, {
      method: 'get',
      params: {
        'api_key': apiKey
      }
    })
  }

  // fsyms=BTC,ETH,ZEC
  // tsyms=USD

  getCurrensyRate (fsyms, tsyms = 'USD') {
    return axios(`${this.resource}/blockchain/mining/calculator`, {
      method: 'get',
      params: {
        'api_key': apiKey,
        fsyms,
        tsyms
      }
    })
  }



  // fsym=BTC
  // tsym=USD
  // limit=10
  getChartData (fsym = 'BTC', tsym = 'USD', limit = 2000) {
    return axios(`${this.resource}/v2/histoday`, {
      method: 'get',
      params: {
        'api_key': apiKey,
        fsym,
        tsym,
        limit
      }
    })
  }

}


export default new CryptoModel()
