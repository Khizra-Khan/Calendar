import React, { useState } from "react";
import CollectionCreateEventForm from "../Event/Event";
import styles from "./Calendar.module.scss";

const Date = (props) => {
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const [eventCardVisible, setEventCardVisible] = useState(false);
  const [event, setEvent] = useState("");

  const onCreate = (values) => {
    setEvent({
      title: values.title,
      description: values.description,
      startTime: values.startTime.format("hh:mm A"),
      endTime: values.endTime.format("hh:mm A"),
    });
    setEventCardVisible(true);
    setEventFormVisible(false);
  };

  return (
    <div>
      <span
        key={props.day}
        onClick={() => {
          setEventFormVisible(true);
        }}
      >
        {props.isExtraDays(props.weekIndex, props.day) ? (
          <span key={props.day} className={styles["isDates-grey"]}>
            {props.day}
          </span>
        ) : (
          <span key={props.day}>{props.day}</span>
        )}
      </span>
      <div>
        {eventCardVisible ? (
          <div className={styles["event-detail-wrapper"]}>
            <h2 className={styles["event-heading"]}>{event.title}</h2>
            <span>{event.description}</span>
            <br />
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </div>
        ) : (
          <span></span>
        )}
      </div>
      <CollectionCreateEventForm
        visible={eventFormVisible}
        onCreate={onCreate}
        onCancel={() => {
          setEventFormVisible(false);
        }}
        date={props.date}
      />
    </div>
  );
};

export default Date;
