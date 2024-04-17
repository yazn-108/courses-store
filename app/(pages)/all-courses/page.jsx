import React from 'react'
import { AllProducts } from '@/app/_fetchData/Apis'
import ProductsList from '@/app/_components/ProductsList'
const Page = async () => {
  const productsData = await AllProducts()
  return (
    <div className='px-10 md:px-10 mt-4'>
      <ProductsList productsData={productsData?.data} />
    </div>
  )
}
export default Page
