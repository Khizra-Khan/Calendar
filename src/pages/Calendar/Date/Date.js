import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../../store/actions/eventActions';
import CollectionCreateEventForm from '../Event/Event';
import styles from './Date.module.scss';

function Date({ date, weekIndex, isExtraDays, day }) {
  const events = useSelector((rootReducer) => rootReducer.eventReducer);
  const dispatch = useDispatch();
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const [eventCardVisible, setEventCardVisible] = useState(true);

  const onCreate = (values) => {
    const newEvent = {
      date,
      weekIndex,
      title: values.title,
      description: values.description,
      startTime: values.startTime.format('hh:mm A'),
      endTime: values.endTime.format('hh:mm A'),
    };
    dispatch(eventActions.createEvent(newEvent));
    setEventCardVisible(true);
    setEventFormVisible(false);
  };

  return (
    <div key={date}>
      <span
        tabIndex={-1}
        role="button"
        key={day}
        onClick={() => {
          setEventFormVisible(true);
        }}
        onKeyDown={() => {
          setEventFormVisible(true);
        }}
      >
        {isExtraDays(weekIndex, day) ? (
          <span key={day} className={styles['isDates-grey']}>
            {day}
          </span>
        ) : (
          <span key={day}>{day}</span>
        )}
      </span>
      <div>
        {events.map((event) =>
          eventCardVisible && event.date === date && event.weekIndex === weekIndex ? (
            <div key={event.title} className={styles['event-detail-wrapper']}>
              <h2 key={[date, '-', event.title].join('')} className={styles['event-heading']}>
                {event.title}
              </h2>
              <span key={event.description}>{event.description}</span>
              <br />
              <span key={event.title}>
                {event.startTime} - {event.endTime}
              </span>
            </div>
          ) : (
            ''
          )
        )}
      </div>
      <CollectionCreateEventForm
        visible={eventFormVisible}
        onCreate={onCreate}
        onCancel={() => {
          setEventFormVisible(false);
        }}
        date={date}
      />
    </div>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  isExtraDays: PropTypes.func.isRequired,
  weekIndex: PropTypes.number.isRequired,
};

export default Date;
