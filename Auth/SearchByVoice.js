import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Voice from '@react-native-community/voice';

const SearchByVoice = ({ route, navigation }) => {
  const [recognizedText, setRecognizedText] = useState('');
  const medicines = route.params.medicines; // Pass medicines data

  // Start voice recognition
  const startVoiceRecognition = async () => {
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  // Handle speech recognition results
  const onSpeechResults = (e) => {
    setRecognizedText(e.value[0]);
  };

  // Filter medicines based on recognized text
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(recognizedText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Medicines by Voice</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={startVoiceRecognition}>
        <Text style={styles.buttonText}>Start Voice Search</Text>
      </TouchableOpacity>
      {recognizedText && (
        <Text style={styles.recognizedText}>Recognized: {recognizedText}</Text>
      )}
      {filteredMedicines.map((item) => (
        <TouchableOpacity
          style={styles.medicineCard}
          key={item.id}
          onPress={() => navigation.navigate('Cart', { medicine: item })}>
          <Text style={styles.medicineName}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchByVoice;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
  recognizedText: { fontSize: 18, color: '#333', marginBottom: 20 },
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
