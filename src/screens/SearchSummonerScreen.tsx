import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Touchable, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';

import { SummonerContext } from '../context/SummonerContext';
import { styles, lightTheme } from '../themes/appTheme';
import { useForm } from '../hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';
import { Server } from '../interfaces/Summoner';
import { routingValues } from '../data/RoutingValues';

interface Props extends StackScreenProps<any, any> { }

export const SearchSummonerScreen = ({ navigation }: Props) => {
    const { searchSummonerByName } = useContext(SummonerContext);

    const [platformRoutingHost, setPlatformRoutingHost] = useState('https://la1.api.riotgames.com');

    const { summonerName, onChange } = useForm({
        summonerName: 'chibilily',
        server: ''
    });

    const onSearch = () => {
        routingValues.map((obj: Server) => {
            if (obj.platformRouting.host === platformRoutingHost) {
                searchSummonerByName(summonerName, obj);
            }
        });
        Keyboard.dismiss();
        navigation.navigate('MatchesScreen');
    }

    return (
        <KeyboardAvoidingView
            style={{ ...styles.container, backgroundColor: lightTheme.colors.background }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                }}>
                    <TextInput
                        placeholder="Summonername"
                        placeholderTextColor={lightTheme.colors.onBackground}
                        style={loginStyles.inputField}
                        selectionColor="black"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onChange(text, 'summonerName')}
                        value={summonerName}
                    />
                    <View style={{ borderRadius: 25, overflow: 'hidden', borderWidth: 1, }}>
                        <Picker
                            selectedValue={platformRoutingHost}
                            onValueChange={(itemValue) => {
                                onChange(itemValue, 'server');
                                setPlatformRoutingHost(itemValue);
                            }}
                            style={loginStyles.picker}>
                            {
                                routingValues.map(({ platformRouting: { host, platform, prefix } }) => (
                                    <Picker.Item key={platform} label={prefix} value={host} />
                                ))
                            }

                        </Picker>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={() => onSearch()}
                    >
                        <Text style={loginStyles.textButton}>Buscar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

const loginStyles = StyleSheet.create({
    inputField: {
        color: lightTheme.colors.onBackground,
        backgroundColor: lightTheme.colors.background,
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
        marginBottom: 20,

        elevation: 2,
    },
    picker: {
        color: lightTheme.colors.onSurface,
        backgroundColor: lightTheme.colors.surface,
        marginTop: 5,
    },
    button: {
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: lightTheme.colors.primary,
    },
    textButton: {
        color: lightTheme.colors.onPrimary,
        fontSize: 20,
        margin: 10,
        padding: 2,
    }
})
