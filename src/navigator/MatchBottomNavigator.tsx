import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScoreboardScreen } from '../screens/ScoreboardScreen';
import { MatchResponse } from '../interfaces/Match';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from './Navigator';

export type MatchBottomStackParams = {
    ScoreboardScreen: { match: MatchResponse },
}
interface Props extends StackScreenProps<RootStackParams, 'MatchBottomNavigator'> { }

const Tab = createBottomTabNavigator<MatchBottomStackParams>();


export const MatchBottomNavigator = ({ route }: Props) => {
    const { match } = route.params;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="ScoreboardScreen" component={ScoreboardScreen} initialParams={{ match }} />
        </Tab.Navigator>
    )
}
