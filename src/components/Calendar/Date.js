import React, { useState } from "react";
import CollectionCreateEventForm from "../Event/Event";

const Date = (props) => {
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const [eventCardVisible, setEventCardVisible] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");

  const onCreate = (values) => {
    setEventTitle(values.title);
    setEventDescription(values.description);
    setEventStartTime(values.startTime.format("HH:mm:ss"));
    setEventEndTime(values.endTime.format("HH:mm:ss"));
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
          <span key={props.day} className="isDates-grey">
            {props.day}
          </span>
        ) : (
          <span key={props.day}>{props.day}</span>
        )}
      </span>
      <div>
        {eventCardVisible ? (
          <div className="event-detail-wrapper">
            <h3>{eventTitle}</h3>
            <p>{eventDescription}</p>
            <p>
              {eventStartTime} - {eventEndTime}
            </p>
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
