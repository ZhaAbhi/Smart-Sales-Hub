import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HamburgerMenu from '../components/Hamburger';
import SalesChart from '../components/SalesChart';
import DashboardHeader from '../components/DashboardHeader';
import WaveCard from '../components/WaveCard';
import DatePicker from '../components/DatePicker';
import ActivityCard from '../components/ActivityCard';

const DashboardScreen: React.FC=()=>{
    return(
        <View style={{flex:1, backgroundColor:'#192841'}}>
        <View style={{padding:20}}>
            <DashboardHeader/>
            <SalesChart/>
            <View>
             <DatePicker/>
            </View>
            <WaveCard title="total customer visits" value={5000} iconName='group' date="2024/08/11"/>
            <WaveCard title="total sales" value={`${50}K`} iconName='rupee'  date="2024/10/11"/>
             <ActivityCard/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default DashboardScreen;