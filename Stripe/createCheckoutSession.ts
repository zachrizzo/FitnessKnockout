import {auth,firebase }from "../firebase";
import initializeStripe from "./initializeStripe";
import getStripe from './initializeStripe'
import { Stripe, loadStripe } from "@stripe/stripe-js";
// import "firebase/auth";
// import "firebase/firestore";

export async function createCheckoutSession(uid: string) {
  const userId = auth.currentUser.uid;
  const priceId ="price_1JXaFJCg0T1oVbY0vNI0Y1B8"

  console.log('createChecksession', userId, priceId);
  const firestore = firebase.firestore();

  
  

  // Create a new checkout session in the subollection inside this users document
  const checkoutSessionRef = await firestore
  
    .collection("customers")
    .doc(userId)
    .collection("checkout_sessions")
    .add({
      price:priceId,
      // success_url: window.location.origin,
      // cancel_url: window.location.origin,
    });

  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
     const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}