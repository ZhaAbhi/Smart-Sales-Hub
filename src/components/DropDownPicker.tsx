import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/evil-icons';

const dropDownItems = [
    {
        id: 1,
        name: 'Grocery'
    },
    {
        id: 2,
        name: 'Cosmetics'
    },
    {
        id: 3,
        name: 'Fruits'
    },
];

const DropDownPicker: React.FC = () => {
    const [expanded, isExpanded] = useState(false);
    const [changeText, setChangeText] = useState('');
    const [itemSelected, setItemSelected] = useState<{id: number, name: string} | null>(null);

    const filteredCategory = dropDownItems?.filter(category => 
        category?.name.toLowerCase().includes(changeText?.toLowerCase())
    );

    const selectCategory = (item: {id: number, name: string}) => {
        setItemSelected(item);
        setChangeText(item.name); 
        isExpanded(false);
    };

    const handleTextChange = (text: string) => {
        setChangeText(text);
        isExpanded(true); 
        setItemSelected(null);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() => isExpanded(!expanded)}
                style={styles.inputContainer}
            >
                <TextInput 
                    style={styles.input}
                    placeholder='Select the category'
                    value={changeText}
                    onChangeText={handleTextChange}
                />
                <Icon 
                    style={styles.dropdownIcon} 
                    name='arrow-down' 
                    size={25} 
                    color={'black'}
                />
            </TouchableOpacity>
            {expanded && (
                <View style={styles.dropdownList}>
                    <View style={styles.dropdownContent}>
                        {filteredCategory.length > 0 ? (
                            filteredCategory.map((item, i) => (
                                <TouchableOpacity 
                                    key={item.id} 
                                    onPress={() => selectCategory(item)}
                                    style={styles.dropdownItem}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <View>
                                <Text>No result found</Text>
                            </View>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:20,
    },
    input: {
       
        //backgroundColor: '#FFF',
        borderWidth:1,
        borderColor:'#000',
        borderRadius: 40,
        padding: 10,
        flex: 1
    },
    dropdownIcon: {
        position: 'absolute', 
        right: 12
    },
    dropdownList: {
        paddingLeft: 14, 
        paddingRight: 14, 
        marginTop: 0
    },
    dropdownContent: {
        backgroundColor: '#FFF',
        borderWidth: 1, 
        borderBottomRightRadius: 10, 
        borderBottomLeftRadius: 10, 
        padding: 10
    },
    dropdownItem: {
        paddingVertical: 10
    }
});

export default DropDownPicker;