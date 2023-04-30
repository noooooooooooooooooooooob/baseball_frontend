import {LogoutOutlined, PlusOutlined} from '@ant-design/icons';
import {Card, Empty, FloatButton, message} from 'antd';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import HStack from '../components/common/HStack';
import VStack from '../components/common/VStack';
import GameCard from '../components/Home/GameCard/GameCard';
import HomeHeader from '../components/Home/Header';
import {useToken} from '../hooks/useToken';
import {Match, MatchResponse} from '../shared/team';
import {format} from "date-fns";

export default function Home() {
  const {hasToken, getToken, removeToken} = useToken();
  const router = useRouter();

  const [matchData, setMatchData] = useState<Match[]>();
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }

    async function fetch() {
      try {
        const token = getToken();

        const {data} = await axios.get<MatchResponse>('/api/baseball/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMatchData(data.result.data);
        setPercent(data.result.stats.odss);
      } catch (error) {
        console.error(error);
      }
    }

    fetch();
  }, []);

  const handleLogout = () => {
    removeToken();
    router.replace('/account/signin');
  };

  if (!matchData) {
    return null;
  }

  return (
    <div>
      <HomeHeader percent={percent} style={{marginBottom: '20px'}}/>
      {matchData.length === 0 ? (
        <Card>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={'등록한 경기가 없습니다.'}
          />
        </Card>
      ) : (
        matchData.map((game) => (
          <GameCard key={game.id}>
            <Link href={`game/${game.id}`} style={{textDecoration: 'none'}}>
              <Card>
                <VStack spacing={8}>
                  <HStack spacing={24}>
                    <VStack spacing={4}>
                      <span>{game.away.team}</span>
                      <span>{game.away.score}</span>
                    </VStack>

                    <h3 style={{margin: 0}}>VS</h3>

                    <VStack spacing={4}>
                      <span>{game.home.team}</span>
                      <span>{game.home.score}</span>
                    </VStack>
                  </HStack>
                  <VStack spacing={2}>
                    <span>{format(new Date(game.matchDate), 'yyyy-MM-dd HH:mm')}</span>
                    <span>{game.stadium}</span>
                  </VStack>
                </VStack>
              </Card>
            </Link>
          </GameCard>
        ))
      )}
      <FloatButton.Group shape="square">
        <Link href="/game/create">
          <FloatButton icon={<PlusOutlined/>}/>
        </Link>
        <FloatButton onClick={handleLogout} icon={<LogoutOutlined/>}/>
        <FloatButton.BackTop/>
      </FloatButton.Group>
    </div>
  );
}
