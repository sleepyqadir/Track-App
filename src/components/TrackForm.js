import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const TrackForm = () => {
  const [email, setEmail] = useState("");
  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholder="track name"
        onChangeText={setEmail}
        value={email}
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Start Recording</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackForm;

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
