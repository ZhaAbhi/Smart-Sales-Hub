import React from 'react';
import { View, StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader';


const AddProductForm: React.FC<{ onCloseModalPress: () => void }> = ({ onCloseModalPress }) => {

  return (
    <View style={styles.container}>
      <CustomHeader 
        title="Add Product Detail" 
        onPress={onCloseModalPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10
  },
  formContainer: {
    padding: 10
  },
  submitButton: {
    backgroundColor: '#192841',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default AddProductForm;