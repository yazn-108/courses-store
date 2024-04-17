"use client"
import React from 'react'
import ProductItem from './ProductItem'
import { usePathname } from 'next/navigation'
const ProductsList = ({ productsData }) => {
	const path = usePathname()
	return (
		<div className='grid gap-3 max-[576px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
			{
				path === "/"
					? productsData?.slice(0, 8)?.map((item) => (<ProductItem key={item?.productId} product={item} />))
					: productsData?.map((item) => (<ProductItem key={item?.productId} product={item} />))
			}
		</div>
	)
}
export default ProductsList
