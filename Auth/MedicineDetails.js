import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicineDetailsScreen = ({ route }) => {
  const { companyId } = route.params; // Get companyId from the route params

  // Find the company from the list based on companyId
  const companies = [
    { id: '1', name: 'Abbot', description: 'Pharmaceutical company ABC.' },
    { id: '2', name: 'GSK', description: 'Healthcare solutions by XYZ.' },
    { id: '3', name: 'Indus Pharma', description: 'Global provider of medicine.' },
    { id: '4', name: 'Searle', description: 'Global provider of medicine.' },
  ];

  const company = companies.find((company) => company.id === companyId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{company?.name}</Text>
      <Text style={styles.description}>{company?.description}</Text>
    </View>
  );
};

export default MedicineDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
