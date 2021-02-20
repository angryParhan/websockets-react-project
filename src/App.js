import styles from './App.module.scss'
import RouterWrapper from './router'

function App() {
  return (
    <div className={styles.app}>
      <RouterWrapper />
    </div>
  );
}

export default App;
