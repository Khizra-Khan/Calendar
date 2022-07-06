import PropTypes from 'prop-types';
import Date from '../Date';
import styles from './Dates.module.scss';

const isExtraDays = (week, date) => {
  let extraDayStatus = false;
  if (week === 0 && date > 10) {
    extraDayStatus = true;
  } else if (week === 5 && date < 10) {
    extraDayStatus = true;
  } else if (week === 4 && date < 10) {
    extraDayStatus = true;
  } else {
    extraDayStatus = false;
  }
  return extraDayStatus;
};

function Dates({ week, weekIndex, month, year }) {
  return (
    <tr className={styles['calender-row']}>
      {week.map((day) => (
        <td key={day} className={styles['calender-col']}>
          <Date
            key={day}
            isExtraDays={isExtraDays}
            weekIndex={weekIndex}
            day={day}
            date={[year, '-', month, '-', day].join('')}
          />
        </td>
      ))}
    </tr>
  );
}

Dates.propTypes = {
  month: PropTypes.number.isRequired,
  week: PropTypes.arrayOf(PropTypes.string).isRequired,
  weekIndex: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
};

export default Dates;
