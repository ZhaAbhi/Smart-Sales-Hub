import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from './AppButton';

const CustomHeader = ({title, onPress})=>{
    return(
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <AppButton text="Back" onPress={onPress} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
    },
    backButtonContainer: {
        position: 'absolute', 
        left: 20
    },
    titleContainer: {
        flex: 1, 
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CustomHeader