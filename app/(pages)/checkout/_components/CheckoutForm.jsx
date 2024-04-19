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
			<div className='max-w-[90vw] test:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] m-auto mt-12'>
				<div className='mb-12 text-center'>
					<span>To test the payment process, use this card number </span>
					<br className='md:hidden' />
					<span className="group/item relative">
						<span className='cursor-pointer text-primary' onClick={(e) => navigator.clipboard.writeText(e.target.innerHTML)}>4242 4242 4242 4242</span>
						<span className="absolute bottom-[-20px] md:bottom-auto md:top-[-20px] left-0 text-center w-full min-w-[140px] text-xs invisible group-hover/item:visible">
							Copy to clipboard
						</span>
					</span>
				</div>
				<PaymentElement />
				<button className='w-full p-2 mt-4 text-white rounded-md bg-primary'>Submit</button>
			</div>
		</form >
	)
}
export default CheckoutForm
