import React from "react";
import styles from "./buttons.module.scss";

interface Iprops {
  children: string;
  onClick?: (
    arg?: string | React.MouseEvent<HTMLButtonElement, MouseEvent> | number
  ) => void;
}

export const Buttons = ({ children, onClick }: Iprops) => {
  return (
    <div className={styles.everyButton}>
      <button className={styles.button} onClick={() => onClick!()}>
        {children}
      </button>
    </div>
  );
};
