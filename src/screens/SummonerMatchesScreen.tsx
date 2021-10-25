import React, { useContext, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Image, Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';

import { MatchPreview } from '../components/MatchPreview';
import { SummonerInfo } from '../components/SummonerInfo';
import { SummonerContext } from '../context/SummonerContext';
import { useMatches } from '../hooks/useMatches';
import { styles as stylesGlobal, lightTheme } from '../themes/appTheme';


export const SummonerMatchesScreen = () => {
    const { summoner, server, removeSummoner } = useContext(SummonerContext);

    const { isLoading, loadMatches, matchesList } = useMatches();

    const searchMatches = async () => {
        if (summoner !== null && server != null) {
            await loadMatches(summoner.puuid, server);
        }
    }

    useEffect(() => {
        searchMatches();
    }, [summoner, server]);

    useEffect(() => {
        return () => {
            removeSummoner();
        }
    }, [])

    return (
        (isLoading == false && summoner != null)
            ?
            <>
                <SummonerInfo summoner={summoner} />

                <View style={stylesGlobal.container}>
                    {/* Matches */}
                    <FlatList
                        data={matchesList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            < MatchPreview match={item} summoner={summoner} />
                        )}
                        keyExtractor={(item) => item.info.gameId.toString()}

                        ItemSeparatorComponent={() => (
                            <View
                                style={{
                                    flex: 1,
                                    height: 1,
                                    backgroundColor: lightTheme.colors.onSurface,
                                    marginVertical: 10,
                                }}
                            />)}

                        ListFooterComponent={() => (
                            <View style={{ paddingBottom: 20 }} />
                        )}
                    />
                </View>
            </>
            :
            <ActivityIndicator
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                size={40}
            />
    )
}
