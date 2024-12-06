import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AppCardProps {
  item: {
    advice: string;
    suggestions: string[];
  };
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => setIsExpanded(!isExpanded)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.adviceText}>{item.advice}</Text>
      </View>
      
      {isExpanded && (
        <View style={styles.suggestionsContainer}>
          {item.suggestions.map((suggestion, index) => (
            <Text key={index} style={styles.suggestionText}>
              • {suggestion}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  suggestionsContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  suggestionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default AppCard;