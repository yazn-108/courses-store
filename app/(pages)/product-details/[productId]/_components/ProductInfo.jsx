"use client"
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CartApis from '@/app/_fetchData/CartApis'
import { useDispatch } from 'react-redux'
import { CartProductsCount } from '@/app/_ReduxToolKit/CartProductsCountSlice'
import SuccessAlert from './SuccessAlert'
const productInfo = ({ product }) => {
	const [AlertState, setAlertState] = useState(null)
	const dispatch = useDispatch()
	const { user } = useUser()
	const router = useRouter()
	const checkUserAuth = async () => {
		if (!user) {
			router.push("/sign-in")
		} else {
			const userId = await user?.id
			CartApis.AddProductToUserCart(product, userId).then((e) => {
				dispatch(CartProductsCount(userId))
				setAlertState({
					message: e.data.message,
					state: e.data.Product ? true : false
				})
				setTimeout(() => setAlertState(null), 3000)
			})
		}
	}
	return (
		<div>
			{AlertState !== null && <SuccessAlert message={AlertState.message} state={AlertState.state} />}
			<h2 className='text-[20px]'>{product?.title}</h2>
			<h3 className='text-[15px] text-gray-400'>{product?.category}</h3>
			<div className='text-[15px] mt-5'>{product?.description}</div>
			<h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'>
				{product?.instantDelivery
					? <BadgeCheck className='w-5 h-5 text-green-500' />
					: <AlertOctagon />}
				Eligible For Instant Delivery
			</h2>
			<div className='text-[32px] text-primary mt-3'>{product?.price}$</div>
			<button
				onClick={() => checkUserAuth()}
				className='flex gap-2 transition-all bg-teal-500 hover:bg-teal-600 rounded-[8px] p-2 text-white '>
				<ShoppingCart />
				add to cart
			</button>
		</div>
	)
}
export default productInfo
