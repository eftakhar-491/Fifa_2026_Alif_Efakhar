import React from "react";

type RootComponentProps = {
  children?: React.ReactNode;
  element?: React.ElementType;
  className?: string;
};

const RootComponent = ({
  children,
  element,
  className,
}: RootComponentProps) => {
  const Element = element || "div";
  return <Element className={className}>{children}</Element>;
};

export default RootComponent;
