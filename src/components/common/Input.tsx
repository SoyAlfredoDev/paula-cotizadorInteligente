import React, { InputHTMLAttributes, ReactNode, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  large?: boolean;
}

export default function Input({ label, error, hint, icon, large = false, className = "", ...props }: InputProps) {
  const id = useId();
  const labelCls = large ? "text-sm font-bold text-navy" : "text-xs font-bold text-navy tracking-tight";
  const inputCls = large
    ? "min-h-[48px] px-4 text-base"
    : "min-h-[44px] px-4 text-sm";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-muted flex items-center justify-center pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={id}
          className={`
            w-full rounded-2xl text-navy bg-white border outline-none
            shadow-premium-sm transition-all duration-300
            ${inputCls}
            ${icon ? "pl-11" : "pl-4"}
            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-border focus:border-navy focus:ring-4 focus:ring-navy/5"
            }
            placeholder:text-slate-400
          `}
          {...props}
        />
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
