import { useState } from "react";

/* eslint-disable react/prop-types */
const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-white border border-gray-600 h-24 w-24 shadow-2xl font-bold text-lg m-1 leading-9"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
