import React, { useEffect } from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import { baseURL } from '../api/dataDragonApi';
import { useRune } from '../hooks/useRune';

interface Props {
    runeId: number,
    style?: StyleProp<ImageStyle>;
}

export const Rune = ({ runeId, style = styles.rune }: Props) => {
    const { rune, loadRune } = useRune();

    useEffect(() => {
        loadRune(runeId);
    }, [])

    return (
        (rune != undefined)
            ?
            < Image
                style={style as any}
                source={{ uri: `${baseURL}/image/rune/${rune.icon}` }
                }
            />
            :
            <View style={{ ...style as any }}></View>
    )
}

const styles = StyleSheet.create({
    rune: {
        width: 25,
        height: 25,
        backgroundColor: 'black',
        marginRight: 2.5,
        borderRadius: 50,
    }
})