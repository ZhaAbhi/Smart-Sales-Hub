import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import {launchImageLibrary} from 'react-native-image-picker';


const AppImagePicker:React.FC= ()=>{
    const handleImagePicker = async()=>{
        const result = await launchImageLibrary({
            mediaType:'photo'
        })
        if(result.didCancel || result.errorCode || result.errorMessage){
            return;
        }
        if(result.assets){
          console.log(result.assets)
        }
    }
    return(
        <TouchableOpacity onPress={handleImagePicker} activeOpacity={0.8} style={{height:70, backgroundColor:'#FFF', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
            <Icon name='cloud-upload' size={35}/>
             <Text>Upload the Picture</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppImagePicker;