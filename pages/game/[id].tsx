import { message } from 'antd';
import axios from 'axios';
import { log } from 'console';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToken } from '../../hooks/useToken';
import { GameResult } from '../../shared/game';

export default function Detail() {
  const { hasToken, getToken } = useToken();
  const router = useRouter();
  const { id } = router.query;

  // TODO: detail data state

  console.log(id);

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }

    async function fetch() {
      try {
        if (id) {
          const token = getToken();

          const { data } = await axios.get<GameResult>(
            `/api/baseball/detail/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(data);
        }
      } catch (error) {
        // message.error(error);
      }
    }

    fetch();
  }, [id]);

  return (
    <div>
      <span>detail page</span>
    </div>
  );
}
