import React, { useCallback, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import Heading from "../components/Heading";
import { useFocusEffect } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  useFocusEffect(
    useCallback(() => {
      fetchTracks();
      return () => {};
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading title="Track list Screen" />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", { _id: item._id });
              }}
            >
              <Text style={styles.singleTrack}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  singleTrack: {
    backgroundColor: "black",
    marginBottom: 5,
    color: "white",
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
  },
});
