"use client"
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { DeleteAllCartItems } from '@/app/_fetchData/CartApis';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
const CheckoutForm = ({ amount }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrorMessage] = useState()
	const { user } = useUser()
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const handleError = (error) => {
			setLoading(false)
			setErrorMessage(error.message)
		}
		sendEmail();
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
		const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/api/create-intent`, {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
		const clientSecret = await res.json()
		if (clientSecret) {
			DeleteAllCartItems(user?.id)
		}
		const result = await stripe.confirmPayment({
			clientSecret,
			elements,
			confirmParams: {
				return_url: `${process.env.NEXT_PUBLIC_REST_API_URL}/payment-confirm`,
			},
		});
		if (result.error) {
			console.log(result.error.message);
		} else {
		}
	};
	const sendEmail = async () => {
		await axios.post(`${process.env.NEXT_PUBLIC_REST_API_URL}/api/send-email`, {
			userName: user?.fullName,
			userEmail: user?.primaryEmailAddress?.emailAddress
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='max-w-[90vw] md:mx-[320px] m-auto mt-12'>
				<PaymentElement />
				<button className='w-full p-2 mt-4 text-white rounded-md bg-primary'>Submit</button>
			</div>
		</form>
	)
}
export default CheckoutForm
