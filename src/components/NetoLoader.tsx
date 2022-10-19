import React, { ReactElement } from 'react';

type Props = {
  styleName: string
};

export default function NetoLoader({styleName = ''}: Props): ReactElement {
  return (
    <div className={`loader ${styleName}`}>Loading...</div>
  );
};
