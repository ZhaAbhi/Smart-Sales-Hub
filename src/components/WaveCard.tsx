import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome'
import Svg, { Path } from 'react-native-svg';

interface WaveCardProps {
  title: string;
  value: string | number;
}

const WaveCard: React.FC<WaveCardProps> = ({ title, value, date, iconName,  }) => {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.title}>{value}</Text>
          <Text style={styles.visit}>{title}</Text>
        </View>
        <View>
            <Icon name={iconName} size={25} color={"#D3B683"}/>
        </View>
      </View>
      <View>
        <Text style={styles.date}>{date}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '15%',
    backgroundColor: 'rgba(106, 197, 254, 0.1)',
    borderRadius: 22,
    padding: 15,
    justifyContent: 'space-between',
    marginVertical:5
  },
  title: {
    color: '#D3B683',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1.5,
  },
  visit: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1,
  },
  date:{
    color: '#D3B683',
    fontWeight: '500',
    fontSize: 10,
    letterSpacing: 1,
  },
});

export default WaveCard;
