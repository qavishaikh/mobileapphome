import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Voice from "react-native-voice"; // Import react-native-voice

const DashboardScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false); // To track if the user is speaking
  
  const companies = [
    {
      id: "1",
      name: "ABBOT",
      image: require("../assets/abbot.png"),
      medicines: [
        {
          id: "101",
          name: "Panadol",
          purpose: "Pain relief",
          price: "10",
          image: require("../assets/Medicines/m1.jpg"),
        },
        {
          id: "102",
          name: "Leflox",
          purpose: "Cold and flu",
          price: "10",
          image: require("../assets/Medicines/m2.jpg"),
        },
        {
          id: "103",
          name: "Medicine 3",
          purpose: "Allergy relief",
          price: "10",
          image: require("../assets/Medicines/m3.webp"),
        },
      ],
    },
    {
      id: "2",
      name: "GSK",
      image: require("../assets/gsk.jpg"),
      medicines: [
        {
          id: "201",
          name: "Burofeen",
          purpose: "Pain relief",
          price: "10",
          image: require("../assets/Medicines/m1.jpg"),
        },
        {
          id: "202",
          name: "Medicine 2",
          purpose: "Cold and flu",
          price: "10",
          image: require("../assets/Medicines/m2.jpg"),
        },
        {
          id: "203",
          name: "Disprol",
          purpose: "Allergy relief",
          price: "10",
          image: require("../assets/Medicines/m3.webp"),
        },
      ],
    },
    {
      id: "3",
      name: "INDUS PHARMA",
      image: require("../assets/indus.png"),
      medicines: [
        {
          id: "301",
          name: "Serbex Z",
          purpose: "Pain relief",
          price: "10",
          image: require("../assets/Medicines/m1.jpg"),
        },
        {
          id: "302",
          name: "Medicine 2",
          purpose: "Cold and flu",
          price: "10",
          image: require("../assets/Medicines/m2.jpg"),
        },
        {
          id: "303",
          name: "Becifol",
          purpose: "Allergy relief",
          price: "10",
          image: require("../assets/Medicines/m3.webp"),
        },
      ],
    },
    {
      id: "4",
      name: "SEARLE",
      image: require("../assets/searle.png"),
      medicines: [
        {
          id: "401",
          name: "Medicine 1",
          purpose: "Pain relief",
          price: "10",
          image: require("../assets/Medicines/m1.jpg"),
        },
        {
          id: "402",
          name: "Medicine 2",
          purpose: "Cold and flu",
          price: "12",
          image: require("../assets/Medicines/m2.jpg"),
        },
        {
          id: "403",
          name: "Medicine 3",
          purpose: "Allergy relief",
          price: "15",
          image: require("../assets/Medicines/m3.webp"),
        },
      ],
    },
  ];

  // Filter companies and medicines based on search text
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchText.toLowerCase()) ||
    company.medicines.some((medicine) =>
      medicine.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  useEffect(() => {
    Voice.onSpeechStart = () => setIsListening(true);
    Voice.onSpeechEnd = () => setIsListening(false);
    Voice.onSpeechResults = (e) => {
      const result = e.value[0];
      setSearchText(result);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // Start voice recognition
  const startVoiceSearch = () => {
    Voice.start("en-US"); // Language for recognition (English)
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by company or medicine..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Voice Search Button */}
      <TouchableOpacity style={styles.voiceButton} onPress={startVoiceSearch}>
        <Text style={styles.buttonText}>{isListening ? "Listening..." : "Voice Search"}</Text>
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {filteredCompanies.map((company) => (
          <View key={company.id} style={styles.card}>
            <Image source={company.image} style={styles.image} />
            <Text style={styles.companyName}>{company.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("MedicineDetails", {
                  companyName: company.name,
                  medicines: company.medicines,
                })
              }
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
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  voiceButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: { width: "100%", height: 100, borderRadius: 5 },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
});

