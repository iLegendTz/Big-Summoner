import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { Text, View, ScrollView } from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'MatchScreen'> { }

export const MatchScreen = ({ route }: Props) => {
    const { match } = route.params;
    return (
        <ScrollView>
            <Text>{JSON.stringify(match, null, 5)}</Text>
        </ScrollView>
    )
}
