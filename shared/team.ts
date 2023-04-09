interface Team {
  label: string;
  value: string;
}

export const teamData: Team[] = [
  {
    label: '두산 베어스',
    value: 'dusan',
  },
  {
    label: 'LG 트윈스',
    value: 'lg',
  },
  {
    label: '키움 히어로즈',
    value: 'kium',
  },
  {
    label: 'SSG 랜더스',
    value: 'ssg',
  },
  {
    label: 'KT 위즈',
    value: 'kt',
  },
  {
    label: '한화 이글스',
    value: 'hanhwa',
  },
  {
    label: '롯데 자이언츠',
    value: 'lotte',
  },
  {
    label: '삼성 라이온즈',
    value: 'samsung',
  },
  {
    label: 'KIA 타이거즈',
    value: 'kia',
  },
  {
    label: 'NC 다이노스',
    value: 'nc',
  },
];

interface MatchResult {
  result: string;
  score: number;
  team: string;
}

export interface Match {
  away: MatchResult;
  home: MatchResult;
  id: number;
  insertDate: string;
  matchDate: string;
  stadium: string;
  title: string;
}

interface MatchData {
  data: Match[];
  stats: {
    lose: number;
    win: number;
    odss: number;
    total: number;
  };
}

export interface MatchResponse {
  message: string;
  result: MatchData;
}
