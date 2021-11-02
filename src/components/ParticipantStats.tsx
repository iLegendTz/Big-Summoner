import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { baseURL } from '../api/dataDragonApi';
import { SummonerContext } from '../context/SummonerContext';
import { Participant } from '../interfaces/Match';
import { lightTheme } from '../themes/appTheme';
import { Item } from './Item';
import { Rune } from './Rune';
import { Spell } from './Spell';

interface Props {
    participant: Participant
}

export const ParticipantStats = ({ participant }: Props) => {
    const { summoner } = useContext(SummonerContext)

    return (
        <View style={[styles.container, (summoner?.id === participant.summonerId) ? styles.highlight : { backgroundColor: lightTheme.colors.surface }]}>
            {/* Champion image */}
            < Image
                style={styles.champIcon}
                source={{ uri: `${baseURL}/image/champion/${participant.championName}.png` }}
            />
            {/* Spells & Runes */}
            <View style={{ marginHorizontal: 4, flexDirection: 'row' }}>
                {/* Spells */}
                <View>
                    <Spell spellKey={participant.summoner1Id} width={18} height={18} />
                    <Spell spellKey={participant.summoner2Id} width={18} height={18} />
                </View>
                {/* Runes */}
                <View>
                    <Rune runeId={participant.perks.styles[0].style} width={18} height={18} />
                    <Rune runeId={participant.perks.styles[1].style} width={18} height={18} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    {/* SummonerName */}
                    <Text style={{ ...styles.label, marginRight: 4 }}>{participant.summonerName}</Text>

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
                        renderItem={({ item }) => (<Item itemId={item} width={18} height={18} />)} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {/* KDA */}
                    <Text style={{ ...styles.label, marginTop: 5 }}>
                        {participant.kills} /{participant.deaths}/{participant.assists}
                    </Text>

                    <Text style={{ ...styles.label, marginTop: 5 }}>
                        {participant.totalMinionsKilled}
                    </Text>

                    <Text style={{ ...styles.label, marginTop: 5 }}>
                        {participant.goldEarned}
                    </Text>
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        padding: 5
    },
    champIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginBottom: 5,
    },
    label: {
        lineHeight: 13,
        fontSize: 13,
        color: lightTheme.colors.onSurface
    },
    highlight: {
        backgroundColor: 'rgba(112,0,171,0.2)'
    }
});
