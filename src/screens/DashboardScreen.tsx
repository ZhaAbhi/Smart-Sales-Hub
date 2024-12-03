import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HamburgerMenu from '../components/Hamburger';
import SalesChart from '../components/SalesChart';
import DashboardHeader from '../components/DashboardHeader';

const DashboardScreen: React.FC=()=>{
    return(
        <View style={{flex:1, backgroundColor:'#192841'}}>
        <View style={{padding:20}}>
            <DashboardHeader/>
            <SalesChart/>
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

export default DashboardScreen;