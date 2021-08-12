import Stripe from "stripe"

import Cors from "micro-cors"

import getRawBody from "raw-body"
import getDatabase from "../../lib/getDatabase"


const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SKEY);

async function createReservation(reservation, ) {
  const conn = getDatabase();
  conn.query("INSERT INTO reservations (date, time, guests, created_by) VALUES ($1, $2, $3, $4)",
    [reservation.date, reservation.time, reservation.guest, reservation.uuid])
}

export default cors(async function(req, res) {
  const sig = req.headers["stripe-signature"];
  const buf = await getRawBody(req);

  try {
    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type == "checkout.session.completed") {
      const checkout = await stripe.checkout.sessions.retrieve(event.data.object.id);
      const reservation = checkout.metadata;
      await createReservation(reservation);
      res.status(200).json({ result: "ok" });
    }
  } catch(error) {
    console.log(error);
  }
});