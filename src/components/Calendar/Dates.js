import React from "react";
import Date from "./Date";

const isExtraDays = (week, date) => {
  if (week === 0 && date > 10) {
    return true;
  } else if (week === 5 && date < 10) {
    return true;
  } else if (week === 4 && date < 10) {
    return true;
  } else {
    return false;
  }
};

const Dates = (props) => (
  <tr className="calender-row">
    {props.week.map((day) => (
      <td key={day} className="calender-col">
        <Date
          key={day}
          isExtraDays={isExtraDays}
          weekIndex={props.weekIndex}
          day={day}
          date={props.year + "-" + props.month + "-" + day}
        />
      </td>
    ))}
  </tr>
);

export default Dates;
