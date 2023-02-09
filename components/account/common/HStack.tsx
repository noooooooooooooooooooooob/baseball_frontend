import { ReactNode } from 'react';

interface Props {
  alignItems: 'center' | 'start' | 'end';
  justifyContent: 'space-between' | 'space-around' | 'center';
  spacing: number;
  children: ReactNode;
}

export default function HStack({
  alignItems,
  justifyContent,
  spacing,
  children,
}: Props) {
  return (
    <div style={{ display: 'flex', alignItems, justifyContent, gap: spacing }}>
      {children}
    </div>
  );
}
