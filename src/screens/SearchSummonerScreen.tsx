import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Touchable, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';

import { SummonerContext } from '../context/SummonerContext';
import { styles } from '../themes/appTheme';
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
        navigation.navigate('SummonerMatchesScreen');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                }}>
                    <TextInput
                        placeholder="Summonername"
                        placeholderTextColor="rgba(0,0,0,0.3)"
                        underlineColorAndroid="rgba(0,0,0,0.1)"
                        style={loginStyles.inputField}
                        selectionColor="black"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onChange(text, 'summonerName')}
                        value={summonerName}
                    />

                    <Picker
                        selectedValue={platformRoutingHost}
                        onValueChange={(itemValue) => {
                            onChange(itemValue, 'server');
                            setPlatformRoutingHost(itemValue);
                        }}>
                        {
                            routingValues.map(({ platformRouting: { host, platform, prefix } }) => (
                                <Picker.Item key={platform} label={prefix} value={host} />
                            ))
                        }

                    </Picker>

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
        color: 'black',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "rgba(210,42,55,0.8)",
        borderColor: "rgb(210,42,55)",
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        margin: 10,
    }
})
