import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/BottomNavigator';
import 'react-native-gesture-handler'

const App: React.FC=()=>{
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App;