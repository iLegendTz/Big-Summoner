import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchSummonerScreen } from '../screens/SearchSummonerScreen';
import { MatchesScreen } from '../screens/MatchesScreen';
import { lightTheme } from '../themes/appTheme';
import { MatchResponse } from '../interfaces/Match';
import { MatchScreen } from '../screens/MatchScreen';

export type RootStackParams = {
    SearchSummonerScreen: undefined,
    MatchesScreen: undefined,
    MatchScreen: { match: MatchResponse }
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
            <Stack.Screen name="MatchScreen" component={MatchScreen} />
            <Stack.Screen name="SearchSummonerScreen" component={SearchSummonerScreen} />
            <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
        </Stack.Navigator>
    )
}
