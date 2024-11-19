import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Medicines</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('SearchByText')}>
        <Text style={styles.optionText}>Search Medicine by Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('SearchByVoice')}>
        <Text style={styles.optionText}>Search Medicine by Voice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('SearchByCompany')}>
        <Text style={styles.optionText}>Show Medicines by Company</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('ShowAllMedicines')}>
        <Text style={styles.optionText}>Show All Medicines</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  optionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  optionText: { color: '#fff', textAlign: 'center', fontSize: 18 },
});
