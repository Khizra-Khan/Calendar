import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Dates from "../components/Calendar/Dates";
import calendar from "../styles/Calendar.module.scss";
import MonthHeader from "../components/Calendar/MonthHeading";

const getDate = (month, year) => {
  var calendar = [];

  const startDate = moment([year, month])
    .clone()
    .startOf("month")
    .startOf("week");
  const endDate = moment([year, month]).clone().endOf("month");
  const day = startDate.clone().subtract(1, "day");
  // looping a month by a week
  while (day.isBefore(endDate, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone().format("DD"))
    );
  }

  if (calendar.length > 0) {
    return calendar.map((week, index) => (
      <Dates
        key={index}
        week={week}
        weekIndex={index}
        month={month + 1}
        year={year}
      />
    ));
  }
};

const Calendar = (props) => {
  const month = useSelector((rootReducer) => rootReducer.monthReducer);

  return (
    <div className={calendar["month-header"]}>
      <MonthHeader month={month} />
      <table className={calendar["calender-date"]}>
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
          {getDate(month.id, props.year)}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
