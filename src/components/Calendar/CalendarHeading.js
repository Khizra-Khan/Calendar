import React from "react";
import calendar from "./../../styles/Calendar.module.scss";

const CalendarHeading = (props) => (
  <div>
    <h1 className={calendar["Container-heading"]}>Calender {props.year}</h1>
  </div>
);

export default CalendarHeading;
