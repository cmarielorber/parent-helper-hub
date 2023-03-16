
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState(0);

  function handleToken(token) {
    console.log(token);
    // Send the token to your backend to process the payment
  }

  function handleCustomDonation(event) {
    setDonationAmount(event.target.value);
  }

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51Mm6IsCH8zpe9aZt5yJ8eyXk6PowgPwXpROkJy7kDkKH4xv2l8YWc88LoFv5JBq3lhFk3OFjv9tV5pgXpOYVlpEk00SdkFWV4q"
        token={handleToken}
        amount={donationAmount * 100}
        name="Donations"
        description="For our Parent Community"
        currency="USD"
      >
        <input type="number" min="1" onChange={handleCustomDonation} value={donationAmount} />
        <button>Donate Custom Amount</button>
      </StripeCheckout>
    </div>
  );
}

export default DonationForm;
