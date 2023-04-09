import { PlusOutlined } from '@ant-design/icons';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import { Avatar, Card, FloatButton, message } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HStack from '../components/common/HStack';
import VStack from '../components/common/VStack';
import GameCard from '../components/Home/GameCard/GameCard';
import HomeHeader from '../components/Home/Header';
import { useToken } from '../hooks/useToken';
import { Match, MatchResponse } from '../shared/team';

export default function Home() {
  const { hasToken, getToken } = useToken();
  const router = useRouter();

  const [matchData, setMatchData] = useState<Match[]>();

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
    {
      id: '4',
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
    {
      id: '5',
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
    {
      id: '6',
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
    {
      id: '7',
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
    {
      id: '8',
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
    {
      id: '9',
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
    {
      id: '10',
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
    {
      id: '11',
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

    async function fetch() {
      try {
        const token = getToken();

        const { data } = await axios.get<MatchResponse>('/api/baseball/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMatchData(data.result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetch();
  }, [hasToken, getToken, router]);

  if (!matchData) {
    return null;
  }

  return (
    <div>
      <HomeHeader style={{ marginBottom: '20px' }} />
      {matchData.map((game) => (
        <GameCard key={game.id}>
          <Link href={`game/${game.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <VStack spacing={8}>
                <HStack spacing={24}>
                  <VStack spacing={4}>
                    <span>{game.home.team}</span>
                    <span>{game.home.score}</span>
                  </VStack>
                  <h3 style={{ margin: 0 }}>VS</h3>
                  <VStack spacing={4}>
                    <span>{game.away.team}</span>
                    <span>{game.away.score}</span>
                  </VStack>
                </HStack>
                <VStack spacing={2}>
                  <span>{game.matchDate}</span>
                  <span>{game.stadium}</span>
                </VStack>
              </VStack>
            </Card>
          </Link>
        </GameCard>
      ))}
      <FloatButton.Group shape="square">
        <FloatButton icon={<PlusOutlined />} />
        <FloatButton.BackTop />
      </FloatButton.Group>
    </div>
  );
}
