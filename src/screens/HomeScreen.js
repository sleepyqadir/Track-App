import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Heading from "../components/Heading";
import { useFocusEffect } from "@react-navigation/native";
import { Context } from "../context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { trysignin, state } = useContext(Context);
  useFocusEffect(
    useCallback(() => {
      trysignin(navigation);
      return () => {};
    }, [state.token])
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading title="Tracker App" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});
