import WelcomeScreens from "./app/assets/Screens/WelcomeScreens";
import * as React from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "./app/assets/Screens/SignupScreen";
import UserInfoPage from "./app/assets/Screens/UserInfoPage";
import HomeScreen from "./app/assets/Screens/HomeScreen";
import SubscriptionScreen from "./app/assets/Screens/SubscriptionScreen";
import WorkoutsScreen from "./app/assets/Screens/WorkoutsScreen";
import MealPlansScreen from "./app/assets/Screens/MealPlansScreen";
import Mealspage2 from "./app/assets/Screens/Mealspage2";
import BlueberrySmoothieScreen from "./app/assets/Screens/FoodRecipeScreens/BlueberrySmoothieScreen";
import VeganPizzaScreen from "./app/assets/Screens/FoodRecipeScreens/VeganPizzaScreen";
import createAppContainer from "./models/navagator";
import ShopScreen from "./app/assets/Screens/ShopScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BarcodeScreen from "./app/assets/Screens/BarcodeScreen";
import GymLocationScreen from "./app/assets/Screens/GymLocationScreen";
import PaymentProfile from "./app/assets/Screens/PaymentProfile";
import SupportScreen from "./app/assets/Screens/SupportScreen";
import NewLoginScreen from "./app/assets/Screens/NewLogInScreen";
import gilbertScheduleScreens from "./app/assets/Screens/Schedule pages/gilbertScheduleScreens";
import MondayScheduleGilbert from "./app/assets/Screens/Schedule pages/gilbert Schedule/MondaySchedule";
import TusedayScheduleGilbert from "./app/assets/Screens/Schedule pages/gilbert Schedule/TusedaySchedulegilbert";
import WorkoutsScreen2 from "./app/assets/Screens/WorkoutScreen2";
// import Stripe from './src/Stripe';
import schedule from "./app/assets/Screens/schedule";

//to do:
//fix permissions on database////////
//////-I think that it has to do with stripe permissions and customers colection through stripe(check webhooks too, try to reset all)
//fix payment method////////
//create home screen**************
//fix barcode********
//add list to barcode*********
//add search to foods///////
//add more foods
//add workout videos to database*******
//fix colors************
//center logo on login page***********
//add shop page////////
//add shadow on android********
//add all schedule//////
//add loading screen///////
//make all grays the same************
//add coach name and times to database**********
//add anamaitions
//replace flat list on home screen///////
//add raiting stystem

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const golbalScreenOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  headerTitle: { color: "#121111" },
  headerTintColor: "black",

  cardStyle: { backgroundColor: "#121111" },
};

const golbaldrawerOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  headerTitle: { color: "#121111" },
  headerTintColor: "black",
  headerShown: true,
  cardStyle: { backgroundColor: "#121111" },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={golbalScreenOptions}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={WelcomeScreens}
        />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={DrawerScreen}
        />
        <Stack.Screen name="User Info Page" component={UserInfoPage} />
        <Stack.Screen name="Payment Options" component={SubscriptionScreen} />
        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        <Stack.Screen name="MealPlans" component={Mealspage2} />
        <Stack.Screen
          name="BlueBerry Smoothie"
          component={BlueberrySmoothieScreen}
        />
        <Stack.Screen name="Vegan Pizza" component={VeganPizzaScreen} />
        <Stack.Screen name="Payment Profile" component={PaymentProfile} />
        <Stack.Screen name="New login Screen" component={NewLoginScreen} />
        <Stack.Screen
          name="Gilbert Schedule"
          component={gilbertScheduleScreens}
        />
        <Stack.Screen
          name="Gilbert Schedule Monday"
          component={MondayScheduleGilbert}
        />
        <Stack.Screen
          name="Gilbert Schedule Tuseday"
          component={TusedayScheduleGilbert}
        />
        <Stack.Screen name="Workout Screen 2" component={WorkoutsScreen2} />

        {/* <Stack.Screen name = "Stripe" component= {Stripe}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator screenOptions={golbaldrawerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="barcode" component={BarcodeScreen} />
      {/* <Drawer.Screen name="Gym Locations" component={GymLocationScreen} /> */}
      {/* <Drawer.Screen name="Shop" component={ShopScreen} />
      <Drawer.Screen name="Payment Profile" component={SubscriptionScreen} /> */}
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Schedule & News" component={schedule} />
    </Drawer.Navigator>
  );
}

// const MainNavigator = createDrawerNavagation({

// });
