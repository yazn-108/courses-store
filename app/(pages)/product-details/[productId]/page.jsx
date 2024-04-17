import BreadCrumb from '@/app/_components/BreadCrumb'
import { ProductByCategory, ProductById } from '@/app/_fetchData/Apis'
import React from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'
import ProductsList from '@/app/_components/ProductsList'
const Page = async ({ params }) => {
  const getProductById = await ProductById(params?.productId)
  const getProductByCategory = await ProductByCategory(getProductById?.data?.category)
  return (
    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <ProductBanner product={getProductById?.data} />
        <ProductInfo product={getProductById?.data} />
      </div>
      <div>
        <h2 className='mt-24 mb-4 text-xl'>similar products</h2>
        <ProductsList productsData={getProductByCategory?.data} />
      </div>
    </div>
  )
}
export default Page
