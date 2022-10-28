import React from "react";
import { ReactElement, ReactNode } from "react";
import styles from '../styles/Header.module.css';

type Props = {
  children: ReactNode
};

export default function NetoHeader({children}: Props): ReactElement {
  return (
    <div className={styles.social}>
      <h4 className={styles.title}>Neto Social</h4>
      {children}
    </div>
  );
}
