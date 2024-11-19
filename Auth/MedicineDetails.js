import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const MedicineDetailsScreen = ({ route, navigation }) => {
  const { companyName, medicines } = route.params;

  const handleAddToCart = (medicine) => {
    navigation.navigate("Cart", { medicine }); // Pass the selected medicine
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{companyName}</Text>
      <Text style={styles.subtitle}>Medicines List:</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicineCard}>
            <Image source={item.image} style={styles.medicineImage} />
            <Text style={styles.medicineName}>{item.name}</Text>
            <Text style={styles.medicineDetails}>Purpose: {item.purpose}</Text>
            <Text style={styles.medicineDetails}>Price: {item.price}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddToCart(item)} // Call the navigation function
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MedicineDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blaack",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#04fdf5",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  medicineCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    alignItems: "left", // Center content inside the card
  },
  medicineImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  medicineName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  medicineDetails: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#3f97c7",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: { color: "white", textAlign: "center", fontSize: 18 },
});
