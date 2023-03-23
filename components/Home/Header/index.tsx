import { UserOutlined } from '@ant-design/icons';
import { Avatar, Progress } from 'antd';
import Link from 'next/link';
import { CSSProperties } from 'react';
import HStack from '../../common/HStack';

interface Props {
  style?: CSSProperties;
}

export default function HomeHeader({ style }: Props) {
  return (
    <HStack justifyContent="space-between" style={style}>
      <div style={{ width: '200px' }}>
        <Progress percent={30} />
      </div>
      <Link href="/profile">
        <Avatar size="large" icon={<UserOutlined />} />
      </Link>
    </HStack>
  );
}
