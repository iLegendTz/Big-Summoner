// Generated by https://quicktype.io
export interface Summoner {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

export interface Server {
    platformRouting: PlatformRouting;
    regionalRouting: RegionalRouting;
}

export interface PlatformRouting {
    platform: string;
    host: string;
    prefix: string;
}

export interface RegionalRouting {
    region: string;
    host: string;
}