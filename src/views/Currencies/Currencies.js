import React from 'react';
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import styles from './index.module.scss'

const Currencies = () => {
  return (
    <div className={styles.currency}>
      <h1>Currency Information</h1>
      <div className={styles.currencyInformation}>
        <div className={styles.chartWrapper}>
          sdv
        </div>
        <div className={styles.tableWrapper}>
          <CurrencyTable />
        </div>
      </div>
    </div>
  );
};

export default Currencies;