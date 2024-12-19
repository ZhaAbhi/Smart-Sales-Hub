import React from 'react';
import {View, Text} from 'react-native';
import { BarChart } from "react-native-gifted-charts";

const barData = [
    {
          value: 230,
          label: 'Jan',
          frontColor: '#4ABFF4',
          sideColor: '#23A7F3',
          topColor: '#92e6f6',
        },
        {
          value: 180,
          label: 'Feb',
          frontColor: '#79C3DB',
          sideColor: '#68BCD7',
          topColor: '#9FD4E5',
        },
        {
          value: 195,
          label: 'Mar',
          frontColor: '#28B2B3',
          sideColor: '#0FAAAB',
          topColor: '#66C9C9',
        },
        {
          value: 250,
          label: 'Apr',
          frontColor: '#4ADDBA',
          sideColor: '#36D9B2',
          topColor: '#7DE7CE',
        },
        {
          value: 320,
          label: 'May',
          frontColor: '#91E3E3',
          sideColor: '#85E0E0',
          topColor: '#B0EAEB',
        },
]

const RevenueCard:React.FC=()=>{
    return(
        <View style={{ backgroundColor: '#192841', borderRadius:15, padding:10}}>
            <Text style={{color:'#FFF', fontWeight:'bold', fontSize:16}}>Total Monthly Revenue Generated</Text>
            <View style={{marginTop:15}}>
            <BarChart
            showYAxisIndices
            hideRules
            noOfSections={5}
            noOfVerticalLines={6}
            maxValue={400}
            data={barData}
            barWidth={48}
            sideWidth={15}
            isThreeD 
            side="right"
            xAxisLabelTextStyle={{
                    color: '#FFFFFF',  
                    textAlign: 'center',
                    fontSize: 12,
                }}
                yAxisTextStyle={{
                    color: '#FFFFFF',
                    fontSize: 12,
                }}
                xAxisColor={'darkgrey'} 
                yAxisColor={'darkgrey'}
            />
            </View>
        </View>
    )
}

export default RevenueCard;