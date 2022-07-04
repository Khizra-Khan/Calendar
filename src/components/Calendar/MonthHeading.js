import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import styles from "./../../styles/Calendar.module.scss";
import { previousMonth, nextMonth } from "../../store/actions/monthActions";

const MonthHeader = (props) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col span={7}>
        <LeftCircleOutlined
          className={styles["month-next-prev"]}
          onClick={() => dispatch(previousMonth())}
        />
      </Col>
      <Col span={10}>
        <h1 className={styles["month-name"]}>{props.month.name}</h1>
      </Col>
      <Col span={7}>
        <RightCircleOutlined
          className={styles["month-next-prev"]}
          onClick={() => dispatch(nextMonth())}
        />
      </Col>
    </Row>
  );
};

export default MonthHeader;
