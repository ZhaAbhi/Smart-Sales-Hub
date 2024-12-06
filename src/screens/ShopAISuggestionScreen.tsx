import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CameraDetection from '../components/CameraDetection';
import AppButton from '../components/AppButton';

const ShopAISuggestionScreen: React.FC = () => {
    const [cameraActive, setCameraActive] = useState(false);

    const handleCameraClose = () => {
        setCameraActive(false);
    };

    if (cameraActive) {
        return (
            <View style={styles.fullScreenContainer}>
                <CameraDetection 
                    active={cameraActive} 
                    onClose={handleCameraClose} 
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Shop Decoration</Text>
                <Text style={styles.titleText}>Suggestion</Text>
            </View>
            <Image 
                source={require('../assets/shop-mobile.png')} 
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.aiText}>Artificial Intelligence</Text>
            <View style={styles.buttonContainer}>
                <AppButton 
                    onPress={() => setCameraActive(true)} 
                    text="Take a video" 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
    },
    container: {
        flex: 1, 
        backgroundColor: '#192841', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    titleContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30, 
        color: '#FFF', 
        fontWeight: 'bold', 
        letterSpacing: 1.5, 
        marginTop: 8,
    },
    image: {
        height: 300, 
        width: 300,
        marginTop: 20,
    },
    aiText: {
        fontSize: 30, 
        color: '#D3B683', 
        fontWeight: 'bold', 
        letterSpacing: 1.5, 
        marginTop: 8,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default ShopAISuggestionScreen;