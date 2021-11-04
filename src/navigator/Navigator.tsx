import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchSummonerScreen } from '../screens/SearchSummonerScreen';
import { MatchesScreen } from '../screens/MatchesScreen';
import { lightTheme } from '../themes/appTheme';
import { MatchResponse } from '../interfaces/Match';
import { ScoreboardScreen } from '../screens/ScoreboardScreen';
import { MatchBottomNavigator } from './MatchBottomNavigator';

export type RootStackParams = {
    SearchSummonerScreen: undefined,
    MatchBottomNavigator: { match: MatchResponse },
    MatchesScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: lightTheme.colors.background }
            }}
            initialRouteName="SearchSummonerScreen"
        >
            <Stack.Screen name="SearchSummonerScreen" component={SearchSummonerScreen} />
            <Stack.Screen name="MatchBottomNavigator" component={MatchBottomNavigator} />
            <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
        </Stack.Navigator>
    )
}
