"use client"
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { DeleteAllCartItems } from '@/app/_fetchData/CartApis';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
const CheckoutForm = ({ amount }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [errormessage, setErrorMessage] = useState(false)
	const [loading, setLading] = useState(false)
	errormessage && setTimeout(() => setErrorMessage(false), 2000)
	const { user } = useUser()
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { error: submitError } = await elements.submit();
		if (submitError) {
			setErrorMessage(submitError.message)
			return;
		}
		setLading(true)
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
		sendEmail();
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
		<form onSubmit={handleSubmit} className='relative'>
			{
				loading && (
					<div className='flex flex-col justify-center items-center h-full w-full bg-white absolute z-10'>
						<div className='text-primary text-lg'>Payment is being completed...</div>
						<div className='text-sm'>do not refresh page</div>
					</div>
				)
			}
			{errormessage && (
				<div className='z-10 fixed top-[80px] left-[50%] translate-x-[-50%] w-fit min-w-[90%] sm:min-w-fit drop-shadow-lg'>
					<div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
						<div className="flex items-start gap-4">
							<span className="text-[#df1b41]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
								</svg>
							</span>
							<div className="flex-1">
								<strong className="block font-medium text-[#df1b41]"> {errormessage} </strong>
							</div>
						</div>
					</div>
				</div>
			)}
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
