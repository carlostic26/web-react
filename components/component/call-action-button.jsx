import React from 'react';

const ButtonCallAction = ({ title, onClick }) => {
  return (
    <button
      className="mt-2 w-full text-lg font-bold bg-[#f87171]"
      style={{ color: 'white' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonCallAction;