import { UserOutlined } from '@ant-design/icons';
import { Avatar, Progress } from 'antd';
import Link from 'next/link';
import { CSSProperties } from 'react';
import HStack from '../../common/HStack';

interface Props {
  percent?: number;
  style?: CSSProperties;
}

export default function HomeHeader({ percent, style }: Props) {
  return (
    <HStack justifyContent="space-between" style={style}>
      <div style={{ width: '200px' }}>
        <Progress percent={percent} />
      </div>
      <Avatar size="large" icon={<UserOutlined />} />
    </HStack>
  );
}
