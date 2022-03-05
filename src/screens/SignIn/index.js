import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import auth from "@react-native-firebase/auth";

import { styles } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("home"))
      .catch((error) => console.log(error));
  }

  function handleForgotPassword() {}

  return (
    <LinearGradient style={styles.container} colors={["orange", "green"]}>
      <Text style={styles.title}>{"Ola Novamente.\nBem vindo de volta."}</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
