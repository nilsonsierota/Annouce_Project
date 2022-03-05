import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { styles } from "./styles";
import { Alert } from "react-native-web";

export function AnnounceCreate() {
  const [loading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");

  const navigation = useNavigation();

  function handleNewAnnounce() {
    setIsLoading(true);

    firestore()
      .collection("announce")
      .add({
        title,
        description,
        price,
        status: "active",
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => Alert.alert("Anuncio criado com Sucesso!"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <LinearGradient style={styles.container} colors={["orange", "green"]}>
      <Text style={styles.title}>{"Crie seu Anuncio."}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Titulo"
        autoCapitalize="none"
        onChangeText={setTitle}
      ></TextInput>

      <TextInput
        style={styles.textDescription}
        placeholder="Descricao"
        autoCapitalize="none"
        onChangeText={setDescription}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Preco"
        autoCapitalize="none"
        onChangeText={setPrice}
      ></TextInput>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleNewAnnounce}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
