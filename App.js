import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Auth/RegisterScreen';
import LoginScreen from './Auth/LoginScreen';
import HomeScreen from './Auth/HomeScreen';
import DashboardScreen from './Auth/DashboardScreen';
import MedicineDetailsScreen from './Auth/MedicineDetails';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="MedicineDetails" component={MedicineDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





// First Check 
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import HomeScreen from './/Component/HomeScreen';
// import NextScreen from './Component/NextScreen';

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('Home'); // Manage the screen state

//   return (
//     <View style={styles.container}>
//       {currentScreen === 'Home' ? (
//         <HomeScreen onNavigate={() => setCurrentScreen('Next')} />
//       ) : (
//         <NextScreen onBack={() => setCurrentScreen('Home')} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
