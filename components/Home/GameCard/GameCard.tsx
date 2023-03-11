import { ReactNode } from 'react';
import S from './styles';

interface Props {
  children: ReactNode;
}

export default function GameCard({ children }: Props) {
  return <S.Game id="game-card">{children}</S.Game>;
}
