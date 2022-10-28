import React from 'react';
import { ReactElement } from 'react';
import styles from '../styles/Error.module.css';

type Props = {
  error: string
};

export default function NetoError({error}: Props): ReactElement {
  return (
    <div className={styles.error}>Error: {error}</div>
  )
}
