import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Heading from "../components/Heading";
import AuthForm from "../components/AuthForm";
import { Context } from "../context/AuthContext";
import Navlink from "../components/Navlink";
import { useFocusEffect } from "@react-navigation/native";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(Context);
  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading title={"Sign Up Screen"} />
      <AuthForm
        onSubmit={({ email, password }) => {
          signup({ email, password });
        }}
        errorMessgage={state.errorMessgage}
      />
      <Navlink
        text="Already Signed ? Sign In"
        callback={() => {
          navigation.navigate("signin");
        }}
      />
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});
