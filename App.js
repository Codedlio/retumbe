import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import auth from '@react-native-firebase/auth';

export default function App() {
    // // Set an initializing state whilst Firebase connects
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
  
    // // Handle user state changes
    // function onAuthStateChanged(user) {
    //   setUser(user);
    //   if (initializing) setInitializing(false);
    // }
  
    // useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);
  
    // if (initializing) return null;
  
    // if (!user) {
    //   return (
    //     <View style={styles.container}>
    //   <Login/>
    // </View>
    //   );
    // }
    return (
      <View>
        <Login/>
      </View>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
