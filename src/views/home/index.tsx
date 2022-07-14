import React from "react";
import LeftPane from "business/leftPane/index";
import RightPane from "business/rightPane/index";

import styles from './styles.module.scss'

const Index = () => {
  return (
    <div className={styles['content']}>

      <div className={styles['leftPane']}>
        <LeftPane />
      </div>

      <div className={styles["rightPane"]}>
        <RightPane />
      </div>
    </div>
  );
};

export default Index;
