import React from "react";

type ChildComponentProps = {
  children?: React.ReactNode;
  element?: React.ElementType;
  className?: string;
};

const ChildComponent = ({
  children,
  element,
  className,
}: ChildComponentProps) => {
  const Element = element || "div";
  return <Element className={className}>{children}</Element>;
};

export default ChildComponent;
