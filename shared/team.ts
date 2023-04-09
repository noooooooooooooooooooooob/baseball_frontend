interface Team {
  label: string;
  value: string;
}

export const teamData: Team[] = [
  {
    label: '두산 베어스',
    value: '두산 베어스',
  },
  {
    label: 'LG 트윈스',
    value: 'LG 트윈스',
  },
  {
    label: '키움 히어로즈',
    value: '키움 히어로즈',
  },
  {
    label: 'SSG 랜더스',
    value: 'SSG 랜더스',
  },
  {
    label: 'KT 위즈',
    value: 'KT 위즈',
  },
  {
    label: '한화 이글스',
    value: '한화 이글스',
  },
  {
    label: '롯데 자이언츠',
    value: '롯데 자이언츠',
  },
  {
    label: '삼성 라이온즈',
    value: '삼성 라이온즈',
  },
  {
    label: 'KIA 타이거즈',
    value: 'KIA 타이거즈',
  },
  {
    label: 'NC 다이노스',
    value: 'NC 다이노스',
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
