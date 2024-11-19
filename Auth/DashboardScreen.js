import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  // Sample data: List of companies or medicines
  const companies = [
    {
      id: '1',
      name: 'ABBOT',
      image: require('../assets/abbot.png'), // Make sure to add your image path
    },
    {
      id: '2',
      name: 'GSK',
      image: require('../assets/gsk.jpg'), // Make sure to add your image path
    },
    {
      id: '3',
      name: 'INDUS PHARMA',
      image: require('../assets/indus.png'), // Make sure to add your image path
    },
    {
        id: '4',
        name: 'SEARLE',
        image: require('../assets/searle.png'), // Make sure to add your image path
      },
    // Add more companies or medicines as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      
      <View style={styles.cardsContainer}>
        {companies.map((company) => (
          <View key={company.id} style={styles.card}>
            <Image source={company.image} style={styles.image} />
            <Text style={styles.companyName}>{company.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MedicineDetails', { companyId: company.id })}
            >
              <Text style={styles.buttonText}>View Medicine</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
