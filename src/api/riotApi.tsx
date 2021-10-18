import axios from "axios";

const riotApi = axios.create({
    headers: { ['X-Riot-Token']: 'ENTER YOUR RIOT API KEY' }
});

export const addBaseUrlToApi = (uri: string) => {
    riotApi.defaults.baseURL = uri;
}

export default riotApi;