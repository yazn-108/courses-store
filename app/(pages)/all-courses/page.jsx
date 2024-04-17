import React from 'react'
import ProductApi from '@/app/_fetchData/Apis'
import ProductsList from '@/app/_components/ProductsList'
const page = async () => {
  const productsData = await ProductApi?.AllProducts()
  return (
    <div className='px-10 md:px-10 mt-4'>
      <ProductsList productsData={productsData?.data} />
    </div>
  )
}
export default page
