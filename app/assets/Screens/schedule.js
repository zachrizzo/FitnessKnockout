import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { Button } from "react-native-elements/dist/buttons/Button";

const schedule = ({ navigation }) => {
  return (
    <ScrollView
      style={{ backgroundColor: "#FFFFFF" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container]}>
        <Text style={[styles.Headertext]}>Pick a location</Text>
      </View>
      <View style={[styles.Button]}>
        <TouchableOpacity
          style={[styles.touch]}
          onPress={() => navigation.navigate("Gilbert Schedule")}
        >
          <ImagedCarouselCard
            text="Knockout Gilbert"
            height={250}
            width={310}
            shadowColor="#051934"
            source={require("../Screens/FoodRecipeScreens/blueberry-smoothie-straight-on.jpeg")}
            overlayBackgroundColor="#0000006C"
          />
          <View style={[styles.textview]}>
            <Text style={[styles.text]}>
              Phone Number: {"\n"}480-599-0051{"\n"}Address: {"\n"}1551 E.
              Elliot Rd.{"\n"}
              Gilbert, az 85234
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.Button]}>
        <TouchableOpacity
          style={[styles.touch]}
          onPress={() => navigation.navigate("MealPlans")}
        >
          <ImagedCarouselCard
            text="Knockout Goodyear"
            height={250}
            width={310}
            shadowColor="#051934"
            source={require("../Screens/FoodRecipeScreens/blueberry-smoothie-straight-on.jpeg")}
            overlayBackgroundColor="#0000006C"
          />
          <View style={[styles.textview]}>
            <Text style={[styles.text]}>
              Phone Number: {"\n"}602-309-5504{"\n"}Address: {"\n"}13215 w.
              McDowell Rd.{"\n"}
              Goodyear, Az 85395
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default schedule;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  Headertext: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 30,
  },
  Button: {
    alignItems: "center",

    marginTop: 30,
    paddingBottom: 50,
  },
  touch: {
    backgroundColor: "#F8F8F8",
    height: 500,
    width: 350,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 35,
    // paddingRight:80,
    // paddingTop: 10
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  textview: {
    paddingTop: 10,
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    color: "#000000",
  },
});
