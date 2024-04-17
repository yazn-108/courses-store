"use client"
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CartApis from '@/app/_fetchData/CartApis';
import { useUser } from '@clerk/nextjs';
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
		const res = await fetch('api/create-intent', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
		const clientSecret = await res.json()
		if (clientSecret) {
			CartApis.DeleteAllCartItems(user?.id)
		}
		const result = await stripe.confirmPayment({
			clientSecret,
			elements,
			confirmParams: {
				return_url: `${NEXT_PUBLIC_REST_API_URL}/payment-confirm`,
			},
		});
		if (result.error) {
			console.log(result.error.message);
		} else {
		}
	};
	const sendEmail = async () => {
		const res = await fetch('api/send-email', {
			method: 'POST',
		})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='mx-32 md:mx-[320px] mt-12'>
				<PaymentElement />
				<button className='w-full p-2 mt-4 text-white rounded-md bg-primary'>Submit</button>
			</div>
		</form>
	)
}
export default CheckoutForm
