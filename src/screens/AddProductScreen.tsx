import React, {memo} from 'react';
import {View, Text} from 'react-native';
import ActionButton from '../components/ActionButton';
import DropDownPicker from '../components/DropDownPicker';
import AppImagePicker from '../components/AppImagePicker';

const AddProductScreen: React.FC =()=>{
    return(
        <View style={{flex:1}}>
       {/* <DropDownPicker/> */}
       <AppImagePicker/>
        </View>
    )
}

export default memo(AddProductScreen);