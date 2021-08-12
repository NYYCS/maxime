import { getSession } from "next-auth/client";

import getDatabase from "../../lib/getDatabase"
import Stripe from "stripe"


const stripe = new Stripe('sk_test_51JKweCCK8vBuAGFhY2KkKHTvkc43l1arB2UiA46vLrwmvDOehl4c4ibXhgYnjvI7BMsqLGyl8LoAkjxKDqqMXR8q001GYb69YR');

async function createCheckout(reservation, uuid) {
  const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Reservation Fee",
              description: `Table for ${reservation.guest} guests on
              ${new Date(reservation.date).toLocaleDateString("en-gb", {day: "numeric", month: "long", year: "numeric"})}, 
              ${reservation.time}`,
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      metadata: {
        uuid: uuid,
        date: reservation.data,
        time: reservation.time,
        guest: reservation.guest.toString(),
      },
      success_url: `http://localhost:3000/reservation/`,
      cancel_url: `http://localhost:3000/reservation/`,
    })
  return session;
}

async function validateReservation(reservation) {
  const conn = getDatabase();
  const reservations = await conn.query("SELECT * FROM reservations WHERE date = $1", [reservation.date]);
  return reservations.rows.length == 0;
}

export default async function(req, res) {
  const reservation = JSON.parse(req.body);
  const session = await getSession({ req });
  
  if (session && await validateReservation(reservation)) {
    try {
      const checkoutSession = await createCheckout(reservation, session.user.uuid);
      console.log(checkoutSession.id);
      res.status(200).json({data: checkoutSession.id})
    } catch (error) {
      console.warn(error);
    }
  }
}