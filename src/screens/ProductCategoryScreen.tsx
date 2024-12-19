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
         style={{padding:15, paddingBottom:2}}
        />
    )
}

export default ProductCategoryScreen;