import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  StatusBar,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Constants } from "expo";
import {
  firebase,
  db,
  database,
} from "/Users/zachrizzo/FitnessKnockout/firebase";
const gilbertScheduleScreens = ({ navigation }) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [news, setNews] = useState([]); // Initial empty array of users

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Gilbert Schedule",
      headerBackTitle: "",
    });
  }, []);

  useEffect((onPress) => {
    const subscriber = firebase
      .firestore()

      .collection("gym_location_and_info")
      .doc("gilbert")
      .collection("news")
      .onSnapshot((querySnapshot) => {
        const news = [];
        querySnapshot.forEach((documentSnapshot) => {
          news.push({
            ...documentSnapshot.data(),
            // source: documentSnapshot.image1,
            key: documentSnapshot.id,
          });
        });

        setNews(news);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 10, backgroundColor: "#ffffff" }}>
      <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <View style={[styles.NavBackground]}>
          <ScrollView horizontal={true}>
            <View style={[styles.dayButtonView]}>
              <TouchableOpacity
                style={[styles.dayButton]}
                onPress={() => navigation.navigate("Gilbert Schedule Monday")}
              >
                <Text style={[styles.dayButtonText]}>Monday</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: 20 }}>
                <TouchableOpacity
                  style={[styles.dayButton]}
                  onPress={() =>
                    navigation.navigate("Gilbert Schedule Tuseday")
                  }
                >
                  <Text style={[styles.dayButtonText]}>Tuseday</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.dayButtonView]}>
              <TouchableOpacity style={[styles.dayButton]}>
                <Text style={[styles.dayButtonText]}>Wednesday</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: 20 }}>
                <TouchableOpacity style={[styles.dayButton]}>
                  <Text style={[styles.dayButtonText]}>Thursday</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.dayButtonView]}>
              <TouchableOpacity style={[styles.dayButton]}>
                <Text style={[styles.dayButtonText]}>Friday</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: 20 }}>
                <TouchableOpacity style={[styles.dayButton]}>
                  <Text style={[styles.dayButtonText]}>Saturday</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.dayButtonView]}>
              <TouchableOpacity style={[styles.dayButton]}>
                <Text style={[styles.dayButtonText]}>Sunday</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={[styles.lineView]}>
        <View style={[styles.horizonalLine]}></View>
      </View>
      <View
        style={{
          // alignItems: "center",
          // justifyContent: "space-evenly",
          paddingTop: 20,
          flex: 1,
        }}
      >
        <View style={[styles.newsView]}>
          <Text style={[styles.Newsheader]}>News</Text>
        </View>
        <View style={[styles.flatListView]}>
          <FlatList
            style={{ flex: 1 }}
            data={news}
            renderItem={({ item }) => (
              <View style={[styles.newsItemView]}>
                <Text style={[styles.newsItemTitle]}>{item.Title}</Text>
                <Image
                  source={{ uri: item.url }}
                  style={[styles.newsImage]}
                ></Image>
                <Text style={[styles.newsItemBody]}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default gilbertScheduleScreens;

const styles = StyleSheet.create({
  dayButtonView: {
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  dayButton: {
    height: 40,
    width: 150,
    borderRadius: 30,
    backgroundColor: "#888888BB",
    justifyContent: "center",
    alignItems: "center",
  },
  dayButtonText: {
    fontSize: 18,
  },

  NavBackground: {
    paddingTop: 10,
    paddingBottom: 20,
    width: 380,
    height: 140,
    backgroundColor: "#85858583",
    borderRadius: 10,
    justifyContent: "center",
  },
  horizonalLine: {
    height: 8,
    width: 300,
    borderRadius: 50,
    backgroundColor: "#FF0000CC",
    alignSelf: "center",
  },
  lineView: {
    paddingTop: 30,
  },

  Newsheader: {
    fontSize: 35,
    alignSelf: "center",
  },
  newsView: {
    paddingTop: 5,
    paddingBottom: 20,
    justifyContent: "space-evenly",
  },
  newsItemView: {
    // minHeight: 300,
    // maxHeight: 600,
    width: 390,
    borderRadius: 40,
    backgroundColor: "#C3C3C3",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  newsImage: {
    height: 250,
    width: 350,
    borderRadius: 30,
  },
  newsItemTitle: {
    fontSize: 28,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10,
  },
  newsItemBody: {
    fontSize: 22,
    textAlign: "center",
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },
  flatListView: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
});
