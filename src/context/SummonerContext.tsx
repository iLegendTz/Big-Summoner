import React, { createContext, useReducer } from "react";
import riotApi, { addBaseUrlToApi } from "../api/riotApi";
import { Server, Summoner } from "../interfaces/Summoner";

import { SummonerState, summonerReducer } from './summonerReducer';

type SummonerContextProps = {
    summoner: Summoner | null;
    server: Server | null;
    errorMessage: string;
    status: 'checking' | 'authenticated' | 'not-authenticated',

    searchSummonerByName: (summonerName: string, server: Server) => void;
    removeSummoner: () => void;
}

const summonerInitialState: SummonerState = {
    summoner: null,
    server: null,
    errorMessage: '',
    status: 'not-authenticated'
}

export const SummonerContext = createContext({} as SummonerContextProps);

export const SummonerProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(summonerReducer, summonerInitialState);

    const searchSummonerByName = async (summonerName: string, server: Server) => {
        try {
            addBaseUrlToApi(server.platformRouting.host);
            const resp = await riotApi.get<Summoner>(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
            dispatch({ type: 'addSummoner', payload: { summoner: resp.data, server } });
        } catch (error) {
            console.log({ error });
        }
    }

    const removeSummoner = () => {
        dispatch({ type: 'removeSummoner' });
    }

    return (
        <SummonerContext.Provider value={{
            ...state,
            searchSummonerByName,
            removeSummoner,
        }}>
            {children}
        </SummonerContext.Provider>
    )
}