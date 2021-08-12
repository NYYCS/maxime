import Stripe from "stripe"

import Cors from "micro-cors"

import getRawBody from "raw-body"
import getDatabase from "../../lib/getDatabase"

const WEBHOOK_SECRET = "whsec_CUKs3M3KAKhyZVu8hYX5m4xP2Tj2aA12"

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe("sk_test_51JKweCCK8vBuAGFhY2KkKHTvkc43l1arB2UiA46vLrwmvDOehl4c4ibXhgYnjvI7BMsqLGyl8LoAkjxKDqqMXR8q001GYb69YR");

async function createReservation(reservation, userUuid) {
  const conn = getDatabase();
  conn.query("INSERT INTO reservations (date, time, guests created_by) VALUES ($1, $2, $3, $4)",
    [reservation.date, reservation.time, reservation.guests, userUuid])
}

export default async function(req, res) {
  res.status(200);
  //const sig = req.headers["stripe-signature"];
  //const buf = await getRawBody(req);
//
  //try {
  //  const event = stripe.webhooks.constructEvent(buf, sig, WEBHOOK_SECRET);
  //  if (event.type == "checkout.session.completed") {
  //    const checkout = await stripe.checkout.sessions.retrieve(event.data.object.id);
  //    const reservation = checkout.metadata;
  //    await createReservation(reservation, userUuid);
  //    res.statusCode(200);
  //    res.end();
  //  }
  //} catch(error) {
//
  //}
};