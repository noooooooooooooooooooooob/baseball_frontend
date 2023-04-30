import {LeftOutlined} from '@ant-design/icons';
import {Button, Divider, message} from 'antd';
import axios from 'axios';
import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import HStack from '../../components/common/HStack';
import VStack from '../../components/common/VStack';
import {useToken} from '../../hooks/useToken';
import {GameResult, GameResultResponse} from '../../shared/game';

export default function Detail() {
  const {hasToken, getToken} = useToken();
  const router = useRouter();
  const [gameResult, setGameResult] = useState<GameResult>();

  const {id} = router.query;

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }

    async function fetch() {
      try {
        if (id) {
          const token = getToken();

          const {data} = await axios.get<GameResultResponse>(
            `/api/baseball/detail/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setGameResult(data.result);
          console.log(data.result);
        }
      } catch (error) {
        message.error('경기 데이터를 불러오는 도중 오류가 발생했습니다.');
      }
    }

    fetch();
  }, [id]);

  return (
    <section>
      {!gameResult ? (
        <div>불러오는 중...</div>
      ) : (
        <>
          <Button onClick={router.back} icon={<LeftOutlined/>}/>
          <VStack alignItems="center" spacing={60}>
            <VStack spacing={8}>
              <h2 style={{ marginTop: 0, marginBottom: 12 }}>상세 기록</h2>
              <HStack spacing={32}>
                <HStack spacing={24}>
                  <h3 style={{margin: 0}}>{gameResult.away.result}</h3>

                  <VStack>
                    <h3 style={{margin: 0}}>{gameResult.away.team}</h3>
                    <h3 style={{margin: 0}}>{gameResult.away.score}</h3>
                  </VStack>
                </HStack>
                <h3 style={{margin: 0}}>VS</h3>
                <HStack spacing={24}>
                  <VStack>
                    <h3 style={{margin: 0}}>{gameResult.home.team}</h3>
                    <h3 style={{margin: 0}}>{gameResult.home.score}</h3>
                  </VStack>

                  <h3 style={{margin: 0}}>{gameResult.home.result}</h3>
                </HStack>
              </HStack>

              <VStack spacing={4}>
                <span>{format(new Date(gameResult.matchDate), 'yyyy-MM-dd')}</span>
                <span>{gameResult.staium}</span>
              </VStack>
            </VStack>

            <HStack alignItems="center" spacing={80}>
              <VStack spacing={8}>
                {
                  gameResult.away.lineUp.map((player) => (
                    <div key={player}>
                      <span>{player}</span>
                    </div>
                  ))
                }
              </VStack>

              <Divider type="vertical" style={{ height: '20rem' }} />

              <VStack spacing={8}>
                {
                  gameResult.home.lineUp.map((player) => (
                    <div key={player}>
                      <span>{player}</span>
                    </div>
                  ))
                }
              </VStack>
            </HStack>

            <VStack alignItems="center">
              <h2 style={{ marginTop: 0, marginBottom: 12 }}>코멘트</h2>
              <span style={{ wordBreak: 'break-word' }}>{gameResult.comment}</span>
            </VStack>
          </VStack>
        </>
      )}
    </section>
  );
}
