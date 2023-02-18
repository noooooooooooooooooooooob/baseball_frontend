import { Card, message } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HStack from '../components/account/common/HStack';
import VStack from '../components/account/common/VStack';
import { useToken } from '../hooks/useToken';

export default function Home() {
  const { hasToken } = useToken();
  const router = useRouter();

  const data = [
    {
      id: '1',
      home: {
        title: '두산',
        score: 10,
        // logo
      },
      away: {
        title: 'NC',
        score: 8,
        // logo
      },
      date: '2022-01-01',
      place: '잠실',
    },
    {
      id: '2',
      home: {
        title: 'SK',
        score: 1,
        // logo
      },
      away: {
        title: '키움',
        score: 5,
        // logo
      },
      date: '2022-02-01',
      place: '잠실',
    },
    {
      id: '3',
      home: {
        title: '롯데',
        score: 9,
        // logo
      },
      away: {
        title: 'SSG',
        score: 5,
        // logo
      },
      date: '2022-03-01',
      place: '잠실',
    },
  ];

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }
  }, [hasToken, router]);

  return (
    <div>
      {data.map((game) => (
        <Card key={game.id}>
          <VStack spacing={8}>
            <HStack spacing={24}>
              <VStack spacing={4}>
                <span>{game.home.title}</span>
                <span>{game.home.score}</span>
              </VStack>
              <h3 style={{ margin: 0 }}>VS</h3>
              <VStack spacing={4}>
                <span>{game.away.title}</span>
                <span>{game.away.score}</span>
              </VStack>
            </HStack>
            <VStack spacing={2}>
              <span>{game.date}</span>
              <span>{game.place}</span>
            </VStack>
          </VStack>
        </Card>
      ))}
    </div>
  );
}
