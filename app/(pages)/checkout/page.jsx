"use client"
import React, { Suspense } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';
const Page = () => {
	const SearchParams = useSearchParams()
	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
	const options = {
		mode: 'payment',
		currency: "usd",
		amount: SearchParams.get('amount') * 100,
	};
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Elements stripe={stripePromise} options={options}>
				<CheckoutForm amount={Number(SearchParams.get("amount"))} />
			</Elements>
		</Suspense>
	)
}
export default Page
