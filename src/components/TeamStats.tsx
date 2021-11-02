import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Team } from '../interfaces/Match';
import { lightTheme } from '../themes/appTheme';

interface Props {
    team: Team
}

export const TeamStats = ({ team: { objectives: { champion, tower, dragon, riftHerald, baron } } }: Props) => {
    return (
        <View style={{ flex: 0.5, justifyContent: 'space-between', flexDirection: 'row' }}>
            {/* Kills */}
            <Text style={{ ...styles.label }}>{champion.kills}</Text>
            {/* Torres */}
            <Text style={{ ...styles.label }}>{tower.kills}</Text>
            {/* Dragones */}
            <Text style={{ ...styles.label }}>{dragon.kills}</Text>
            {/* Heraldos */}
            <Text style={{ ...styles.label }}>{riftHerald.kills}</Text>
            {/* Barones */}
            <Text style={{ ...styles.label }}>{baron.kills}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        color: lightTheme.colors.onSurface,
    },
});