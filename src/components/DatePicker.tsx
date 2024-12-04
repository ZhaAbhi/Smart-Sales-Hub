import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  Platform
} from 'react-native';

const DatePicker = () => {
  return (
   <TouchableOpacity activeOpacity={0.8} style={{ flex:1}}>
    <View style={{ margin:12, borderWidth:1, padding:8,  borderRadius:25, borderColor:'#fff', justifyContent:'center', alignItems:'center'}}>
     <Text style={{color:'#fff', fontSize:12, letterSpacing:1.5}}>2024/08/09 - 2025/08/10</Text>
    </View>
   </TouchableOpacity>
  );
};


export default DatePicker;