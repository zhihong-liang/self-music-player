import React from "react";
import logo from "assets/img/logo.png";
import {LOGO_TEXT} from 'constants/index/home'
import clas from 'classnames'

import styles from "./styles.module.scss";

type IProps = {
  className?: string
}

const Index = ({className}: IProps) => {
  return (
    <div className={clas(styles["logo"], className)}>
      <img className={styles["logoImg"]} src={logo} alt="logo" />

      <span className={styles["logoText"]}>{LOGO_TEXT}</span>
    </div>
  );
};

export default Index;
