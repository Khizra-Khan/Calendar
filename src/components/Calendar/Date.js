import React, { useState } from "react";
import CollectionCreateEventForm from "../Event/Event";
import styles from "./../../styles/Calendar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as eventActions from "../../store/actions/eventActions";

const Date = (dateProps) => {
  const events = useSelector((rootReducer) => rootReducer.eventReducer);
  const dispatch = useDispatch();
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const [eventCardVisible, setEventCardVisible] = useState(true);

  const onCreate = (values) => {
    const newEvent = {
      date: dateProps.date,
      weekIndex: dateProps.weekIndex,
      title: values.title,
      description: values.description,
      startTime: values.startTime.format("hh:mm A"),
      endTime: values.endTime.format("hh:mm A"),
    };
    dispatch(eventActions.createEvent(newEvent));
    setEventCardVisible(true);
    setEventFormVisible(false);
  };

  return (
    <div key={dateProps.date}>
      <span
        key={dateProps.day}
        onClick={() => {
          setEventFormVisible(true);
        }}
      >
        {dateProps.isExtraDays(dateProps.weekIndex, dateProps.day) ? (
          <span key={dateProps.day} className={styles["isDates-grey"]}>
            {dateProps.day}
          </span>
        ) : (
          <span key={dateProps.day}>{dateProps.day}</span>
        )}
      </span>
      <div>
        {events.map((event, index) =>
          eventCardVisible &&
          event.date === dateProps.date &&
          event.weekIndex === dateProps.weekIndex ? (
            <div key={event.title} className={styles["event-detail-wrapper"]}>
              <h2 key={index} className={styles["event-heading"]}>
                {event.title}
              </h2>
              <span key={event.description}>{event.description}</span>
              <br />
              <span key={event.title + index}>
                {event.startTime} - {event.endTime}
              </span>
            </div>
          ) : (
            <span></span>
          )
        )}
      </div>
      <CollectionCreateEventForm
        visible={eventFormVisible}
        onCreate={onCreate}
        onCancel={() => {
          setEventFormVisible(false);
        }}
        date={dateProps.date}
      />
    </div>
  );
};

export default Date;
