import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, isLoading, disabled, className = '', ...props }) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`w-full py-3 px-6 bg-[#0092E4] hover:bg-[#0081ca] text-white font-medium rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading ? 'Chargement...' : children}
    </button>
  );
};