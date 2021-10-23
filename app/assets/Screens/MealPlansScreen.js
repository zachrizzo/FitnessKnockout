import React, { useLayoutEffect, state, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Animated,
} from "react-native";
import { SearchBar } from "react-native-elements";
import ImagedCardView from "react-native-imaged-card-view";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from "react-native-paper";

const MealPlansScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Plans",
      headerBackTitle: "",
    });
  }, []);
  const ITEM_SIZE = 160;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const inputItem = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#FFFFFF", "#FFFFFF"]}
      style={styles.background}
    >
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {this.state.items.map((item, i) => (
          <Item onPress={() => this.onclick(i)} {...item} />
        ))}
        <View styles={{ height: 200 }} />
        {/* <View styles ={[styles.container ]}>
        <Searchbar style = {[styles.SearchBar]}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    /></View> */}
        <View style={[styles.container]}>
          <ImagedCardView
            onPress={() => navigation.navigate("BlueBerry Smoothie")}
            style={[styles.container]}
            stars={5}
            reviews={115 + 10}
            ratings={5.0}
            title="Blue Berry"
            rightSideValue="10 min"
            subtitle="Vegan"
            leftSideValue="800"
            backgroundColor="#FFFFFF"
            source={require("./FoodRecipeScreens/blueberry-smoothie-straight-on.jpeg")}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={["rgba(46, 62, 105, 1)", "rgba(24, 27, 33, 1)"]}
              style={styles.background}
            />
          </ImagedCardView>
        </View>
        <View style={[styles.container]}>
          <ImagedCardView
            onPress={() => navigation.navigate("Vegan Pizza")}
            style={[styles.container]}
            stars={5}
            reviews={456}
            ratings={4.5}
            title="pizza"
            rightSideValue="60min"
            subtitle="Vegan"
            leftSideValue="189kcal"
            //   backgroundColor="#7BAAC5"
            backgroundColor="#FFFFFF"
            source={require("./FoodRecipeScreens/veggie-pizza.jpeg")}
          />
        </View>

        <View style={[styles.container]}>
          <ImagedCardView
            style={[styles.container]}
            stars={5}
            reviews={456}
            ratings={4.5}
            title="Yosemite"
            rightSideValue="$990"
            subtitle="California"
            leftSideValue="3 Days"
            backgroundColor="#FFFFFF"
            //   source={{
            //     uri: yosemite
            //   }}
          />
        </View>
        <View style={[styles.container]}>
          <ImagedCardView
            style={[styles.container]}
            stars={5}
            reviews={456}
            ratings={4.5}
            title="Yosemite"
            rightSideValue="$990"
            subtitle="California"
            leftSideValue="3 Days"
            backgroundColor="#FFFFFF"
            source={require("./FoodRecipeScreens/blueberry-smoothie-straight-on.jpeg")}
          />
        </View>

        <View style={[styles.container]}>
          <ImagedCardView
            style={[styles.container]}
            stars={5}
            reviews={456}
            ratings={4.5}
            title="Yosemite"
            rightSideValue="$990"
            subtitle="California"
            leftSideValue="3 Days"
            backgroundColor="#FFFFFF"
            source={require("./FoodRecipeScreens/blueberry-smoothie-straight-on.jpeg")}
          />
        </View>
      </Animated.ScrollView>
    </LinearGradient>
  );
};

export default MealPlansScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    flexDirection: "column",
    // alignItems: 'center',
    justifyContent: "space-evenly",
  },

  card: {
    paddingBottom: 50,
  },

  background: {
    flex: 1,
  },
  overlay: {
    borderRadius: 40,
    width: 300,
    backgroundColor: "#E03232",
  },
  SearchBar: {
    borderRadius: 20,
  },

  searchview: {
    paddingBottom: 20,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
