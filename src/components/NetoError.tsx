import React from 'react';
import { ReactElement } from 'react';

type Props = {
  error: string
};

export default function NetoError({error}: Props): ReactElement {
  return (
    <div className='error'>Error: {error}</div>
  )
}
