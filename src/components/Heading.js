import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = ({ title }) => {
  return <Text style={styles.heading}>{title}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 30,
  },
});
