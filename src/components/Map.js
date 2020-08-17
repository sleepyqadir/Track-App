import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context } from "../context/LocationContext";
const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(Context);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const points = locations.map((loc) => loc.coords);
  console.log(points);
  return (
    <View style={styles.mapcontainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,235,1.0)"
          fillColor="rgba(158,158,235,0.3)"
        />
        <Polyline
          coordinates={points}
          strokeWidth={4}
          strokeColor="rgba(255,140,0,0.8)"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapcontainer: {
    marginBottom: 30,
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRightWidth: 20,
    borderLeftWidth: 20,
  },
  map: {
    height: 350,
  },
});
