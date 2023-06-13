import React, { ReactNode, useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div>{isExpanded ? children : `${children.slice(0, maxChars)}...`}</div>
      <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
