import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToken } from '../hooks/useToken';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { hasToken } = useToken();

  useEffect(() => {
    if (hasToken()) {
      router.replace('/home');
    }
  }, [hasToken, router]);

  return <Component {...pageProps} />;
}
