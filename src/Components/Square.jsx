/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white border border-gray-600 h-24 w-24 shadow-2xl font-bold text-lg m-1 leading-9"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
