import React, {memo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ActionButton from '../components/ActionButton';
import DropDownPicker from '../components/DropDownPicker';
import AppImagePicker from '../components/AppImagePicker';
import ProductCard from '../components/ProductCard';

const AddProductScreen: React.FC =()=>{
    return(
        <ScrollView style={{flex:1}}>
     <ProductCard/>
        </ScrollView>
    )
}

export default memo(AddProductScreen);