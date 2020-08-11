import React, { useContext, useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import Heading from "../components/Heading";
import Navlink from "../components/Navlink";
import AuthForm from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/native";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage, trysignin } = useContext(Context);
  useFocusEffect(
    useCallback(() => {
      trysignin();
      return () => {
        clearErrorMessage();
      };
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading title={"Sign In Screen"} />
      <AuthForm
        onSubmit={({ email, password }) => {
          signin({ email, password });
        }}
        errorMessgage={state.errorMessgage}
      />
      <Navlink
        text="Not Registered Yet ? Sign Up"
        callback={() => {
          navigation.navigate("signup");
        }}
      />
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});
