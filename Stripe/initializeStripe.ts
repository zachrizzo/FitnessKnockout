import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    
    stripePromise = await loadStripe('pk_test_DLzU9mwQDCMvT6DebKsaiBxQ');
  }
  
  return stripePromise;
};

export default initializeStripe;