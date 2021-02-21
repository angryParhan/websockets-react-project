import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setTableLoadingData } from '../../store/crypto/actions'
import styles from './index.module.scss'
import Loader from '../Loader/Loader'
import CryptoModel from '../../models/CryptoModel'

const CurrencyTable = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.crypto.loadingTableData)

  console.log('state', loading)

  dispatch(setTableLoadingData(true))

  useEffect(() => {
    const fun = async () => {
      const res = await CryptoModel.getBlockChainList()
      console.log('result', res)
    }
    fun()
  }, [])

  return (
    <div className={styles.currencyTable}>
      <div className={styles.tableHeader}>
        <p>Name</p>
        <p>Last Price(USD)</p>
      </div>
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    </div>
  );
};

export default CurrencyTable;