import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CartScreen = ({ route, navigation }) => {
  // Check if route.params is defined
  if (!route.params || !route.params.medicine) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart is empty!</Text>
      </View>
    );
  }

  const { medicine } = route.params; // Receive the medicine details

  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(medicine.price.replace("PKR", "")) // Calculate initial price
  );

  // Increase quantity
  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * parseFloat(medicine.price.replace("PKR", "")));
  };

  // Decrease quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(
        newQuantity * parseFloat(medicine.price.replace("PKR", ""))
      );
    }
  };

  // Handle order button
  const handleOrder = () => {
    console.log("Order placed:", { medicine, quantity, totalPrice });
    alert(`Order placed for ${medicine.name}!`);
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CART</Text>
      <View style={styles.card}>
        <Image source={medicine.image} style={styles.image} />
        <Text style={styles.name}>{medicine.name}</Text>
        <Text style={styles.details}>Purpose: {medicine.purpose}</Text>
        <Text style={styles.details}>Formula: {medicine.formula || "N/A"}</Text>
        <Text style={styles.details}>Price per unit: {medicine.price}</Text>
        <Text style={styles.details}>
          Total Price: PKR: {totalPrice.toFixed(2)}
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrease}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrease}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#black",
    backgroundColor:'#04fdf5'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#black", marginBottom: 5 },
  details: { fontSize: 17, color: "black", marginBottom: 5 },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: "#04fdf5",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 30,
  },
  quantityButtonText: { color: "black", fontSize: 22, fontWeight: "bold" },
  quantityText: { fontSize: 18, fontWeight: "bold", color: "#333" },
  orderButton: {
    backgroundColor: "#3f97c7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  orderButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
