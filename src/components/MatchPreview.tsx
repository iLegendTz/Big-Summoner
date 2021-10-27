import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import { baseURL } from '../api/dataDragonApi';
import { Spell } from './Spell';
import { Item } from './Item';
import { Rune } from './Rune';
import { Summoner } from '../interfaces/Summoner';
import { MatchResponse, Participant } from '../interfaces/Match';
import { lightTheme } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'MatchesScreen'> {
    summoner: Summoner;
    match: MatchResponse;
}

export const MatchPreview = ({ match, summoner, navigation }: Props) => {
    const [participant, setParticipant] = useState<Participant>();

    const [matchCreationDate, setMatchCreationDate] = useState("");

    useEffect(() => {
        const date = new Date(match.info.gameEndTimestamp);
        setMatchCreationDate(date.toLocaleDateString());
    }, [])

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
                onPress={() => { navigation.navigate('MatchScreen', { match: match }) }}
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

                    {/* Win */}
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ ...styles.label }}>{(participant.win) ? "Victory" : "Lose"}</Text>
                        <Text style={styles.label}>{matchCreationDate}</Text>
                    </View>

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
