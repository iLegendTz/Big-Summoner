import { useEffect, useState } from "react"
import riotApi from "../api/riotApi";
import { addBaseUrlToApi } from '../api/riotApi';
import { MatchResponse } from "../interfaces/Match";
import { Server } from "../interfaces/Summoner";

export const useMatches = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [matchesList, setMatchesList] = useState<MatchResponse[]>([])

    const loadMatches = async (puuid: string, server: Server) => {
        const count = 2;
        setIsLoading(true);
        addBaseUrlToApi(server.regionalRouting.host)
        await riotApi.get<string[]>(`/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}`)
            .then(resp => {
                mapMatchesListToMatch(resp.data);
            })
            .catch(error => console.log(error));
    }

    const mapMatchesListToMatch = async (matchesIdList: string[]) => {
        setMatchesList([])
        for (const matchId of matchesIdList) {
            await riotApi.get<MatchResponse>(`/lol/match/v5/matches/${matchId}`)
                .then((resp) => { setMatchesList((old) => [...old, resp.data]); })
                .catch((error) => console.log(error))
        }
        setIsLoading(false);
    }

    return {
        isLoading,
        matchesList,
        setIsLoading,
        loadMatches,
    }
}