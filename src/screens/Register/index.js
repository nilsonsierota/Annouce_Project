import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import auth from "@react-native-firebase/auth";

import { styles } from "./styles.js";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleRegister() {
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("signIn"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <LinearGradient style={styles.container} colors={["orange", "green"]}>
      <Text style={styles.title}>{"Complete o seu Registro."}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="E-Mail"
        autoCapitalize="none"
        onChangeText={setEmail}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={setPassword}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
