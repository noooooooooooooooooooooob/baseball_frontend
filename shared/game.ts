export const gameData = [
  {
    id: '1',
    home: {
      title: '두산',
      score: 10,
      // logo
    },
    away: {
      title: 'NC',
      score: 8,
      // logo
    },
    date: '2022-01-01',
    place: '잠실',
  },
  {
    id: '2',
    home: {
      title: 'SK',
      score: 1,
      // logo
    },
    away: {
      title: '키움',
      score: 5,
      // logo
    },
    date: '2022-02-01',
    place: '잠실',
  },
  {
    id: '3',
    home: {
      title: '롯데',
      score: 9,
      // logo
    },
    away: {
      title: 'SSG',
      score: 5,
      // logo
    },
    date: '2022-03-01',
    place: '잠실',
  },
  {
    id: '4',
    home: {
      title: '롯데',
      score: 9,
      // logo
    },
    away: {
      title: 'SSG',
      score: 5,
      // logo
    },
    date: '2022-03-01',
    place: '잠실',
  },
  {
    id: '5',
    home: {
      title: '롯데',
      score: 9,
      // logo
    },
    away: {
      title: 'SSG',
      score: 5,
      // logo
    },
    date: '2022-03-01',
    place: '잠실',
  },
  {
    id: '6',
    home: {
      title: '롯데',
      score: 9,
      // logo
    },
    away: {
      title: 'SSG',
      score: 5,
      // logo
    },
    date: '2022-03-01',
    place: '잠실',
  },
  {
    id: '7',
    home: {
      title: '롯데',
      score: 9,
      // logo
    },
    away: {
      title: 'SSG',
      score: 5,
      // logo
    },
    date: '2022-03-01',
    place: '잠실',
  },
];

export interface GameResult {
  message: string;
  result: {
    away: {
      lineUp: string[];
      result: string;
      score: number;
      sp: string;
      team: string;
    };
    comment: string;
    home: {
      lineUp: string[];
      result: string;
      score: number;
      sp: string;
      team: string;
    };
    insertDate: string;
    matchData: string;
    staium: string;
    title: string;
  };
}
