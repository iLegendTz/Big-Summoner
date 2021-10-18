import { Summoner, Server } from "../interfaces/Summoner"

export interface SummonerState {
    summoner: Summoner | null;
    server: Server | null;
    errorMessage: string;
    status: 'checking' | 'authenticated' | 'not-authenticated';
}

type SummonerAction =
    | { type: 'addSummoner', payload: { summoner: Summoner, server: Server } }
    | { type: 'addServer', payload: Server }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'removeSummoner' }

export const summonerReducer = (state: SummonerState, action: SummonerAction): SummonerState => {
    switch (action.type) {
        case 'addSummoner':
            return {
                ...state,
                summoner: action.payload.summoner,
                server: action.payload.server,
                status: 'authenticated'
            }
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'removeSummoner':
            return {
                ...state,
                summoner: null,
                server: null,
                errorMessage: '',
                status: 'not-authenticated'
            }
        default:
            return state;
    }
}