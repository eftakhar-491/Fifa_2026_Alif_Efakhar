import React from "react";
import "./grid-layout.css";
type TGridLayoutProps = {
  children?: React.ReactNode;
};
const GridLayout = ({ children }: TGridLayoutProps) => {
  return <div className="en-grid-layout">{children}</div>;
};

export default GridLayout;
