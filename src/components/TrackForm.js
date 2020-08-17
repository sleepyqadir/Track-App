import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(Context);

  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholder="track name"
        onChangeText={changeName}
        value={name}
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.buttonText}>
          {recording ? "Stop" : "Start Recording"}
        </Text>
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
