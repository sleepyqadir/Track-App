import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context } from "../context/LocationContext";
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(Context);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  console.log(currentLocation);
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
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapcontainer: {
    marginBottom: 30,
  },
  map: {
    height: 350,
  },
});
