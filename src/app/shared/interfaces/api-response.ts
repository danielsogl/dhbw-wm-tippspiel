export interface Stadium {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
  image: string;
}

export interface TvChannel {
  id: number;
  name: string;
  icon: string;
  country: string;
  iso2: string;
  lang: string[];
}

export interface Team {
  id: number;
  name: string;
  fifaCode: string;
  iso2: string;
  flag: string;
  emoji: string;
  emojiString: string;
}

export interface Match {
  name: number;
  type: string;
  home_team: number;
  away_team: number;
  home_result?: any;
  away_result?: any;
  date: Date;
  stadium: number;
  channels: number[];
  finished: boolean;
  matchday: number;
}

export interface Group {
  name: string;
  winner?: any;
  runnerup?: any;
  matches: Match[];
}

export interface Groups {
  a: Group;
  b: Group;
  c: Group;
  d: Group;
  e: Group;
  f: Group;
  g: Group;
  h: Group;
}

export interface Round {
  name: string;
  matches: Match[];
}

export interface Knockout {
  round_16: Round;
  round_8: Round;
  round_4: Round;
  round_2_loser: Round;
  round_2: Round;
}

export interface ApiResponse {
  stadiums: Stadium[];
  tvchannels: TvChannel[];
  teams: Team[];
  groups: Groups;
  knockout: Knockout;
}
