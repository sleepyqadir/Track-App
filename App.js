import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";

import HomeScreen from "./src/screens/HomeScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppContainer() {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!state.token ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={"home"} component={HomeScreen} />
          <Stack.Screen name={"signin"} component={SigninScreen} />
          <Stack.Screen name={"signup"} component={SignupScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name={"tracklist"} component={TrackListScreen} />
          <Tab.Screen name={"trckcreate"} component={TrackCreateScreen} />
          <Tab.Screen name={"account"} component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </LocationProvider>
  );
}

export default App;
