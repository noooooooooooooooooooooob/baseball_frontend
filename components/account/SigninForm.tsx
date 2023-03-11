import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useToken } from '../../hooks/useToken';
import { teamData } from '../../shared/team';
import HStack from '../common/HStack';
import { Account, SigninResponse } from './interfaces';

interface Props {
  isSignin?: boolean;
}

export default function SigninForm({ isSignin }: Props) {
  const router = useRouter();
  const { setToken } = useToken();
  const [form] = Form.useForm();

  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [isValidId, setIsValidId] = useState<boolean>(true);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const onFinish = async (values: Account) => {
    const { id, password, team } = values;

    if (isSignin) {
      setIsRequesting(true);

      try {
        const { data } = await axios.post<SigninResponse>(
          'http://localhost:80/api/user/signin',
          {
            userId: id,
            password,
          }
        );

        setToken(data.token);

        router.replace('/home');
      } finally {
        setIsRequesting(false);
      }
    } else {
      setIsRequesting(true);

      try {
        const { data } = await axios.post(
          'http://localhost:80/api/user/signup',
          {
            userId: id,
            password,
            team,
          }
        );

        if (data.message === 'success') {
          router.replace('/account/signin');
        }
      } finally {
        setIsRequesting(false);
      }
    }
  };

  const validateIdOnBlur = () => {
    const id = form.getFieldValue('id');

    axios
      .get<{
        message: string;
        result: Record<string, any>;
      }>(`http://localhost:80/api/user/checkid`, {
        params: {
          userId: id,
        },
      })
      .then(({ data }) => {
        setIsValidId(data.message !== '이미 존재하는 아이디 입니다.');

        if (data.message === '이미 존재하는 아이디 입니다.') {
          form.setFields([
            {
              name: 'id',
              errors: ['이미 존재하는 아이디 입니다.'],
            },
          ]);
        }
      });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      onValuesChange={() => {
        setIsDirty(form.isFieldsTouched(['id', 'password'], true));
        setIsValidForm(
          !form
            .getFieldsError(['id', 'password', 'team'])
            .some((item) => item.errors.length)
        );
      }}
    >
      <HStack
        justifyContent="center"
        alignItems="center"
        spacing={8}
        style={{ marginBottom: '24px' }}
      >
        <Form.Item
          label="아이디"
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
          style={{ marginBottom: 0, width: '100%' }}
        >
          <Input onBlur={!isSignin ? validateIdOnBlur : () => {}} />
        </Form.Item>
      </HStack>

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
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            disabled={!isValidId || !isDirty || !isValidForm || isRequesting}
          >
            {isSignin ? '로그인' : '회원가입'}
          </Button>
        </HStack>
      </Form.Item>
    </Form>
  );
}
