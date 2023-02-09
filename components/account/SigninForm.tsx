import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToken } from '../../hooks/useToken';
import { teamData } from '../../shared/team';
import HStack from './common/HStack';
import { Account, SigninResponse } from './interfaces';

interface Props {
  isSignin?: boolean;
}

export default function SigninForm({ isSignin }: Props) {
  const router = useRouter();
  const { setToken, hasToken } = useToken();

  const onFinish = async (values: Account) => {
    const { id, password, team } = values;

    if (isSignin) {
      const { data } = await axios.post<SigninResponse>(
        'http://localhost:80/api/user/signin',
        {
          userId: id,
          password,
        }
      );

      setToken(data.token);

      router.replace('/home');
    } else {
      const { data } = await axios.post('http://localhost:80/api/user/signup', {
        userId: id,
        password,
        team,
      });

      console.log(data);
    }
  };

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="아이디"
        name="id"
        rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
      >
        <Input.Password />
      </Form.Item>

      {!isSignin && (
        <Form.Item
          initialValue="dusan"
          label="좋아하는 팀"
          name="team"
          rules={[{ required: true, message: '응원하는 팀을 선택헤주세요.' }]}
        >
          <Select options={teamData} />
        </Form.Item>
      )}

      <Form.Item>
        <HStack alignItems="center" justifyContent="center" spacing={8}>
          {isSignin ? (
            <Link
              href="/account/signup"
              style={{ width: '100%', textAlign: 'center' }}
            >
              회원가입
            </Link>
          ) : (
            <Link
              href="/account/signin"
              style={{ width: '100%', textAlign: 'center' }}
            >
              로그인
            </Link>
          )}
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {isSignin ? '로그인' : '회원가입'}
          </Button>
        </HStack>
      </Form.Item>
    </Form>
  );
}
