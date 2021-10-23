// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import Stripe from '../../../src/Stripe'
// import { StripeProvider } from '@stripe/stripe-react-native'
// import { SafeAreaView, Button,  TextInput, onPressLearnMore,Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
// import {  Input, Image, text } from 'react-native-elements';
// export default function PaymentProfile() {
//   return (
//     <StripeProvider publishableKey = "pk_test_DLzU9mwQDCMvT6DebKsaiBxQ">
//     <Stripe/>
//     </StripeProvider>
//   )
// }

// const styles = StyleSheet.create({
  
// })
// import firebase from "firebase/app";
// import 'firebase/firestore';
// import "firebase/auth";
// import "firebase/database";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatButton from '../../../button';
import {firebase,auth,db} from '../../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { createCheckoutSession } from '../../../Stripe/createCheckoutSession';
import usePremiumStatus from '../../../Stripe/usePremiumStatus';


const PaymentProfile = () => {
  const [user,userLoading] = useAuthState(firebase.auth());
  const userIsPremium = usePremiumStatus(user);
  return (
    
    <View>
    {!user && userLoading && <Text>Loading...</Text>}
      {!user && !userLoading && <Login />}
    <Text> Hello, {user.displayName}</Text>
    {!userIsPremium?(
      <FlatButton
                text = "Sign Up" onPress= {() => createCheckoutSession(user.uid)} ></FlatButton>
                ):(<Text>Thanks for being apart of the Family</Text>)}
    </View>
  )
}

export default PaymentProfile

const styles = StyleSheet.create({})
