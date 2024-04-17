"use client"
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';
const Page = async () => {
	const SearchParams = await useSearchParams()
	const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
	const options = {
		mode: 'payment',
		currency: "usd",
		amount: SearchParams.get('amount') * 100,
	};
	return (
		<Elements stripe={stripePromise} options={options}>
			<CheckoutForm amount={Number(SearchParams.get("amount"))} />
		</Elements>
	)
}
export default Page
