import React, {memo} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import ActionButton from '../components/ActionButton';
import DropDownPicker from '../components/DropDownPicker';
import AppImagePicker from '../components/AppImagePicker';
import ProductCard from '../components/ProductCard';
import { productData } from '../assets/productData';

const AddProductScreen: React.FC =()=>{
    return(
        <FlatList
         data={productData}
         keyExtractor={(item:any)=>item.id}
         renderItem={({item})=><ProductCard item={item}/>}
         showsVerticalScrollIndicator={false}
        />
    )
}

export default memo(AddProductScreen);