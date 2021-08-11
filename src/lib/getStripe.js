import { loadStripe } from "@stripe/stripe-js"

let stripe = null;

async function getStripe() {
  if (!stripe) {
    stripe = await loadStripe("pk_test_51JKweCCK8vBuAGFhAxwENGPDaOFWMk4zSZcIhShhiCR2Apifjd0xwR9nBr1VrRKItBFedHjzazADFrJ7f3cjrnuP00Ah49p9HX");
  }
  return stripe;
}

export default getStripe;