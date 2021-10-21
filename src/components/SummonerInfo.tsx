import React, { useContext, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import { baseURL } from '../api/dataDragonApi';
import { Summoner } from '../interfaces/Summoner';

interface Props {
    summoner: Summoner
}

export const SummonerInfo = ({ summoner }: Props) => {
    return (
        <View style={styles.summonerContainer}>
            <Image
                style={styles.profileIcon}
                source={{ uri: `${baseURL}/image/profileicon/${summoner.profileIconId}.png` }}
            />

            {/* Summoner info */}
            <View style={styles.summonerInfoContainer}>
                <Text style={{ ...styles.label, fontWeight: 'bold' }}>{summoner.name}</Text>
                <Text style={styles.label}>{summoner.summonerLevel}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    summonerContainer: {
        height: 'auto',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 1,
    },
    summonerInfoContainer: {
        flex: 1,
        height: 100,
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
    },
    label: {
        fontSize: 20,
        color: 'black',
    }
})
