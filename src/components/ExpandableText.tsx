import React, { ReactNode, useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [charachters, setCharachters] = useState(false);

  const handleClick = () => {
    setCharachters(!charachters);
  };
  return (
    <>
      <div>{charachters ? children : children.slice(0, maxChars)}....</div>
      <button onClick={handleClick}>{charachters ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
