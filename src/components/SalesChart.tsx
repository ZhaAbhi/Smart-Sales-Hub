import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const SalesChart: React.FC=()=>{
    return(
        <View style={{ marginTop:30}}>
            <Text style={{color:'lightgrey', fontWeight:'condensedBold', fontSize:16}}>Shop Valuation Growth</Text>
        <View style={{alignItems:'center', marginTop:20}}>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get('window').width - 50}
    height={190}
    yAxisLabel="Rs."
    yAxisSuffix="k"
    yAxisInterval={1}
    chartConfig={{
      backgroundColor: "#192841",
      backgroundGradientFrom: "#192841",
      backgroundGradientTo: '#192841',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      </View>
    )
}

export default SalesChart;