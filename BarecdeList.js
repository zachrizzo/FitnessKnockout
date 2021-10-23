import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BarcodeList({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.barecode}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  barecode: {
    borderRadius: 40,
    backgroundColor: "#D4D4D4",
    alignSelf: "center",
    marginTop: 24,
    width: 400,
    height: 50,
  },

  buttonText: {
    color: "#FF3838E7",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 40,
    textAlign: "center",
  },
});
