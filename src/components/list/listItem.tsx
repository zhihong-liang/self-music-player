import React from "react";

import styles from "./listItem.module.scss";

export interface item {
  name: string;
  icon?: string;
}

export type IProps = {
  listItem: item;
};

const index = ({ listItem }: IProps) => {
  return (
    <div className={styles["h-listItem"]}>
      {listItem.icon ? (
        <img className={styles["h-listItem-icon"]} src={listItem.icon} alt="" />
      ) : null}

      <div className="h-listItem-text-box">
        <span className={styles["h-listItem-text"]}>{listItem.name}</span>
      </div>
    </div>
  );
};

export default index;
