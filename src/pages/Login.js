import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Colors from "../Shared/Colors.js";
import { Ionicons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";

export default function Login() {
    const handleLogin= ()=>{
        alert("entraste");
        
    }
    

  return (
    <View>
      <Image source={require("../../assets/music.jpg")} 
       style={{ width: 400, height: 400, flex:1 }}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Retumbe</Text>
        <Text style={{ textAlign: "center", marginTop: 60, fontSize: 20 }}>
          
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Ionicons
            name="logo-google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setUserData({
              name: "",
              picture: "",
              email: "",
              id: 1,
            })
          }
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#120B1F",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color:"white"
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 50,
    marginBottom:50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
