const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KkTC1FPcJsZJgiKHLxiOo56wGcDOPXPEzgdN8s3g2I20SIjiTaKreAqfx7Tc2BeKpbJfuPn27m9ptrrsdfBpbc500dMypXeRz"
);

// Api

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) =>
  response.status(200).send("hello from Javokhir")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/game-commerce-89714/us-central1/api
