import { List } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ProductItem = ({ product }) => {
  return (
    <Link href={`/product-details/${product?.productId}`} className='bg-gray-50 rounded-lg overflow-hidden
        border hover:border-teal-400 hover:shadow-md hover:cursor-pointer'>
      <Image
        src={product?.bannerUrl}
        alt=''
        width={400}
        height={500}
        className=' h-[170px] w-[100%] object-cover'
      />
      <div className='flex justify-between items-center p-3'>
        <div>
          <h2 className='text-[14px] font-medium line-clamp-1'>{product?.title}</h2>
          <h2 className='text-[12px] text-gray-400 flex gap-1 items-center'>
            <List className='w-4 h-4' />
            {product?.category}
          </h2>
        </div>
        <h2>{product?.price}$</h2>
      </div>
    </Link>
  )
}
export default ProductItem
