import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { categoryData } from '../assets/categoryData';

const ProductCategoryScreen: React.FC =()=>{
    return(
        <FlatList
         data={categoryData}
         keyExtractor={(item:any)=>item.id}
         renderItem={({item})=><CategoryCard item={item}/>}
         showsVerticalScrollIndicator={false}
         style={{paddingLeft:10, paddingRight:10}}
        />
    )
}

export default ProductCategoryScreen;