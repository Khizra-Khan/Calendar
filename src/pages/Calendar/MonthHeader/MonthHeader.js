import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { previousMonth, nextMonth } from '../../../store/actions/monthActions';
import styles from './MonthHeader.module.scss';

function MonthHeader({ monthName }) {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col span={7}>
        <LeftCircleOutlined className={styles['month-next-prev']} onClick={() => dispatch(previousMonth())} />
      </Col>
      <Col span={10}>
        <h1 className={styles['month-name']}>{monthName}</h1>
      </Col>
      <Col span={7}>
        <RightCircleOutlined className={styles['month-next-prev']} onClick={() => dispatch(nextMonth())} />
      </Col>
    </Row>
  );
}

MonthHeader.propTypes = {
  monthName: PropTypes.string.isRequired,
};

export default MonthHeader;
