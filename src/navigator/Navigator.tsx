import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchSummonerScreen } from '../screens/SearchSummonerScreen';
import { SummonerMatchesScreen } from '../screens/SummonerMatchesScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="SearchSummonerScreen" component={SearchSummonerScreen} />
            <Stack.Screen name="SummonerMatchesScreen" component={SummonerMatchesScreen} />
        </Stack.Navigator>
    )
}
