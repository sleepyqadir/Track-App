import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AuthForm = ({ errorMessgage, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCorrect={false}
      />
      <TextInput
        secureTextEntry
        style={styles.formInput}
        placeholder="password"
        onChangeText={setPassword}
        value={password}
        autoCorrect={false}
      />
      <Text style={styles.errorMessgage}>{errorMessgage}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onSubmit({email, password});
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  formInput: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    marginBottom: 30,
    padding: 5,
  },
  button: {
    backgroundColor: "black",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  errorMessgage: {
    color: "red",
    margin: 5,
    marginTop: -20,
    marginBottom: 30,
    fontWeight: "bold",
  },
});
