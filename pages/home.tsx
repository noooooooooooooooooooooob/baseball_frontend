import { message } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToken } from '../hooks/useToken';

export default function Home() {
  const { hasToken } = useToken();
  const router = useRouter();

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }
  }, [hasToken, router]);

  return (
    <div>
      <span>Home Page</span>
    </div>
  );
}
