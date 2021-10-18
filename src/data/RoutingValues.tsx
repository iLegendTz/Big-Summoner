import { Server } from "../interfaces/Summoner";

// The AMERICAS routing value serves NA, BR, LAN, LAS, and OCE. The ASIA routing value serves KR and JP. The EUROPE routing value serves EUNE, EUW, TR, and RU.

export const routingValues: Server[] = [
    { platformRouting: { platform: 'BR1', host: 'https://br1.api.riotgames.com', prefix: 'BR' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'EUN1', host: 'https://eun1.api.riotgames.com', prefix: 'EUN' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'EUW1', host: 'https://euw1.api.riotgames.com', prefix: 'EUW' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'JP1', host: 'https://jp1.api.riotgames.com', prefix: 'JP' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'KR', host: 'https://kr.api.riotgames.com', prefix: 'KR' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'LA1', host: 'https://la1.api.riotgames.com', prefix: 'LAN' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'LA2', host: 'https://la2.api.riotgames.com', prefix: 'LAS' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'NA1', host: 'https://na1.api.riotgames.com', prefix: 'NA' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'OC1', host: 'https://oc1.api.riotgames.com', prefix: 'OC' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'TR1', host: 'https://tr1.api.riotgames.com', prefix: 'TR' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
    { platformRouting: { platform: 'RU', host: 'https://ru.api.riotgames.com', prefix: 'RU' }, regionalRouting: { region: 'AMERICAS', host: 'https://americas.api.riotgames.com' } },
]