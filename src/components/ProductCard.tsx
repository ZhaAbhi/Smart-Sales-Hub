import React from 'react';
import {View, Text} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';


const ProductCard:React.FC = ({item})=>{
    // <Icon name='trash-o' size={30} color={"black"}/>
    // <Icon name='edit' size={30} color={"black"}/>
    return(
        <View style={{flex:1, padding:15}}>
        <View style={{ backgroundColor: 'rgba(106, 197, 254, 0.1)', borderRadius:10}}>
           <View style={{padding:10}}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:8, justifyContent:'space-between'}}>
                <View style={{flexDirection:"row"}}>
                  <Text style={{color:'#FFF', fontWeight:'bold', fontSize:16, marginRight:10}}>{item.name}</Text>
                  <Text style={{color:'#FFF', fontSize:13, alignSelf:"center"}}>• {item.category.name}</Text>
                </View>
                 <Text style={{color:'darkgrey', fontSize:10, alignSelf:"center"}}>{item.createdAt}</Text>
            </View>
            <Text numberOfLines={2} style={{color:'darkgrey'}}>{item.description}</Text>
           </View>
        </View>
        </View>
    )
}

export default ProductCard;