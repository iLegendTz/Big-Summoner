import { useState } from "react"
import dataDragon from "../api/dataDragonApi";
import { Rune } from '../interfaces/Rune';

export const useRune = () => {
    const [rune, setRune] = useState<Rune>()

    const loadRune = async (id: number) => {
        await dataDragon.get<Rune>(`rune/${id}`)
            .then(resp => {
                setRune(resp.data)
            })
            .catch(error => console.log(error));
    }

    return {
        rune,
        loadRune
    }
}