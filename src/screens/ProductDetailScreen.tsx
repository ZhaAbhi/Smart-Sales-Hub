import React from 'react';
import { Text, View, FlatList } from 'react-native';
import AppCard from '../components/AppCard';
import { aiAdviceList } from '../assets/aiMockData';
import AppTextInput from '../components/AppTextInput';

const ProductDetailScreen: React.FC = ()=>{
    return(
        <View style={{flex:1, backgroundColor:'#192841'}}>
         <AppTextInput/>
        </View>
    )
}

export default ProductDetailScreen