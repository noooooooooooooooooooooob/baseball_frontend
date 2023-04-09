import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToken } from '../../hooks/useToken';

export default function GameCreate() {
  const router = useRouter();
  const { getToken, hasToken } = useToken();

  useEffect(() => {
    if (!hasToken()) {
      message.error('유효하지 않은 접근입니다. 다시 로그인해주세요');
      router.replace('/account/signin');
    }
  }, [hasToken]);

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const token = getToken();

      console.log(token);

      const { data } = await axios.post<any>(
        '/api/baseball/create',
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('111', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="home" label="홈 팀" required>
        <Input />
      </Form.Item>

      <Form.Item name="away" label="원정 팀" required>
        <Input />
      </Form.Item>

      <Form.Item name="matchDate" label="경기 일자" required>
        <Input />
      </Form.Item>

      <Form.Item name="doubleHeader" label="더블헤더">
        <Checkbox />
      </Form.Item>

      <Form.Item name="comment" label="코멘트">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );
}
