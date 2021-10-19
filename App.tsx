import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { SummonerProvider } from './src/context/SummonerContext';
import { Navigator } from './src/navigator/Navigator';

const AppState = ({ children }: any) => {
  return (
    <SummonerProvider>
      {children}
    </SummonerProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
