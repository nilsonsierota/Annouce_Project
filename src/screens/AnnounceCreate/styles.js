import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 16,
    lineHeight: 40,
  },
  button: {
    width: 250,
    height: 40,
    marginTop: 10,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  buttons: {
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
  },
  textInput: {
    width: 250,
    height: 40,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
  },
  textDescription: {
    width: 250,
    height: 200,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
  },
});
