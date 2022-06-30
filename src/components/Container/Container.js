import React, { useState } from "react";
import moment from "moment";
import Calendar from "../Calendar/Calendar";
import styles from "./Container.module.scss";
import { Col, Row } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

const Container = (props) => {
  const months = moment.months();
  const currentMonthInNum = moment().month();
  const [month, setMonth] = useState({
    id: currentMonthInNum,
    name: months[currentMonthInNum],
  });

  const NextMonth = () => {
    if (month.id < months.length - 1) {
      setMonth({
        id: month.id + 1,
        name: months[month.id + 1],
      });
    }
  };

  const PreviousMonth = () => {
    if (month.id > 0) {
      setMonth({
        id: month.id - 1,
        name: months[month.id - 1],
      });
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles["month-header"]}>
        <Row>
          <Col span={7}>
            <LeftCircleOutlined
              className={styles["month-next-prev"]}
              onClick={PreviousMonth}
            />
          </Col>
          <Col span={10}>
            <h1 className={styles["month-name"]}>{month.name}</h1>
          </Col>
          <Col span={7}>
            <RightCircleOutlined
              className={styles["month-next-prev"]}
              onClick={NextMonth}
            />
          </Col>
        </Row>
        <Calendar
          key={month}
          monthIndex={month.id}
          month={month.name}
          year={props.year}
        />
      </div>
    </div>
  );
};

export default Container;
