import React, {memo} from 'react'
import {View, Text} from 'react-native';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

const ProductAnalyticsScreen: React.FC = ()=>{
    return(
        <View style={{flex:1}}>
           <PieChart data = {data} />
        </View>
    )
}
export default memo(ProductAnalyticsScreen);