import React, { SelectHTMLAttributes, useId } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: Option[];
  large?: boolean;
}

export default function Select({ label, error, hint, options, large = false, className = "", ...props }: SelectProps) {
  const id = useId();
  const labelCls = large ? "text-sm font-bold text-navy" : "text-xs font-bold text-navy tracking-tight";
  const selectCls = large ? "min-h-[48px] text-base" : "min-h-[44px] text-sm";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
      )}

      <div className="relative flex items-center w-full">
        <select
          id={id}
          className={`
            w-full px-4 rounded-2xl text-navy bg-white border outline-none
            appearance-none shadow-premium-sm transition-all duration-300
            ${selectCls}
            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-border focus:border-navy focus:ring-4 focus:ring-navy/5"
            }
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-4 pointer-events-none text-muted flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {hint && !error && (
        <span className="text-xs text-muted leading-snug">{hint}</span>
      )}

      {error && (
        <span className="text-xs font-semibold text-red-500 mt-0.5 leading-none">{error}</span>
      )}
    </div>
  );
}
