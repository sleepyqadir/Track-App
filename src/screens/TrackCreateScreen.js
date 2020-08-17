import React, { useContext, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Map from "../components/Map";
import { Context } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";
const TrackCreateScreen = () => {

  const isFocused = useIsFocused();
  const { state, addLocation } = useContext(Context);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused, callback);
  console.log(state.locations.length)
  return (
    <SafeAreaView style={styles.container}>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});
