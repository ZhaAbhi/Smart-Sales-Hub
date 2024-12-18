import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import RightActionIcon from '@react-native-vector-icons/fontawesome'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated,{ SharedValue, useAnimatedStyle } from 'react-native-reanimated';import { GestureHandlerRootView } from 'react-native-gesture-handler';


const RightAction:React.FC<{prog: SharedValue<number>, drag: SharedValue<number>}>=(prog, drag)=>{
    const styleAnimation = useAnimatedStyle(()=>{
      return {
        alignItems:'center',
        padding:10,
        transform:[{ translateX: drag.value + 110}]
      }
    })
    return (
        <Reanimated.View style={styleAnimation}>
           <View style={{padding:15, flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <RightActionIcon name='edit' size={25} color={"green"} style={{marginRight:20, paddingRight:10}}/>
            <RightActionIcon name='trash' size={25} color={"#ff6666"} style={{marginBottom:2}}/>
           </View>
        </Reanimated.View>
    )
}

const ProductCard:React.FC<{item:any}> = ({item, onPress})=>{
    return(
        <GestureHandlerRootView>
            <ReanimatedSwipeable
            containerStyle={{flex:1}}
             renderRightActions={RightAction}
            
            >
        <TouchableOpacity onPress={onPress} style={{flex:1, padding:15}}>
        <View style={{ backgroundColor: 'rgba(106, 197, 254, 0.1)', borderRadius:10}}>
           <View style={{padding:10}}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:8, justifyContent:'space-between'}}>
                <View style={{flexDirection:"row"}}>
                  <Text style={{color:'#FFF', fontWeight:'bold', fontSize:16, marginRight:10}}>{item.name}</Text>
                  <Text style={{color:'#FFF', fontSize:13, alignSelf:"center"}}>• {item.category.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                 <Text style={{color:'darkgrey', fontSize:10, alignSelf:"center"}}>{item.createdAt}</Text>
                 <Icon name="arrow-forward-outline" size={15} color={"#FFF"} style={{marginLeft:8}}/>
                </View>
            </View>
            <Text numberOfLines={2} style={{color:'darkgrey'}}>{item.description}</Text>
           </View>
        </View>
        </TouchableOpacity>
        </ReanimatedSwipeable>
        </GestureHandlerRootView>
    )
}

export default ProductCard;