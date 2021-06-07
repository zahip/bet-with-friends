import React from 'react';

interface IProps {
  children: string;
  handleClick: () => void;
}

const CustomButton = ({ children, handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className="hover:bg-gray-700 transition-colors text-white font-bold py-2 px-4 rounded focus:outline-none"
    >
      {children}
    </button>
  );
};

export default CustomButton;
