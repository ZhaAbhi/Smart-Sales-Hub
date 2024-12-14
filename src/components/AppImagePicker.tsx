import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    ScrollView, 
    StyleSheet, 
    Dimensions 
} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

const { width } = Dimensions.get('window');

const AppImagePicker: React.FC = () => {
    const [selectedImages, setSelectedImages] = useState<Asset[]>([]);

    const handleImagePicker = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 5,
            quality: 0.7
        });

        if (result.didCancel) {
            console.log('Image selection cancelled');
            return;
        }

        if (result.errorCode) {
            console.error('Image picker error:', result.errorMessage);
            return;
        }

        if (result.assets) {
            setSelectedImages(result.assets);
        }
    };

    const removeImage = (index: number) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={handleImagePicker} 
                activeOpacity={0.8} 
                style={styles.uploadButton}
            >
                <View style={styles.buttonContent}>
                    <Icon name='cloud-upload' size={35} color="#007bff"/>
                    <Text style={styles.buttonText}>Upload Pictures</Text>
                </View>
            </TouchableOpacity>

            {selectedImages.length > 0 && (
                <ScrollView 
                    horizontal 
                    style={styles.imageScrollView}
                    showsHorizontalScrollIndicator={false}
                >
                    {selectedImages.map((image, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Image 
                                source={{ uri: image.uri }} 
                                style={styles.image} 
                                resizeMode="cover"
                            />
                            <TouchableOpacity 
                                style={styles.removeButton} 
                                onPress={() => removeImage(index)}
                            >
                                <Text style={styles.removeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop:15,
    },
    uploadButton: {
        height: 70, 
        backgroundColor: '#FFF', 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width * 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        marginLeft: 10,
        color: '#007bff',
        fontWeight: 'bold',
    },
    imageScrollView: {
        marginTop: 15,
        maxHeight: 150,
    },
    imageContainer: {
        position: 'relative',
        marginRight: 10,
    },
    image: {
        width: 120, 
        height: 120, 
        borderRadius: 10,
    },
    removeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255,0,0,0.7)',
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    imageCountText: {
        marginTop: 10,
        color: '#666',
        fontStyle: 'italic',
    }
});

export default AppImagePicker;