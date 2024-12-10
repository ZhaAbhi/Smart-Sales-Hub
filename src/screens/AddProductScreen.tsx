import React, {memo} from 'react';
import {View, Text} from 'react-native';
import ActionButton from '../components/ActionButton';

const AddProductScreen: React.FC =()=>{
    return(
        <View style={{flex:1}}>
       <Text>This is the product to list in card</Text>
        </View>
    )
}

export default memo(AddProductScreen);