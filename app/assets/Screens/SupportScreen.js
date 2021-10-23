import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  State,
  Switch,
  FlatList,
} from "react-native";

import FlatButton from "../../../button";

import { auth, db, firebase } from "../../../firebase";

const SupportScreen = () => {
  const [problem, setProblem] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [number, setNumber] = useState(null);
  const [replys, setReplys] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [admin, setAdmin] = useState(null);
  const adminuid = "ZAxXNqw94aQ2E66Qn0MIlstvInY2";

  const authpermissions = () => {
    if (auth.currentUser.uid == adminuid)
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={[styles.switchText]}>Toggle for admin permissions</Text>
          <View style={[styles.deleteSwitch]}>
            <Switch
              trackColor={{ false: "#767577", true: "#5bc236" }}
              thumbColor={isEnabled ? "#F4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      );
  };
  const addReplyTodb = () => {
    firebase
      .firestore()
      .collection("customers")
      .doc(auth.currentUser.uid)
      .collection("support")
      .add({
        Report: problem,
        FullName: fullname,
        uid: auth.currentUser.uid,
        Phone: number,
      });
  };
  const adminreply = () => {
    if (isEnabled)
      return (
        <View>
          <View>
            <TextInput
              style={styles.input}
              // value={text,number}
              placeholder="Reply"
              // secureTextEntry type = 'password'
              value={replys}
              onChangeText={setReplys}
              //onSubmitEditing = {SignIn}
              padding="5%"
            />
          </View>
          <View style={[styles.sendbutton]}>
            <FlatButton text="Send" onPress={addRequesttodb}></FlatButton>
          </View>
        </View>
      );
    else
      return (
        <View>
          <View>
            <TextInput
              style={styles.input}
              // value={text,number}
              placeholder="Full Name"
              // secureTextEntry type = 'password'
              value={fullname}
              onChangeText={setFullname}
              //onSubmitEditing = {SignIn}
              padding="5%"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              // value={text,number}
              placeholder="Phone Number"
              // secureTextEntry type = 'password'
              value={number}
              onChangeText={setNumber}
              //onSubmitEditing = {SignIn}
              padding="5%"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              // value={text,number}
              placeholder="What can we help you with?"
              // secureTextEntry type = 'password'
              value={problem}
              onChangeText={setProblem}
              //onSubmitEditing = {SignIn}
              padding="5%"
            />
          </View>
          <View style={[styles.sendbutton]}>
            <FlatButton text="Send" onPress={addRequesttodb}></FlatButton>
          </View>
        </View>
      );
  };

  const addRequesttodb = () => {
    firebase
      .firestore()
      .collection("customers")
      .doc(auth.currentUser.uid)
      .collection("support")
      .add({
        Report: problem,
        FullName: fullname,
        uid: auth.currentUser.uid,
        Phone: number,
      });
  };
  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("customers")
      .doc(auth.currentUser.uid)
      .collection("support")
      .onSnapshot((querySnapshot) => {
        const replys = [];
        querySnapshot.forEach((documentSnapshot) => {
          replys.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setReplys(replys);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Text style={[styles.title]}>Need help?</Text>

      {authpermissions()}
      {adminreply()}

      <View style={[styles.lineView]}>
        <View style={[styles.horizonalLine]}></View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={replys}
        Vertical={true}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row-reverse" }}>
            <View style={[styles.problemView]}>
              <Text style={[styles.problemText]}>{item.Report}</Text>
              <View style={[styles.fullnameView]}>
                <Text style={[styles.fullname]}>{fullname}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  input: {
    height: 65,
    margin: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#D4D4D4",
    borderRadius: 50,
    padding: 30,
    marginHorizontal: 30,

    backgroundColor: "#CFCFCF",
  },
  title: {
    justifyContent: "flex-start",
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "600",
    color: "#FF0000B6",
    marginBottom: 30,
    marginTop: 20,
  },
  problemView: {
    backgroundColor: "#ADADADA9",
    paddingBottom: 10,
    borderBottomRightRadius: 0,
    paddingTop: 10,
    borderRadius: 40,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 30,
    marginLeft: 30,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  problemText: {
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  fullname: {
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    color: "#3B3B3BD7",
  },
  fullnameView: {
    flexDirection: "row-reverse",
  },
  sendbutton: {
    marginBottom: 20,
    marginTop: 5,
  },
  deleteSwitch: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingTop: 20,
    marginRight: 20,
  },
  switchText: {
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginRight: 10,
    fontSize: 16,
    color: "#8A8787D5",
  },
});
