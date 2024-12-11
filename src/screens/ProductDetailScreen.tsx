import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions 
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import ActionButton from '../components/ActionButton';
import AddProductScreen from './AddProductScreen';
import ProductAnalyticsScreen from './ProductAnalyticsScreen';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';
import AddProductForm from './AddProductForm';
const routes = [
  { key: 'product', title: 'Products' },
  { key: 'analytics', title: 'Analytics' }
];

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'product':
      return <AddProductScreen />;
    case 'analytics':
      return <ProductAnalyticsScreen />;
    default:
      return null;
  }
};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    activeColor="#FFFFFF"
    inactiveColor="#A0A0A0"
    style={{
      backgroundColor: 'transparent', 
      marginTop: 10,
      elevation: 0,
      shadowOpacity: 0,
      borderWidth: 0,
    }}
  />
);

const ProductDetailScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [addProductModalVisible, setAddProductModalVisible] = useState(false);
  const isExpanded = useSharedValue(false)

  const floatingActions = [
    {
      label: 'Add Product',
      onPress: () => setAddProductModalVisible(true),
    },
    {
      label: 'Add Category',
      onPress: () => console.log('Add category pressed'),
    },
    {
      label: 'Item Sold',
      onPress: () => {
        console.log('Items Sold pressed');
      }
    }
  ];

  const handleModalClose=()=>{
    setAddProductModalVisible(false)
    isExpanded.value = false
  }

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      
      <View style={styles.actionButtonContainer}>
        <ActionButton actions={floatingActions} expanded = {isExpanded} />
      </View>
      <View style={{flex:1}}>
        <Modal
        visible={addProductModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setAddProductModalVisible(false)}
      >
       <AddProductForm  onCloseModalPress={handleModalClose}/>
      </Modal>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#192841'
  },
  actionButtonContainer: {
    position: 'absolute',
    bottom: 20, 
    right: 60
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#192841',
    borderRadius: 5
  },
  closeButtonText: {
    color: 'white'
  }
});

export default ProductDetailScreen;