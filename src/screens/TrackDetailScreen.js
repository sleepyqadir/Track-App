import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Heading from "../components/Heading";
import { Context } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TrackDetailScreen = ({ navigation, route }) => {
  const _id = route.params._id;
  const { state } = useContext(Context);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <SafeAreaView style={styles.container}>
      <Heading title={track.name} />
      <View style={styles.mapcontainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            longitudeDelta: 0.01,
            longitudeDelta: 0.01,
            ...initialCoords,
          }}
          region={{
            ...initialCoords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline
            coordinates={track.locations.map((loc) => loc.coords)}
            strokeWidth={4}
            strokeColor="rgba(255,140,0,0.8)"
          />
        </MapView>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <MaterialCommunityIcons
          name={"arrow-left-box"}
          size={48}
          color={"black"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  mapcontainer: {
    marginBottom: 30,
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRightWidth: 20,
    borderLeftWidth: 20,
  },
  map: {
    height: 300,
  },
  button: {
    backgroundColor: "black",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
