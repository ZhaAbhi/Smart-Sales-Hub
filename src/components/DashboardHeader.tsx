import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HamburgerMenu from './Hamburger';

const DashboardHeader:React.FC=()=>{
    return(
        <View style={styles.header}>
              <HamburgerMenu/>
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