import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  spacing?: number;
  justifyContent?: 'space-between' | 'space-around' | 'center';
  alignItems?: 'center' | 'start' | 'end';
  style?: CSSProperties;
}

export default function HStack({
  alignItems = 'center',
  justifyContent = 'center',
  spacing = 0,
  style,
  children,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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
