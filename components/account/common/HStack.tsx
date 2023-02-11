import { CSSProperties, ReactNode } from 'react';

interface Props {
  alignItems: 'center' | 'start' | 'end';
  justifyContent: 'space-between' | 'space-around' | 'center';
  spacing: number;
  children: ReactNode;
  style?: CSSProperties;
}

export default function HStack({
  alignItems,
  justifyContent,
  spacing,
  style,
  children,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems,
        justifyContent,
        gap: spacing,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
