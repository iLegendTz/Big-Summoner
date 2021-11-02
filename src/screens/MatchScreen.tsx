import React, { useContext } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';
import { lightTheme, styles as stylesGlobal } from '../themes/appTheme';
import { ParticipantStats } from '../components/ParticipantStats';
import { TeamStats } from '../components/TeamStats';
import { Participant, Team } from '../interfaces/Match';
import { SummonerContext } from '../context/SummonerContext';
import { Summoner } from '../interfaces/Summoner';

interface Props extends StackScreenProps<RootStackParams, 'MatchScreen'> { }

export const MatchScreen = ({ route }: Props) => {
    const { match } = route.params;

    const teamsIds = {
        BLUE: 100,
        RED: 200,
    }

    const blueTeamParticipants: Participant[] = match.info.participants.filter((p) => { return p.teamId == teamsIds.BLUE });
    const redTeamParticipants: Participant[] = match.info.participants.filter((p) => { return p.teamId == teamsIds.RED });

    const blueTeamFinalStats: Team = match.info.teams.filter((t) => { return t.teamId == teamsIds.BLUE })[0];
    const redTeamFinalStats: Team = match.info.teams.filter((t) => { return t.teamId == teamsIds.RED })[0];

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ ...stylesGlobal.container, ...styles.participantsContainer }}>
            {/* Blue Team Stats */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...styles.title, color: 'blue', flex: 0.5 }}>BLUE TEAM</Text>

                <TeamStats team={blueTeamFinalStats} />
            </View>
            {/* Blue Team Participants */}
            {blueTeamParticipants.map((p) => {
                return (
                    <ParticipantStats key={p.summonerId} participant={p} />
                )
            })}

            {/* Red Team Stats */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...styles.title, color: 'red', flex: 0.5 }}>RED TEAM</Text>

                <TeamStats team={redTeamFinalStats} />
            </View>
            {/* Red Team Participants */}
            {redTeamParticipants.map((p) => {
                return (
                    <ParticipantStats key={p.summonerId} participant={p} />
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        marginBottom: 5,

    },
    label: {
        fontSize: 14,
        color: lightTheme.colors.onSurface,
    },
    participantsContainer: {
        marginVertical: 10,
    }
});