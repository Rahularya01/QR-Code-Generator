import React from "react";

interface buttonProps {
  text: string;
  styles: string;
  onClick: () => any;
}

const Button = ({ text, styles, onClick }: buttonProps) => {
  return (
    <>
      <button onClick={onClick} className={`rounded text-white py-3 px-4 ${styles}`}>{text}</button>
    </>
  );
};

export default Button;
