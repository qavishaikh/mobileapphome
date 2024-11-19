import React from 'react';
import { View, Button, StyleSheet, Text, ImageBackground, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/bg2.jpg')} // Add your background image path here
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Add your logo image path here
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Welcome to the Home Doctor</Text>
      <Text style={styles.sub}>Your Doctor & Pharmacy is at Your Finger Tips.</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Register" 
          onPress={() => navigation.navigate('Register')} 
          color="#4CAF50"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Login" 
          onPress={() => navigation.navigate('Login')} 
          color="#2196F3"
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 40, // Adjust the top margin for your logo
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust the width of the logo
    height: 180, // Adjust the height of the logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  sub: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});
