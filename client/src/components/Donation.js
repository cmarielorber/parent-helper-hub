import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function DonationForm() {
  const [donationAmount] = useState(0);

  function handleToken(token) {
    console.log(token);
    // Send the token to your backend to process the payment
  }


  return (
    <div className="donate">
      <StripeCheckout
        style={{ display: "inline-block", maxWidth: "100px" }}
        stripeKey="pk_test_51Mm6IsCH8zpe9aZt5yJ8eyXk6PowgPwXpROkJy7kDkKH4xv2l8YWc88LoFv5JBq3lhFk3OFjv9tV5pgXpOYVlpEk00SdkFWV4q"
        token={handleToken}
        amount={donationAmount * 100}
        className="donations"
        description="For our Parent Community"
        currency="USD"
      >
        <button className="donations">Donate Custom Amount</button>
      </StripeCheckout>
    </div>
  );
  
}

export default DonationForm;
