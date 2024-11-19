import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SearchByText = ({ route, navigation }) => {
  const [searchText, setSearchText] = useState('');
  const medicines = route.params?.medicines || []; // Safe access to medicines data, fallback to empty array

  // Filter medicines based on the search text
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Medicines by Text</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a medicine..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Show a message if no medicines match the search */}
      {filteredMedicines.length === 0 && searchText ? (
        <Text style={styles.noResults}>No medicines found</Text>
      ) : (
        <FlatList
          data={filteredMedicines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.medicineCard}
              onPress={() => navigation.navigate('Cart', { medicine: item })}>
              <Text style={styles.medicineName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  medicineCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  medicineName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  noResults: { fontSize: 16, color: '#888', textAlign: 'center' },
});

export default SearchByText;
