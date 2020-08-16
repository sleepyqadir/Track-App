import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Heading from "../components/Heading";
import { Context } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView style={styles.container}>
      <Heading title="Account Screen" />
      <TouchableOpacity style={styles.button} onPress={signout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
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
});
