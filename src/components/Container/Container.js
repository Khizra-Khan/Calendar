import React from "react";
import styles from "./../../styles/Container.module.scss";
import Calendar from "../../pages/Calendar";

const Container = (props) => {
  return (
    <div className={styles.Container}>
      <Calendar year={props.year} />
    </div>
  );
};

export default Container;
