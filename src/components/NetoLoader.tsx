import React, { ReactElement } from 'react';
import styles from '../styles/Loader.module.css';

type Props = {
  styleName: string
};

export default function NetoLoader({styleName}: Props): ReactElement {
  return (
    <div className={`${styles.loader} ${styles[styleName]}`}>Loading...</div>
  );
};
