import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  loading?: boolean;
  trailingIcon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  loading = false,
  trailingIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyle =
    "group inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 active:scale-[0.98] outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer min-h-[44px]";

  const variantStyles = {
    primary: "btn-cta-gradient shadow-premium-md hover:shadow-premium-lg text-white",
    secondary:
      "bg-navy hover:bg-navy-light text-white shadow-premium-sm hover:shadow-premium-md border border-navy/20 hover:-translate-y-0.5",
    outline:
      "bg-white hover:bg-bg-soft text-navy border border-border shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5",
    ghost: "bg-transparent hover:bg-bg-soft text-navy",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2 relative z-10">
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Cargando...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 relative z-10">
          <span>{children}</span>
          {trailingIcon && (
            <div className="transition-transform group-hover:translate-x-0.5">{trailingIcon}</div>
          )}
        </div>
      )}
    </button>
  );
}
