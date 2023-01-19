import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Signin } from './interfaces';

interface Props {
  isSignin?: boolean;
}

export default function SigninForm({ isSignin }: Props) {
  const onFinish = async (values: Signin) => {
    const { data } = await axios.post(
      'http://localhost:80/api/user/signin',
      {
        userId: values.id,
        password: values.password,
      }
    );

    console.log(data);

    // const { data } = await axios.get('http://localhost:80/api/user/test');

    // console.log(data);
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
