import React, { useEffect } from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import { baseURL } from '../api/dataDragonApi';
import { useSpell } from '../hooks/useSpell';

interface Props {
    spellKey: number,
    width?: number,
    height?: number,
}

export const Spell = ({ spellKey, width = 25, height = 25 }: Props) => {

    const { spell, loadSpell } = useSpell();

    useEffect(() => {
        loadSpell(spellKey);
    }, [])

    return (
        (spell != undefined)
            ?
            < Image
                style={{ ...styles.spell, width, height }}
                source={{ uri: `${baseURL}/image/spell/${spell.image.full}` }
                }
            />
            :
            <View style={{ ...styles.spell, width, height }}></View>
    )
}

const styles = StyleSheet.create({
    spell: {
        backgroundColor: 'grey',
        marginRight: 2.5,
        borderRadius: 2,
        marginBottom: 2.5,
    }
})
