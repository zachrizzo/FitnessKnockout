import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Button,
  View,
  StyleSheet,
  TextInput,
  onPressLearnMore,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Input, Image, text } from "react-native-elements";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { StatusBar } from "expo-status-bar";
import FlatButton from "../../../button";
import { ScrollView } from "react-native";
import { auth, firebase } from "../../../firebase";

const WelcomeScreen = ({ navigation }) => {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser != null) {
        navigation.replace("Home");
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);
  const SignIn = () => {
    auth
      .signInWithEmailAndPassword(Email, Password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{ flex: 1, backgroundColor: "#121111" }}
    >
      <SafeAreaView>
        <StatusBar style="dark-context" />
        <Image
          source={require("../Knockout-Fitness-logo-2.png")}
          style={styles.logo}
        ></Image>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoFocus
          type="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          padding="5%"
        />

        <TextInput
          style={styles.input}
          // value={text,number}
          placeholder="Password"
          secureTextEntry
          type="password"
          value={Password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={SignIn}
          padding="5%"
        />
        <View style={{ height: 15 }} />
        <FlatButton text="Sign In" onPress={SignIn}></FlatButton>
        <View style={{ height: 10 }} />
        <FlatButton
          text="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        ></FlatButton>
        <View style={{ height: 100 }} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  // container: {flex: 1,
  //     alignItems:"center",
  //     justifyContent: "center",
  //     padding: 10,
  //     backgroundColor:'#121111' },

  input: {
    height: 65,
    margin: 12,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 50,
    padding: 30,

    backgroundColor: "#8C8C8C",
  },

  background: {
    backgroundColor: "#121111",
    flex: 1,
    // padding: 20,
    //justifyContent:'flex-end'
  },

  logo: {
    //paddingRight:415,
    justifyContent: "center",
    //paddingTop: 300,
    alignItems: "center",
    alignContent: "center",
    width: 430,
    height: 200,
  },

  button: {
    width: 200,
    marginTop: 10,
    // width: '100%',

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 40,
    paddingBottom: 50,
  },
});

// const mainContainer = StyleSheet.create({
//     container: {flex:1,
//     alignItems:"center",
//     justifyContent: "center",
//     padding: 5,
//     backgroundColor:'#121111' }
// })

// const logo= StyleSheet.create({
//     logo:{
//         paddingRight:430,
//         justifyContent: 'flex-start',
//         paddingTop: 300,

//         width: 200,
//         height: 200,
//        }
// })

// const buttonOne = StyleSheet.create({
//    ScreenContainer:{    flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//     borderWidth : 2,
//     borderColor :'#ffff'

//     }

// })
