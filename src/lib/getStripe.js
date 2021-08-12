import { loadStripe } from "@stripe/stripe-js"

let stripe = null;

async function getStripe() {
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PKEY);
  }
  return stripe;
}

export default getStripe;