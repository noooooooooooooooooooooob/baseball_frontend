import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Link from 'next/link';
import { CSSProperties } from 'react';
import HStack from '../../common/HStack';

interface Props {
  style?: CSSProperties;
}

export function HomeHeader({ style }: Props) {
  return (
    <HStack justifyContent="end" style={style}>
      <Link href="/profile">
        <Avatar size="large" icon={<UserOutlined />} />
      </Link>
    </HStack>
  );
}
