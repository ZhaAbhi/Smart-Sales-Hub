import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  Pressable,
} from 'react-native';
import CalendarPicker from "react-native-calendar-picker";
import AppButton from './AppButton';

const DatePicker = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={{flex:1}}>
   <TouchableOpacity activeOpacity={0.8} onPress={()=>setModalVisible(true)}>
    <View style={{ margin:12, borderWidth:1, padding:8,  borderRadius:25, borderColor:'#fff', justifyContent:'center', alignItems:'center'}}>
     <Text style={{color:'#fff', fontSize:12, letterSpacing:1.5}}>2024/08/09 - 2025/08/10</Text>
    </View>
   </TouchableOpacity>
    <Modal
    animationType='slide'
    visible={modalVisible}
    transparent={true}
    onRequestClose={()=>setModalVisible(!modalVisible)}
  >
    <View style={{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }}>
      <View style={{backgroundColor:'#FFF', padding:10, margin:30, borderRadius:15}}>
   <CalendarPicker selectedDayStyle={{backgroundColor:'#D3B683'}} />
     <View style={{ alignSelf:'center'}} >
      <AppButton text="close" onPress={()=>setModalVisible(false)} buttonStyle={{paddingRight:40, paddingLeft:40}}/>
     </View>
      </View>
 
    </View>
  </Modal>
    </View>

  );
};


export default DatePicker;