import React from "react";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode
};

export default function NetoHeader({children}: Props): ReactElement {
  return (
    <div className="header-social">
      <h4 className="header-title">Neto Social</h4>
      {children}
    </div>
  );
}
