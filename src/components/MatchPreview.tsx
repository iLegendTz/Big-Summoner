import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import { baseURL } from '../api/dataDragonApi';
import { Spell } from './Spell';
import { Item } from './Item';
import { Rune } from './Rune';
import { Summoner } from '../interfaces/Summoner';
import { MatchResponse, Participant } from '../interfaces/Match';
import { lightTheme } from '../themes/appTheme';

interface Props {
    summoner: Summoner;
    match: MatchResponse;
}

export const MatchPreview = ({ match, summoner }: Props) => {
    const [participant, setParticipant] = useState<Participant>();


    useEffect(() => {
        match.info.participants.map((value) => {
            if (value.summonerId === summoner.id) {
                setParticipant(value);
            }
        })
    }, []);

    return (
        (participant !== undefined)
            ?
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.container}
                onPress={() => { console.log(match.info.gameId) }}
            >
                <View style={{ flexDirection: 'row' }}>
                    {/* Champion image */}
                    <Image
                        style={styles.champIcon}
                        source={{ uri: `${baseURL}/image/champion/${participant.championName}.png` }}
                    />
                    {/* Spells & Runes */}
                    <View style={{ marginHorizontal: 4, flexDirection: 'row' }}>
                        {/* Spells */}
                        <View>
                            <Spell spellKey={participant.summoner1Id} />
                            <Spell spellKey={participant.summoner2Id} />
                        </View>
                        {/* Runes */}
                        <View>
                            <Rune runeId={participant.perks.styles[0].style} />
                            <Rune runeId={participant.perks.styles[1].style} />
                        </View>
                    </View>

                    {/* KDA */}
                    <Text style={{ ...styles.label, marginLeft: 10 }}>
                        {participant.kills}/{participant.deaths}/{participant.assists}
                    </Text>
                </View>
                {/* Items */}
                <FlatList
                    horizontal
                    data={[
                        participant.item0,
                        participant.item1,
                        participant.item2,
                        participant.item3,
                        participant.item4,
                        participant.item5,
                        participant.item6]}
                    renderItem={({ item }) => (<Item itemId={item} />)} />
            </TouchableOpacity>

            :
            <ActivityIndicator
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                size={80}
            />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        shadowColor: lightTheme.colors.onSurface,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },
    champIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    label: {
        fontSize: 15,
        color: lightTheme.colors.onSurface
    }
});
