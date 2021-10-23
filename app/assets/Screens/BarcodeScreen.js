import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  State,
  Switch,
  Alert,
} from "react-native";
import { Overlay } from "react-native-elements";
// import Barcode from "react-native-barcode-builder";
import Barcode from "react-native-barcode-expo";
import { LinearGradient } from "expo-linear-gradient";
import BarcodeList from "../../../BarecdeList";
import FlatButton from "../../../button";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { firebase, db, auth, database } from "../../../firebase";

const BarcodeScreen = () => {
  const [barcodeValue, onChangeText] = useState(null);
  const [barcodelist, setBarcodelist] = useState(null);
  const [changebarcode, setChangebarcode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(null);

  const addbarcodetodb = () => {
    firebase
      .firestore()
      .collection("customers")
      .doc(auth.currentUser.uid)
      .collection("barcodes")
      .doc(barcodeValue)
      .set({ barcode: barcodeValue, name: name });
  };
  const toggleToDelete = () => {
    if (isEnabled)
      return <Text style={[styles.switchText]}>Toggle to not cancel</Text>;
    else return <Text style={[styles.switchText]}>Toggle to delete</Text>;
  };
  const toggleToDeleteInstructions = () => {
    if (isEnabled)
      return (
        <Text style={[styles.switchTextInstructions]}>
          Tap on barcode number to delete
        </Text>
      );
    else return null;
  };
  const toggleToDeleteTitle = () => {
    if (isEnabled) return <Text style={[styles.title]}>Tap to delete</Text>;
    else return <Text style={[styles.title]}>Add Barcode </Text>;
  };

  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("customers")
      .doc(auth.currentUser.uid)
      .collection("barcodes")
      //   .get()
      .onSnapshot((querySnapshot) => {
        const barcodelist = [];
        querySnapshot.forEach((documentSnapshot) => {
          barcodelist.push({
            ...documentSnapshot.data(),

            key: documentSnapshot.id,
          });
        });

        setBarcodelist(barcodelist);
        setLoading(true);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#FFFFFF", "#FFFFFF"]}
      style={styles.background}
    >
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}></View>
        {toggleToDeleteTitle()}
        <View style={[styles.barcode]}></View>
        <View>
          <TextInput
            style={styles.input}
            // value={text,number}
            placeholder="Who's baercode is this?"
            // secureTextEntry type = 'password'
            value={name}
            onChangeText={setName}
            //onSubmitEditing = {SignIn}
            padding="5%"
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            // value={text,number}
            placeholder="Add Barcode"
            // secureTextEntry type = 'password'
            value={!barcodeValue}
            onChangeText={onChangeText}
            //onSubmitEditing = {SignIn}
            padding="5%"
          />
        </View>
        <View>
          <FlatButton text="Add Barcode" onPress={addbarcodetodb}></FlatButton>
        </View>
        <View style={[styles.deleteSwitch]}>
          {toggleToDelete()}
          <Switch
            trackColor={{ false: "#767577", true: "#5bc236" }}
            thumbColor={isEnabled ? "#F4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* {toggleToDeleteInstructions()} */}
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            style={{ flex: 1, paddingTop: 15 }}
            data={barcodelist}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    const deletebarcode = () => {
                      firebase
                        .firestore()
                        .collection("customers")
                        .doc(auth.currentUser.uid)
                        .collection("barcodes")
                        .doc(item.barcode)
                        .delete()
                        .then(() => {
                          Alert.alert(
                            "barecode deleted!",
                            "Your barecode has been deleted successfully!"
                          );
                          setDeleted(true);
                        })
                        .catch((e) => console.log("Error deleting posst.", e));
                    };
                    if (isEnabled) {
                      deletebarcode();
                    } else {
                      return null;
                    }
                  }}
                >
                  <Barcode
                    value={item.barcode}
                    format="CODE128"
                    style={[styles.barcodebarcode]}
                  />
                  <Text style={[styles.barcodename]}> {item.name}</Text>

                  <BarcodeList
                    text={item.barcode}
                    onPress={() => {
                      const deletebarcode = () => {
                        firebase
                          .firestore()
                          .collection("customers")
                          .doc(auth.currentUser.uid)
                          .collection("barcodes")
                          .doc(item.barcode)
                          .delete()
                          .then(() => {
                            Alert.alert(
                              "barecode deleted!",
                              "Your barecode has been deleted successfully!"
                            );
                            setDeleted(true);
                          })
                          .catch((e) =>
                            console.log("Error deleting posst.", e)
                          );
                      };
                      if (isEnabled) {
                        deletebarcode();
                      } else {
                        return null;
                      }
                    }}
                  ></BarcodeList>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default BarcodeScreen;

const styles = StyleSheet.create({
  barcode: {
    paddingTop: 25,
    paddingBottom: 20,
  },
  background: {
    flex: 1,
  },

  input: {
    height: 65,
    margin: 12,
    borderWidth: 2,
    borderColor: "#D4D4D4",
    borderRadius: 50,
    padding: 30,

    backgroundColor: "#CFCFCF",
  },
  barcodebarcode: {
    height: 50,
    width: 80,
    marginTop: 10,
  },
  deleteSwitch: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingTop: 20,
  },
  switchText: {
    alignSelf: "center",
    paddingRight: 15,
    fontSize: 16,
    color: "#8D8D8DD0",
  },
  switchTextInstructions: {
    fontSize: 25,
    color: "#D3242485",
  },
  title: {
    fontSize: 50,
    color: "red",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  barcodename: {
    fontSize: 20,
    fontWeight: "700",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 5,
  },
});
