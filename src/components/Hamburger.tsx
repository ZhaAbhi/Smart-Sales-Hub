import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const HamburgerMenu:React.FC=()=>{
    return(
         <TouchableOpacity>
            <View style={[ styles.menu, {width:30}]}></View>
            <View style={[ styles.menu, {width:35}]}></View>
            <View style={[ styles.menu, {width:20}]}></View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    menu:{
     borderColor:'#D3B683',
     marginVertical:'6%', 
     borderWidth:1.4, 
     borderRadius:25
    }
})

export default HamburgerMenu