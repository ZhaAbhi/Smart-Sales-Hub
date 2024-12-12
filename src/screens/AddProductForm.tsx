import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { z } from 'zod';

import { useCustomForm } from '../hooks/useCustomForm';
import CustomHeader from '../components/CustomHeader';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppImagePicker from '../components/AppImagePicker';

const AddProductForm: React.FC<{ onCloseModalPress: () => void }> = ({ onCloseModalPress }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const productFields = [
    {
      name: 'productName',
      type: 'text',
      label: 'Product Name',
      validation: z.string()
        .min(3, { message: 'Product name must be at least 3 characters' })
        .max(50, { message: 'Product name cannot exceed 50 characters' })
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      validation: z.coerce.number()
        .min(0.01, { message: 'Price must be a positive number' })
        .max(1000000, { message: 'Price is too high' })
    },
     {
      name: 'category',
      type: 'text',
      label: 'Category',
      validation: z.string()
        .optional()
    },
    {
        name:'quantity',
        type: 'number',
        label: 'Quantity',
        validation: z.coerce.number()
          .min(1, {message: 'Quantity must be a greater or equal to 1'})
            .max(1000000, { message: 'Quantity is too high' })
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      validation: z.string()
        .max(200, { message: 'Description cannot exceed 200 characters' })
        .optional()
    },
  ];

  const handleProductSubmit = (data: any) => {
    console.log('Product Data:', data);
  };

  const { 
    handleSubmit, 
    renderFormFields,
    hasErrors,
    defaultValues
  } = useCustomForm(productFields, handleProductSubmit);

  return (
    <View style={styles.container}>
      <CustomHeader 
        title="Add Product Detail" 
        onPress={onCloseModalPress}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {renderFormFields().map(({ component }) => component)}
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
            disabled={hasErrors}
          >
            <Text style={styles.submitButtonText}>Add Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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