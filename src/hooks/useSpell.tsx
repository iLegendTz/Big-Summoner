import { useState } from "react"
import dataDragon from "../api/dataDragonApi";
import { Spell } from '../interfaces/Spell';

export const useSpell = () => {
    const [spell, setSpell] = useState<Spell>();

    const loadSpell = async (key: number) => {
        await dataDragon.get<Spell>(`/spell/${key}`)
            .then(resp => {
                setSpell(resp.data);
            })
            .catch(error => console.log(error));
    }

    return {
        spell,
        loadSpell
    }
}