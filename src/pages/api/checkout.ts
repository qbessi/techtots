// src/pages/api/checkout.ts
import type { APIRoute } from "astro"; // ❗️ Required for `APIRoute` type

import Stripe from 'stripe';


const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const currency = body.currency || "GBP";

  const amounts: Record<string, number> = {
    GBP: 3000, // £30
    USD: 3500, // $35
    KWD: 1000, // KWD 10.00
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "TechTots Class - 3hr",
            },
            unit_amount: amounts[currency] || 3000,
          },
          quantity: 1,
        },
      ],
      success_url: "https://your-site.vercel.app/success",
      cancel_url: "https://your-site.vercel.app/cancel",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Stripe error" }), {
      status: 500,
    });
  }
};
