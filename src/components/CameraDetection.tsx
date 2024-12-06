import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import { 
  Camera, 
  useCameraPermission, 
  VideoFile,
  CameraDevice, 
  useFrameProcessor,
  useCameraDevice
} from 'react-native-vision-camera';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { aiAdviceList } from '../assets/aiMockData';
import AppCard from './AppCard';



interface CameraDetectionProps {
  active: boolean;
  onClose: () => void;
}

const CameraDetection: React.FC<CameraDetectionProps> = ({ active, onClose }) => {
    const { hasPermission, requestPermission } = useCameraPermission();
    const [isRecording, setIsRecording] = useState(false);
    const [recordedVideo, setRecordedVideo] = useState<VideoFile | null>(null);
    const [showAISuggestionButton, setShowAISuggestionButton] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    
    // Improved device selection
    const device = useCameraDevice('back')
    const [permissionAttempted, setPermissionAttempted] = useState(false);
    const camera = useRef<Camera>(null);

    useEffect(() => {
        const checkPermission = async () => {
            if (!hasPermission) {
                try {
                    const newPermission = await requestPermission();
                    setPermissionAttempted(true);
                    
                    if (!newPermission) {
                        Alert.alert(
                            'Camera Permission',
                            'Camera permission was denied. You can enable it in app settings.',
                            [{ text: 'OK' }]
                        );
                    }
                } catch (error) {
                    console.error('Permission request error:', error);
                    Alert.alert(
                        'Permission Error', 
                        'An error occurred while requesting camera permission.'
                    );
                }
            }
        };

        checkPermission();
    }, [hasPermission]);

    const handleRequestPermission = async () => {
        try {
            const newPermission = await requestPermission();
            setPermissionAttempted(true);
            
            if (!newPermission) {
                Alert.alert(
                    'Camera Permission',
                    'Camera permission was denied. You can enable it in app settings.',
                    [{ text: 'OK' }]
                );
            }
        } catch (error) {
            console.error('Permission request error:', error);
            Alert.alert(
                'Permission Error', 
                'An error occurred while requesting camera permission.'
            );
        }
    };

    const startRecording = async () => {
        if (camera.current && !isRecording) {
            try {
                await camera.current.startRecording({
                    onRecordingFinished: (video) => {
                        setRecordedVideo(video);
                        setIsRecording(false);
                        setShowAISuggestionButton(true);
                    },
                    onRecordingError: (error) => {
                        console.error('Recording error', error);
                        setIsRecording(false);
                    },
                });
                setIsRecording(true);
            } catch (error) {
                console.error('Failed to start recording', error);
                Alert.alert('Recording Error', 'Failed to start video recording');
            }
        }
    };

    const stopRecording = async () => {
        if (camera.current && isRecording) {
            try {
                await camera.current.stopRecording();
            } catch (error) {
                console.error('Failed to stop recording', error);
                Alert.alert('Recording Error', 'Failed to stop video recording');
            }
        }
    };

    const openAISuggestionModal = () => {
        bottomSheetModalRef.current?.present();
    };

    const closeAISuggestionModal = () => {
        bottomSheetModalRef.current?.dismiss();
    };


    // Permission not granted
    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Camera permission is required</Text>
                <Button 
                    title="Request Camera Permission" 
                    onPress={handleRequestPermission} 
                />
            </View>
        );
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <BottomSheetModalProvider>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    {device && 
                        <Camera
                            style={StyleSheet.absoluteFill}
                            device={device}
                            isActive={active}
                            video={true}
                            ref={camera}
                        />
                    }
                    <View>
                        <TouchableOpacity 
                            onPress={isRecording ? stopRecording : startRecording}
                            style={{
                                height: 70, 
                                width: 70, 
                                backgroundColor: isRecording ? 'red' : '#D3B683', 
                                borderRadius: 35, 
                                marginBottom: 25, 
                                justifyContent: 'center', 
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{color: 'white'}}>
                                {isRecording ? 'Stop' : 'Record'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', top: 20, flexDirection: 'row', alignItems: 'center', flex: 1, padding: 15, width: '100%'}}>
                        <TouchableOpacity 
                            onPress={onClose} 
                            style={{
                                right: 0, 
                                marginRight: 10, 
                                position: 'absolute',
                                height: 25,  
                                borderWidth: 1, 
                                paddingLeft: 5, 
                                paddingRight: 5, 
                                borderRadius: 15
                            }}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>
                        {
                            showAISuggestionButton && 
                            <TouchableOpacity 
                                onPress={openAISuggestionModal}
                                style={{
                                    height: 25,  
                                    borderWidth: 1, 
                                    paddingLeft: 5, 
                                    paddingRight: 5, 
                                    borderRadius: 15 
                                }}
                            >
                                <Text>AI shop suggestion</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={0}
                        snapPoints={['50%', '75%']}
                        backgroundStyle={{backgroundColor: '#fff'}}
                    >
                        <BottomSheetView style={{flex: 1, padding: 20, alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>
                                Your AI-powered Shop Suggestion
                            </Text>
                            <FlatList
                             data= {aiAdviceList}
                            renderItem={({item})=><AppCard item ={item}/>}
                            keyExtractor={item=>item.id}
                                />
                                <TouchableOpacity 
                                onPress={closeAISuggestionModal}
                                style={{
                                    marginTop: 20,
                                    backgroundColor: '#D3B683',
                                    padding: 10,
                                    borderRadius: 10
                                }}
                            >
                                <Text style={{color: 'white'}}>Close</Text>
                            </TouchableOpacity>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: 'red',
    },
    detailText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default CameraDetection;