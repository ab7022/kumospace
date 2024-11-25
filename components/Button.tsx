import React from 'react';

const Button = ({ children, onClickFunction }
    :{
        children: string,
        onClickFunction?: () => void
    }
) => {
  return (
    <div className="flex justify-start mt-6">
      <button
        className="bg-primary-500 hover:bg-primary-600 text-neutral-800 font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
        onClick={onClickFunction}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
