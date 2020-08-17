import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = ({ navigation }) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(Context);
  const [saveTrack] = useSaveTrack(navigation);
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
      {!recording && locations.length ? (
        <TouchableOpacity style={styles.button} onPress={saveTrack}>
          <Text style={styles.buttonText}>Save Recording</Text>
        </TouchableOpacity>
      ) : null}
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
    marginBottom: 10,
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
