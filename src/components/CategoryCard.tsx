import React from 'react';
import {View, Text} from 'react-native';


const CategoryCard:React.FC=({item})=>{
    return(
        <View style={{ backgroundColor: 'rgba(106, 197, 254, 0.1)', borderRadius:10, padding:15, paddingLeft:18, marginVertical:8}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'#FFF', fontSize:15, fontWeight:'bold'}}>{item.name}</Text>
            <Text style={{color:'darkgrey',fontSize:12, fontWeight:'bold', marginLeft:15}}>• {item.createdAt}</Text>
            </View>
            <Text style={{color:'darkgrey',marginTop:10}}>{item.product} products</Text>
        </View>
    )
}

export default CategoryCard;