import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Alert } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import auth from "@react-native-firebase/auth";

import { styles } from "./styles.js";

export function Home() {
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignOut() {
    auth().signOut();
  }

  return (
    <LinearGradient style={styles.container} colors={["orange", "green"]}>
      <Text>HomePage</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("announce_create")}
      >
        <Text style={styles.buttonText}>Criar Anuncio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
