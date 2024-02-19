const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const doStripeCheckout = async (req, res) => {
  try {
    console.log(process.env.STRIPE_SECRET_KEY);
    console.log("req", req.body);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        console.log("item", item);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: (item.price) * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    console.log("session", session);
    res.status(200).json({ url: session.url });
  } catch (error) {
    const response = {
      success: false,
      message: error.message,
    };
    res.status(500).json(response);
  }
};

module.exports = { doStripeCheckout };
