import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const AppButton: React.FC = ({text})=>{
    return(
        <TouchableOpacity activeOpacity={0.8} style={{height:35,  paddingLeft:10, paddingRight:10, backgroundColor:'#bf954b' , borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:13, fontWeight:'bold', letterSpacing:0.8, color:'#fff'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;