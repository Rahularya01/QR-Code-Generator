import React from "react";

interface selectProps {
  value: string;
  onSelect: (e: any) => any;
}

const Select = ({ value, onSelect }: selectProps) => {
  return (
    <>
      <select
        value={value}
        onChange={onSelect}
        className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none"
      >
        <option value="100">100x100</option>
        <option value="200">200x200</option>
        <option value="300">300x300</option>
        <option value="400">400x400</option>
        <option value="500">500x500</option>
        <option value="600">600x600</option>
        <option value="700">700x700</option>
      </select>
    </>
  );
};

export default Select;
