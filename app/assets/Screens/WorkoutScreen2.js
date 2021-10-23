import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react";
import { firebase, db, database } from "../../../firebase";
import { Video } from "expo-av";

function WorkoutScreen2() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [videos, setVideos] = useState([]); // Initial empty array of users
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    const subscriber = firebase
      .firestore()

      .collection("weight_training")
      // .doc("Weight_Training")
      .onSnapshot((querySnapshot) => {
        const videos = [];
        querySnapshot.forEach((documentSnapshot) => {
          videos.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setVideos(videos);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <FlatList
      style={[styles.flatlistView]}
      data={videos}
      renderItem={({ item }) => (
        <View style={[styles.padding]}>
          <View style={[styles.mainView]}>
            <View style={{ height: 20 }}></View>
            <View style={[styles.background]}>
              <Text style={[styles.Title]}>{item.Title}</Text>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: item.url,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              ></Video>
              <Text style={[styles.Textdescription]}>{item.description}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

export default WorkoutScreen2;

const styles = StyleSheet.create({
  video: {
    height: 220,
    width: 348,
    borderRadius: 20,
    justifyContent: "space-between",
    flex: 1,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: StatusBar.currentHeight || 0,
  },
  background: {
    height: 310,
    width: 400,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: "#5B5B5B",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,

    alignItems: "center",
    justifyContent: "space-between",
  },
  padding: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  Title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "500",
  },
  Textdescription: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 20,
  },
});
