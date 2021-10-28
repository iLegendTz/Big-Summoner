import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { baseURL } from '../api/dataDragonApi'

interface Props {
    itemId: number,
    width?: number,
    height?: number,
}

export const Item = ({ itemId, width = 30, height = 30 }: Props) => {
    return (
        <Image
            style={{ ...styles.item, width, height }}
            source={{ uri: `${baseURL}/image/item/${itemId}.png` }}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'grey',
        marginRight: 2.5,
        borderRadius: 2,
    }
})