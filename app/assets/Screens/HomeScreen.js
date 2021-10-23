import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  SafeAreaView,
  Button,
  View,
  StyleSheet,
  setValue,
  Text,
  style,
  TextInput,
  onPressLearnMore,
  Alert,
  Image,
  FlatList,
} from "react-native";
import { ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import { auth, db, firebase } from "../../../firebase";
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { Animated } from "react-native";
import { Dimensions } from "react-native";
const HomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const isDrawerOpen = useDrawerStatus() === "open";
  const [selectedId, setSelectedId] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const width = Dimensions.get("window").width;
  const ITEM_SIZE = 250 + 15 * 3;
  const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  // const workout =  firestore().collection('WorkoutVideos').doc('Videos').get();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerTitleStyle: {
        // headerTitleStyle: {
        //     // alignSelf: 'center',
        //     // textAlign: "center",
        //     // justifyContent: 'center',
        //     // flex: 1,
        //     fontWeight: 'bold',
        //     // textAlignVertical: 'center'
        // },
      },

      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            {/* <Avatar rounded source = {{uri: auth?.currentUser.photoURL}}/> */}
            <FontAwesome name="bars" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("User Info Page")}
          >
            {/* <Avatar rounded source = {{uri: auth?.currentUser.photoURL}}/> */}
            <Octicons name="person" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  // const addUserTodb = () => {
  //   db.collection("customers")
  //     .doc(auth.currentUser.uid)
  //     .set({
  //       uid: auth.currentUser.uid,
  //       email: auth.currentUser.email,
  //       Firstname: auth.currentUser.displayName,
  //       lastName: auth.currentUser.uid,
  //       provider: auth.currentUser.providerData[0].providerId,
  //       Phonenumber: auth.currentUser.uid,
  //       New: "new",
  //     })
  //     .catch((error) => alert(error.message));
  // };
  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("home_screen_workouts")
      // .doc("Weight_Training")
      .onSnapshot((querySnapshot) => {
        const workouts = [];
        querySnapshot.forEach((documentSnapshot) => {
          workouts.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setWorkouts([
          { key: "left-spacer" },
          ...workouts,
          { key: "right-spacer" },
        ]);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("home_screen_food")
      // .doc("Weight_Training")
      .onSnapshot((querySnapshot) => {
        const food = [];
        querySnapshot.forEach((documentSnapshot) => {
          food.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setFood(food);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // Background Linear Gradient

        style={[styles.background]}
      >
        <Text style={[styles.foodtittle]}>Workouts</Text>
        <Animated.FlatList
          horizontal={true}
          // snap feature
          snapToInterval={ITEM_SIZE}
          decelerationRate={0}
          bounces={true}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          style={{ paddingLeft: 15, paddingTop: 20 }}
          data={workouts}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 0.4) * ITEM_SIZE,
              (index + 0) * ITEM_SIZE,
            ];

            // const inputRange = [
            //   -1,
            //   0,
            //   ITEM_SIZE * index,
            //   ITEM_SIZE * (index + 2),
            // ];
            const opacityinputRange = [
              (index - 1) * ITEM_SIZE,
              (index + 5) * ITEM_SIZE,
              (index + 6) * ITEM_SIZE,
            ];
            if (!item.url)
              return <View style={{ width: SPACER_ITEM_SIZE }}></View>;
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -40, 0],
            });
            const opacity = scrollX.interpolate({
              inputRange: opacityinputRange,
              outputRange: [1, -2, 0],
            });

            return (
              <Animated.View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  marginTop: 20,
                  // marginLeft: 85,
                  paddingBottom: 5,
                  paddingRight: 50,
                  // paddingLeft: 65,
                  paddingTop: 20,
                  marginBottom: 30,
                  transform: [{ translateY }],
                  opacity,
                }}
              >
                <TouchableOpacity
                  style={[styles.opacity]}
                  onPress={() => navigation.navigate(item.onPress)}
                >
                  <ImagedCarouselCard
                    text={item.Title}
                    height={200}
                    width={250}
                    shadowColor="#051934"
                    source={{ url: item.url }}
                  />
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          keyExtractor={(item, index) => item.key}
          showsHorizontalScrollIndicator={false}
        />

        <View style={[styles.lineView]}>
          <View style={[styles.horizonalLine]}></View>
        </View>
        {/* </ScrollView> */}
        <Text style={[styles.foodtittle]}>Food</Text>
        <View
          style={[
            styles.container,
            {
              flexDirection: "column",
            },
          ]}
        >
          <FlatList
            style={[styles.shadow]}
            data={food}
            // horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  paddingBottom: 50,
                  paddingRight: 20,
                  paddingLeft: 20,
                  paddingTop: 20,
                }}
                key={item.id}
              >
                <TouchableOpacity
                  style={[styles.opacity]}
                  onPress={() => navigation.navigate(item.onPress)}
                >
                  <ImagedCarouselCard
                    text={item.Title}
                    height={250}
                    width={350}
                    shadowColor="#051934"
                    elevation={16}
                    source={{ url: item.url }}
                    overlayBackgroundColor="#0000006C"
                  />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    // marginHorizontal:20,
  },

  button: {
    padding: 20,
    marginHorizontal: 20,
  },
  background: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  workoutImage: {
    height: 30,
    width: 400,
    flex: 1,
  },
  opacity: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  horizonalLine: {
    height: 8,
    width: 300,
    borderRadius: 50,
    backgroundColor: "#FF0000CC",
    alignSelf: "center",
  },
  foodtittle: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 35,
    marginTop: 12,
    color: "#F022229F",
  },
});
