import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Map from "../components/Map";
import { Context } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";
const TrackCreateScreen = () => {
  // useFocusEffect(() => {
  //   return () => {};
  // });
  const isFocused = useIsFocused();
  const { addLocation } = useContext(Context);
  const [err] = useLocation(isFocused, addLocation);
  console.log(isFocused);
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
