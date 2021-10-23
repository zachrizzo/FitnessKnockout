import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "react-native-elements/dist/helpers";
import { Divider } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";
import { Value } from "react-native-reanimated";
import { auth, db, firebase } from "/Users/zachrizzo/FitnessKnockout/firebase";

const VeganPizzaScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerBackTitle: "",
    });
  });
  const [ratings, setRatings] = useState([]);
  const [average, setAverage] = useState([]);
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  // const addRatingTodb = (rating) => {
  //   firebase
  //     .firestore()
  //     .collection("vegan_recipes")
  //     .doc("vegan_pizza")
  //     .collection("ratings")
  //     .set({ raitingIs: raiting });
  // };
  function ratingCompleted(rating) {
    // eslint-disable-next-line no-console

    console.log(`Rating is: ${rating}`);
    firebase
      .firestore()
      .collection("vegan_recipes")
      .doc("vegan_pizza")
      .collection("ratings")
      .doc(auth.currentUser.uid)
      .set({ Ratingis: rating });
  }
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
            ...documentSnapshot.data("Ratingis"),
            // source: documentSnapshot.image1,
            // key: documentSnapshot.id,
          });
        });
        var ratingLength = ratings.length;
        console.log(ratingLength);
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
          sum += ratings[i];
        }
        const average = sum + ratingLength;
        console.log(ratings);
        // setAverage(average);
        setRatings(ratings);
        setLoading(false);
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
      <ScrollView>
        <View styles={[styles.backgroundContainer]}>
          <View style={[styles.container]}>
            <Image
              style={[styles.image]}
              source={require("./veggie-pizza.jpeg")}
            ></Image>
          </View>
          <View>
            <Text style={[styles.textHeader]}>Vegan Pizza</Text>
          </View>
          <View>
            <Text style={[styles.ingredients]}>Ingredients</Text>
            <Text style={[styles.subHeader]}>Pizza Dough:</Text>
            <Text style={[styles.textBody]}>1 cup warm water</Text>
            <Text style={[styles.textBody]}>1 packet fast-acting yeast</Text>

            <View style={[styles.pizzadoughBody]}>
              <Text style={[styles.textBody]}>2 cups all-purpose floury</Text>
              <Text style={[styles.textBody]}>2 tablespoons olive oil</Text>
              <Text style={[styles.textBody]}>
                (+ more for seasoning crust)
              </Text>
              <Text style={[styles.textBody]}>
                2 tablespoons sugar , divided
              </Text>
              <Text style={[styles.textBody]}>
                1 teaspoon salt (+ more for crust)
              </Text>
              <Text style={[styles.textBody]}>½ teaspoon garlic powder</Text>
            </View>

            <Text style={[styles.subHeader]}>Toppings:</Text>
            <View style={[styles.pizzadoughBody]}>
              <Text style={[styles.textBody]}>½ cup marinara sauce</Text>
              <Text style={[styles.textBody]}>Vegan Mozzarella Cheese</Text>
              <Text style={[styles.textBody]}>½ cup fresh basil , chopped</Text>
              <Text style={[styles.textBody]}>
                1 ½ teaspoons Italian seasoning
              </Text>
              <Text style={[styles.textBody]}>
                1 teaspoon salt (+ more for crust)
              </Text>
              <Text style={[styles.textBody]}>½ teaspoon garlic powder</Text>
            </View>
          </View>
          <View style={[styles.pizzadoughBody]}>
            <Text style={[styles.ingredients]}>Instructions</Text>
            <Text style={[styles.subHeader]}>Pizza Dough:</Text>

            <Text style={[styles.textBody]}>
              1. Preheat oven to 500 degrees F.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              2. Stir yeast and ½ tablespoon sugar into warmed water until
              dissolved. Let it sit for 7-10 minutes, until foamy.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              3 In a large bowl, add the flour, garlic powder, salt and
              remaining sugar. Whisk to combine. Add the activated yeast to the
              bowl along with the olive oil. Mix until all ingredients are well
              combined and form a dough. If dough is too sticky, add a couple
              tablespoons of flour.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              4. Form the dough into a ball and place back in the bowl (*lightly
              dust bowl with flour before placing the dough ball in). Completely
              cover the bowl with a damp napkin or hand towel for 30 minutes or
              until dough doubles in size.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              5. *You'll need a pizza pan or large cutting board ready to
              transfer the pizza into and out of the oven, but you won't be
              cooking on it. The pizza will be cooked on parchment paper only.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              6. Place a large piece of parchment paper over your work area
              (about the size of your pan). Dust the paper with flour so you can
              spread your dough easily. * Cut the dough in half using a wet
              knife. This recipe makes two 10-inch pizzas. I make one pizza at a
              time. While one is cooking, I'll prepare the other.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              7. Using your hands, spread dough across the parchment paper into
              a round pizza shape to your desired thickness. I spread the dough
              pretty thin because it rises while cooking. The edges should be
              slightly thicker to form a pillowed crust.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              8.To season your crust, lightly brush with olive oil and sprinkle
              with salt and Italian herbs.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              9.Using a spoon, spread the sauce evenly over the pizza and top
              with the mozzarella.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              10.Carefully slide the parchment paper onto your pan to transfer
              to the oven. Now slide the parchment paper back off your pan and
              directly onto the middle oven rack.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              11.Bake for 10-15 minutes, until the crust is golden brown. The
              pizza cooks fast so keep an eye on it.
            </Text>

            <Text style={[styles.ingredients]}>Notes</Text>
            <Text style={[styles.bodyinstructions]}>
              * Makes 2 10-inch pizzas.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              * If the yeast doesn't foam up after 7- 10 minutes, start with a
              new packet. Make sure the water is warm, but not too hot or it
              won't work.
            </Text>
            <Text style={[styles.bodyinstructions]}>
              * Nutritional info does not contain the mozzarella cheese topping.
            </Text>

            <Text style={[styles.ingredients]}>Nutrition</Text>
            <Text style={[styles.bodyinstructions]}>
              Serving: 1Slice | Calories: 189kcal | Carbohydrates: 32g |
              Protein: 3g | Fat: 3g | Sodium: 345mg | Potassium: 71mg | Sugar:
              3g | Vitamin A: 125IU | Vitamin C: 1mg | Calcium: 9mg | Iron:
              1.6mg
            </Text>
          </View>
          <View style={{ marginBottom: 100 }}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={50}
              showRating
              startingValue={1}
              onFinishRating={ratingCompleted}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default VeganPizzaScreen;

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
    color: "#FF0000",
    alignSelf: "center",
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 30,
  },
  subHeader: {
    fontWeight: "bold",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    fontSize: 22,
    color: "black",
  },
  textBody: {
    alignSelf: "center",
    padding: 5,
    justifyContent: "center",
    fontSize: 20,
    color: "black",
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
    paddingBottom: 100,
  },
  pizzadoughBody: {
    paddingBottom: 50,
  },
  ingredients: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    fontSize: 22,
    color: "black",
  },
  bodyinstructions: {
    paddingHorizontal: 30,
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    fontSize: 20,
    color: "black",
  },
});
