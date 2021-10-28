import React, { useEffect } from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import { baseURL } from '../api/dataDragonApi';
import { useRune } from '../hooks/useRune';
import { lightTheme } from '../themes/appTheme';

interface Props {
    runeId: number,
    width?: number,
    height?: number,
}

export const Rune = ({ runeId, width = 25, height = 25 }: Props) => {
    const { rune, loadRune } = useRune();

    useEffect(() => {
        loadRune(runeId);
    }, [])

    return (
        (rune != undefined)
            ?
            < Image
                style={{ ...styles.rune, width, height }}
                source={{ uri: `${baseURL}/image/rune/${rune.icon}` }
                }
            />
            :
            <View style={{ ...styles.rune, width, height }}></View>
    )
}

const styles = StyleSheet.create({
    rune: {
        backgroundColor: lightTheme.colors.onBackground,
        marginRight: 2.5,
        borderRadius: 50,
        marginBottom: 2.5,
    }
})