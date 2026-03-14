'use client';

import { cn } from '@/lib/utils';

interface InputProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: 'text' | 'email' | 'tel';
  multiline?: boolean;
  rows?: number;
  className?: string;
}

export function Input({
  name,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  multiline = false,
  rows = 4,
  className,
}: InputProps) {
  const baseStyles = cn(
    'w-full border border-border px-4 py-3 text-sm font-mono',
    'placeholder:text-subtle focus:outline-none focus:border-black transition-colors',
    error && 'border-red-500',
    className
  );

  return (
    <div className="w-full">
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={cn(baseStyles, 'resize-none')}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseStyles}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
