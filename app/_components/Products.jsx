import React from 'react'
import ProductsList from './ProductsList'
import { AllProducts } from '@/app/_fetchData/Apis'
const Products = async () => {
  const productsData = await AllProducts()
  return (
    <div className='px-10 md:px-10'>
      <h2 className='text-xl my-4'>our latest products</h2>
      <ProductsList productsData={productsData?.data} />
    </div>
  )
}
export default Products
