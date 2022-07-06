import moment from 'moment';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Dates from './Dates/Dates';
import MonthHeader from './MonthHeader';
import styles from './Calendar.module.scss';

const getDate = (month, year) => {
  const calendar = [];
  const startDate = moment([year, month]).clone().startOf('month').startOf('week');
  const endDate = moment([year, month]).clone().endOf('month');
  const day = startDate.clone().subtract(1, 'day');
  // looping a month by a week
  while (day.isBefore(endDate, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone().format('DD'))
    );
  }

  return calendar.map((week, index) => (
    <Dates key={week} week={week} weekIndex={index} month={month + 1} year={year} />
  ));
};

function Calendar({ year }) {
  const month = useSelector((rootReducer) => rootReducer.monthReducer);
  return (
    <div className={styles.Container}>
      <div className={styles['month-header']}>
        <MonthHeader monthName={month.name} />
        <table className={styles['calender-date']}>
          <tbody>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            {getDate(month.id, year)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Calendar.propTypes = {
  year: PropTypes.string.isRequired,
};

export default Calendar;
