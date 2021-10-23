import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { colors } from "react-native-elements";
import { useLayoutEffect } from "react";
import { auth, db, firebase } from "../../../../../firebase";

const MondayScheduleGilbert = ({ navigation }) => {
  const [tuesday, setTuesday] = useState(null);
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Tuesday",
      headerBackTitle: "",
    });
  }, []);

  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("gym_location_and_info")
      .doc("gilbert")
      .collection("tuesday")
      .onSnapshot((querySnapshot) => {
        const tuesday = [];
        querySnapshot.forEach((documentSnapshot) => {
          tuesday.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setTuesday(tuesday);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={[styles.ListStyle]}>
        <FlatList
          data={tuesday}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text style={[styles.title]}>{item.time}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.time}>{item.class}</Text>
              </View>
              <Text style={[styles.coach]}>Coach: {item.coach}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MondayScheduleGilbert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#FF00007C",
    padding: 20,
    marginVertical: 8,
    paddingHorizontal: 20,
    width: 350,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#FFFFFF78",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F50909C2",
  },
  title: {
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
    color: "#DA3636E1",
  },
  ListStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  coach: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#5A5858AF",
    fontSize: 20,
  },
  time: {
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
    color: "#FFFFFFCE",
  },
});
