import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const AppTextInput:React.FC = ()=>{
    return(
    <TextInput  placeholderTextColor={'lightgrey'} placeholder='Product name' style={{height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:25,
    marginVertical:20,
    borderColor:'#D3B683',
    color:'#FFFF'
    }}/>
    )
}

export default AppTextInput;