import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome'


const AppImagePicker:React.FC<{onPress:()=>void}> = ({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{height:70, backgroundColor:'#FFF', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <Icon name='cloud-upload' size={35}/>
             <Text>Upload the Picture</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppImagePicker;