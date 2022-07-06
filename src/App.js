import moment from 'moment';
import Calendar from './pages/Calendar';
import styles from './styles/App.module.scss';

function App() {
  const year = moment().format('YYYY');
  return (
    <div className={styles.app}>
      <h1 className={styles['Container-heading']}>Calendar {year}</h1>
      <Calendar year={year} />
    </div>
  );
}

export default App;
