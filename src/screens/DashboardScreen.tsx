import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HamburgerMenu from '../components/Hamburger';
import SalesChart from '../components/SalesChart';
import DashboardHeader from '../components/DashboardHeader';
import WaveCard from '../components/WaveCard';
import DatePicker from '../components/DatePicker';
import ActivityCard from '../components/ActivityCard';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen: React.FC=()=>{
    const {navigate} = useNavigation();
    const navigation = useNavigation()
    return(
        <View style={{flex:1, backgroundColor:'#192841'}}>
        <View style={{padding:20}}>
            <DashboardHeader/>
            <SalesChart/>
            <View style={{flexDirection:'row',  alignItems:'center', paddingLeft:10, paddingRight:10}}>
             <DatePicker/>
             <AppButton text="Apply Filter"/>
            </View>
            <WaveCard title="total customer visits" value={5000} iconName='group' date="2024/08/11"/>
            <WaveCard title="total sales" value={`${50}K`} iconName='rupee'  date="2024/10/11"/>
            <Text style={{color:'lightgrey', fontWeight:'condensedBold', fontSize:16, marginTop:20}}>Today Activities</Text>
            {/* TODO: Replace with the actual data */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <ActivityCard onPress={()=>navigate('Product')} iconName="file-circle-plus" item="added" date="3 min ago" itemCount="20"/>
               <ActivityCard onPress={()=>navigate('Product')} iconName="user-group" item="visit" date="2 min ago" itemCount="18"/>
                 <ActivityCard onPress={()=>navigate('Product')} iconName="indian-rupee-sign" item="item" date="1 min ago" itemCount="6"/>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default DashboardScreen;