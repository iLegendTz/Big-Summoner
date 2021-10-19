import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { baseURL } from '../api/dataDragonApi'

interface Props {
    itemId: number,
    style?: StyleProp<ImageStyle>;
}

export const Item = ({ itemId, style = styles.item }: Props) => {
    return (
        <Image
            style={style}
            source={{ uri: `${baseURL}/image/item/${itemId}.png` }}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        width: 30,
        height: 30,
        backgroundColor: 'grey',
        marginRight: 2.5,
        borderRadius: 2,
    }
})