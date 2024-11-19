// Example for ShowAllMedicines Screen
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ShowAllMedicines = ({ route, navigation }) => {
  const medicines = route.params.medicines;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Medicines</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.medicineCard}
            onPress={() => navigation.navigate('Cart', { medicine: item })}>
            <Text style={styles.medicineName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ShowAllMedicines;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
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
});
