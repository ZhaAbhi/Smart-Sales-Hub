import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6'

const ActivityCard: React.FC = ({iconName, date, item, itemCount, onPress})=>{
    return(
        <TouchableOpacity onPress = {onPress} style={{ marginRight:10}}>
            <View style={{ padding:8, marginTop:10,backgroundColor: 'rgba(106, 197, 254, 0.1)',borderRadius: 22,}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                    <View style={{height:40, width:40, borderRadius:25, borderWidth:1, borderColor:'#D3B683', justifyContent:'center', alignItems:'center'}}>
                        <Icon name={iconName} size={17} iconStyle='solid' color={"#D3B683"}/>
                    </View>
                    <View style={{marginLeft:5}}>
                    <Text style={{color: '#fff', fontWeight:'bold', letterSpacing:0.8, lineHeight:18}}>{`${itemCount} ${item === 'added' ? 'item added' : item ==='visit' ? 'customer visit' : 'item sold'}`}</Text>
                    <Text style={{color: '#D3B683', fontSize:11, }}>{date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ActivityCard;