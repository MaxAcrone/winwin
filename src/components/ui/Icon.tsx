'use client';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = '' }: IconProps) {
  return (
    <span
      className={`iconify ${className}`}
      data-icon={name}
      data-width={size}
      data-height={size}
      style={{ width: size, height: size }}
    />
  );
}
