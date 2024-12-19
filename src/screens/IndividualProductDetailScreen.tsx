import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';


const IndividualProductDetailScreen:React.FC<{route:any}>=({route})=>{
    const id = route.params;
    console.log(id)
    return(
        <View >
            <Text>This is product detail screen</Text>
        </View>
    )
}

export default IndividualProductDetailScreen;