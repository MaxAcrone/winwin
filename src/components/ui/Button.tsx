'use client';

import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-black text-white border-black hover:bg-white hover:text-black',
  secondary: 'border-black hover:bg-black hover:text-white',
  outline: 'border-border text-subtle hover:border-black hover:text-black',
};

export function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  className,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'border px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors',
        variantStyles[variant],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}
