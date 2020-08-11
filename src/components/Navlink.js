import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Navlink = ({ text, callback }) => {
  return (
    <TouchableOpacity onPress={callback}>
      <Text style={styles.navLink}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Navlink;

const styles = StyleSheet.create({
  navLink: {
    alignSelf: "center",
    marginTop: 20,
    color: "skyblue",
    fontWeight: "bold",
  },
});
