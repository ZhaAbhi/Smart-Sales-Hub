import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/BottomNavigator';
import 'react-native-gesture-handler'
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App: React.FC=()=>{
  return(
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App;