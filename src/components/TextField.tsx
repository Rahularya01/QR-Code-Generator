import React from "react";

interface inputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: any) => any;
}

const TextField = ({ value, type, placeholder, onChange }: inputProps) => {
  return (
    <>
      <input
        className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextField;
