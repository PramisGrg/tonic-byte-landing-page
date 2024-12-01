import React from "react";

interface MaxwidthContainerProps {
  children: React.ReactNode;
}

const MaxwidthContainer: React.FC<MaxwidthContainerProps> = ({ children }) => {
  return <div className="mx-auto lg:px-24 md:px-16 px-6">{children}</div>;
};

export default MaxwidthContainer;
