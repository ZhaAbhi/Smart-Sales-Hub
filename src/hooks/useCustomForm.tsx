import React from 'react';
import {useForm, Controller, FieldValues, UseFormProps, Path} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';

interface FormField<T extends FieldValues>{
    name: keyof T;
    type: 'text' | 'number' | 'email' | 'password' | 'textarea';
    label: string;
    placeholder?: string;
    validation?: z.ZodType;
}

export function useCustomForm<T extends FieldValues>(
    fields: FormField<T>[],
    onSubmitHandler: (data: T) => void,
    formOptions?: UseFormProps<T>
){
  const createZodSchema = () =>{
    const schemaFields: Record<string, z.ZodType> = {};

    fields.forEach(field=>{
        if(field.validation){
            schemaFields[field.name as string] = field.validation;
        }else{
            switch(field.type){
                case 'text':
                    schemaFields[field.name as string] = z.string().optional();
                    break;
                case 'number':
                    schemaFields[field.name as string] = z.coerce.number().optional();
                    break;
                case 'email':
                    schemaFields[field.name as string] = z.string().email().optional();
                    break;
                default:
                    schemaFields[field.name as string] = z.string().optional()
            }
        }
    })
    return z.object(schemaFields);
  }

  const formSchema = createZodSchema();

const defaultValues = fields.reduce((acc, field) => {
  acc[field.name as keyof T] = (field.type === 'number' ? undefined : '') as T[keyof T];
  return acc;
}, {} as T);

  const {
    control,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm<T>({
    resolver: zodResolver(formSchema),
    defaultValues:{
        ...defaultValues,
        ...formOptions?.defaultValues
    },
    ...formOptions
  })

  const onSubmit = (data: T)=>{
    onSubmitHandler(data);
    reset()
  }

  const renderFormFields = ()=>{
    return fields.map(field => ({
        field,
        component:(
            <Controller
             key = {field.name as string}
             control={control}
             name={field.name as Path<T>}
               render={({ field: { onChange, value } }) => (
            <View>
              <AppTextInput
                placeholder={field.placeholder || field.label}
                onChangeText={onChange}
                value={value}
                keyboardType={field.type === 'number' ? 'numeric' : 'default'}
                multiline={field.type === 'textarea'}
              />
              {errors[field.name] && (
                <Text style={styles.errorText}>
                  {errors[field.name]?.message as string}
                </Text>
              )}
            </View>
          )}
        />
      )
    }))
  }
  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    renderFormFields
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 10
  }
});