import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Heading from "../components/Heading";

const TrackListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Heading title="Track list Screen" />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});
