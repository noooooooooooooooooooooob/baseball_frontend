import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SigninForm from '../../components/account/SigninForm';
import { useToken } from '../../hooks/useToken';

export default function Signin() {
  const router = useRouter();
  const { hasToken } = useToken();

  useEffect(() => {
    if (hasToken()) {
      router.replace('/home');
    }
  }, [hasToken, router]);

  return <SigninForm isSignin />;
}
