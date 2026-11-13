import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm font-semibold text-gray-800">{label}</label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-700 outline-none transition-all
            ${error ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'}
            ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';