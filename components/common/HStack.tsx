import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'end'
    | 'start';
  spacing?: number;
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
