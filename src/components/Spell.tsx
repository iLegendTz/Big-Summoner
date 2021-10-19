import React, { useEffect } from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import { baseURL } from '../api/dataDragonApi';
import { useSpell } from '../hooks/useSpell';

interface Props {
    spellKey: number,
    style?: StyleProp<ImageStyle>;
}

export const Spell = ({ spellKey, style = styles.spell }: Props) => {

    const { spell, loadSpell } = useSpell();

    useEffect(() => {
        loadSpell(spellKey);
    }, [])

    return (
        (spell != undefined)
            ?
            < Image
                style={style as any}
                source={{ uri: `${baseURL}/image/spell/${spell.image.full}` }
                }
            />
            :
            <View style={{ ...style as any }}></View>
    )
}

const styles = StyleSheet.create({
    spell: {
        width: 25,
        height: 25,
        backgroundColor: 'grey',
        marginRight: 2.5,
        borderRadius: 2,
    }
})
