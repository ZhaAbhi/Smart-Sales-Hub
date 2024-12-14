import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HamburgerMenu from './Hamburger';
import { useNavigation } from '@react-navigation/native';

const DashboardHeader:React.FC=()=>{
    const navigation = useNavigation()
    return(
        <View style={styles.header}>
              <HamburgerMenu onPress={()=>navigation.openDrawer()}/>
                <View>
                    <Text style={styles.dashboard}>Dashboard</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
     header:{
     flexDirection:'row', 
     justifyContent:'space-between',
     alignItems:'center'
    },
    dashboard:{
     fontSize:25,
     color:'#D3B683',
     letterSpacing:1.5,
    }
})

export default DashboardHeader;