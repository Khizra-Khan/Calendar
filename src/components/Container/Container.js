import React from "react";
import moment from "moment";
import Calendar from "../Calendar/Calendar";
import "./Container.css";

const getIndexOfMonth = (month) => {
  return moment().month(month).format("M") - 1;
};

const Container = (props) => {
  const months = [moment().format("MMMM")];
  return (
    <div className="Container">
      {months.map((month, index) => (
        <Calendar
          key={Math.random}
          monthIndex={getIndexOfMonth(month)}
          month={month}
          year={props.year}
        />
      ))}
    </div>
  );
};

export default Container;
