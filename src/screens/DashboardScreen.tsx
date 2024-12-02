import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HamburgerMenu from '../components/Hamburger';

const DashboardScreen: React.FC=()=>{
    return(
        <View style={{flex:1, padding:20}}>
            <View style={styles.header}>
              <HamburgerMenu/>
                <View>
                    <Text style={styles.dashboard}>Dashboard</Text>
                </View>
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
     color:'black',
     letterSpacing:1.5
    }
})

export default DashboardScreen;