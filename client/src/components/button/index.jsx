import React from 'react';

const Button = ({ text, bgPrimary }) => {
  const bgColorClass = bgPrimary ? "bg-secondary hover:bg-success" : "bg-success hover:bg-secondary"
  
  return (
    <div className='projectBtn'>
      <button
        className={`py-[16px] px-[48px] rounded-md text-center text-white ${bgColorClass} duration-500`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
