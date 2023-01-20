import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useToken } from '../../hooks/useToken';
import { Signin, SigninResponse } from './interfaces';

interface Props {
  isSignin?: boolean;
}

export default function SigninForm({ isSignin }: Props) {
  const router = useRouter();
  const { setToken, hasToken } = useToken();

  const onFinish = async (values: Signin) => {
    const { data } = await axios.post<SigninResponse>(
      'http://localhost:80/api/user/signin',
      {
        userId: values.id,
        password: values.password,
      }
    );

    setToken(data.token);

    router.replace('/home');
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

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          {isSignin ? '로그인' : '회원가입'}
        </Button>
      </Form.Item>
    </Form>
  );
}
