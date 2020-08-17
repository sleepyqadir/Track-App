import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { Provider as TrackProvider } from "./src/context/TrackContext";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="List" component={TrackListScreen} />
      <HomeStack.Screen name="Details" component={TrackDetailScreen} />
    </HomeStack.Navigator>
  );
}

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "List") {
                iconName = focused ? "home-variant" : "home-variant-outline";
              } else if (route.name === "Create") {
                iconName = focused ? "map" : "map-outline";
              } else if (route.name === "Account") {
                iconName = focused ? "account" : "account-outline";
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name={"List"} component={HomeStackScreen} />
          <Tab.Screen name={"Create"} component={TrackCreateScreen} />
          <Tab.Screen name={"Account"} component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}

export default App;
