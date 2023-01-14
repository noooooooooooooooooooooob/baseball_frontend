import {Button, Form, Input} from "antd";

interface Props {
  isSignin?: boolean;
}

export default function SigninForm({ isSignin }: Props) {
  const onFinish = (values: any) => {
    console.log(values);
  }

  return (
    <Form
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: '아이디를 입력해주세요.'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: '비밀번호를 입력해주세요.'}]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">{isSignin ? '로그인' : '회원가입'}</Button>
      </Form.Item>
    </Form>
  )
}