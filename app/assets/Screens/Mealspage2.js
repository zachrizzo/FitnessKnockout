import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import ImagedCardView from "react-native-imaged-card-view";
import { Animated } from "react-native";
import { firebase, db, database } from "../../../firebase";

const Mealspage2 = ({ navigation }) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [food, setFood] = useState([]); // Initial empty array of users
  const [ratings, setRatings] = useState([]);
  const [average, setAverage] = useState([]);

  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("vegan_recipes")
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
  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("vegan_recipes")
      .doc("vegan_pizza")
      .collection("ratings")
      .onSnapshot((querySnapshot) => {
        const ratings = [];
        querySnapshot.forEach((documentSnapshot) => {
          ratings.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });
        var ratingLength = ratings.length;
        console.log(ratingLength);
        const zach = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < zach.length; i++) {
          sum += zach[i];
        }
        const average = sum / ratingLength;
        console.log(average);
        setAverage(average);
        setRatings(ratings);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  const ITEM_SIZE = 100 + 80 * 3;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Animated.FlatList
        style={[styles.shadow]}
        data={food}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityinputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityinputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                backgroundColor: "#FFFFFF",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                transform: [{ scale }],
                opacity,
              }}
            >
              <ImagedCardView
                style={[styles.container]}
                stars={average}
                onPress={() => navigation.navigate(item.onPress)}
                title={item.Title}
                rightSideValue={item.time}
                subtitle={item.subTitle}
                leftSideValue={item.calories}
                backgroundColor="#FFFFFF"
                source={{
                  uri: item.url,
                }}
              ></ImagedCardView>
            </Animated.View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Mealspage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // transform: [{ scale }],
    // opacity,
  },
  // shadow:{
  //   shadowColor: "#000",
  //       shadowOffset: {
  //           width: 0,
  //           height: 8,
  //       },
  //       shadowOpacity: 0.44,
  //       shadowRadius: 10.32,

  //       elevation: 16,
  // },
  title: {
    fontSize: 32,
  },
});
