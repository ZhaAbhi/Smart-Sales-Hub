import React, {memo} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import ActionButton from '../components/ActionButton';
import DropDownPicker from '../components/DropDownPicker';
import AppImagePicker from '../components/AppImagePicker';
import ProductCard from '../components/ProductCard';
import { productData } from '../assets/productData';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const AddProductScreen: React.FC =()=>{
   const {navigate} = useNavigation()
    return(
            <FlatList
             data={productData}
             keyExtractor={(item:any)=>item.id}
             renderItem={({item})=><ProductCard item={item} onPress={()=>navigate('productDetail')}/>}
             showsVerticalScrollIndicator={false}
            />
    )
}

export default memo(AddProductScreen);