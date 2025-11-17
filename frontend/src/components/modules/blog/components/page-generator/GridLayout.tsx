import React from "react";

const GridLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="grid grid-cols-12">{children}</div>;
};

export default GridLayout;
