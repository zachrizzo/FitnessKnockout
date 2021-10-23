import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "react-native-elements/dist/helpers";
import { Divider } from "react-native-elements";
const BlueberrySmoothieScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerBackTitle: "",
    });
  });

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#FFFFFF", "#FFFFFF"]}
      style={styles.background}
    >
      <ScrollView>
        <View styles={[styles.backgroundContainer]}>
          <View style={[styles.container]}>
            <Image
              style={[styles.image]}
              source={require("./blueberry-smoothie-straight-on.jpeg")}
            ></Image>
          </View>
          <View>
            <Text style={[styles.textHeader]}>BlueBerry Smoothie</Text>
          </View>
          <View>
            <Text style={[styles.textBody]}>1 cup warm water</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
            <Text style={[styles.textBody]}>4 ounce of BlueBerry</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BlueberrySmoothieScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 20,
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },

  image: {
    borderRadius: 40,
    width: 300,
    height: 400,
    paddingTop: 100,
  },

  textHeader: {
    justifyContent: "center",
    color: "red",
    alignSelf: "center",
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 30,
  },
  textBody: {
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
    fontSize: 20,
    color: "white",
  },

  background: {
    flex: 1,
  },

  backgroundContainer: {
    flex: 1,
    width: 450,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 40,
  },
});
