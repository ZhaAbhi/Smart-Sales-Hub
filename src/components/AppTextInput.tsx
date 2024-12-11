import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const AppTextInput:React.FC<{placeholder: string, onChangeText:()=>void, value: string, keyboardType: any, multiline: boolean}> = ({placeholder, onChangeText, value, keyboardType, multiline})=>{
    return(
    <TextInput 
    value={value} 
    onChangeText={onChangeText} 
    placeholderTextColor={'grey'} 
    placeholder={placeholder}
    keyboardType={keyboardType}
    multiline={multiline}
    style={{height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:25,
    marginVertical:20,
    borderColor:'#192841',
    color:'#000'
    }}/>
    )
}

export default AppTextInput;