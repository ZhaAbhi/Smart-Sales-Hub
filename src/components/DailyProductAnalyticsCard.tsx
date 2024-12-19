import React from 'react';
import {View, Text} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons'

const DailyProductAnalyticsCard: React.FC=()=>{
    return(
        <View style={{ backgroundColor: 'rgba(106, 197, 254, 0.1)', padding:15, borderRadius:15, flexDirection:'row', justifyContent:'space-between', marginVertical:5}}>
            <View>
                <Text style={{color:'#FFF', fontWeight:'bold'}}>12,300</Text>
                <Text style={{color:'darkgrey'}}>Groceries</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
             <Icon name="caret-up" size={18} color={"red"}/>
             <Text style={{color:'#FFF'}}>5.6%</Text>
            </View>
        </View>
    )
}

export default DailyProductAnalyticsCard;