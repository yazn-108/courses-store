import Link from 'next/link'
import React from 'react'
const ProductsCart = ({ products, openState }) => {
  return (
    <div className='h-[300px] w-[250px]
        bg-gray-100 z-10 rounded-md border shadow-sm
        absolute mx-10 right-10 top-12 p-5 overflow-hidden'>
      <div className="mt-1 space-y-6 h-[156px] overflow-y-scroll">
        <ul className="space-y-4">
          {products?.map((item) => (
            <li key={item?.productId} className="flex items-center gap-4">
              <img
                src={item?.bannerUrl}
                alt=""
                className="object-cover w-16 h-16 rounded"
              />
              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">{item?.title}</h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category: </dt>
                    <dd className="inline">{item?.category}</dd>
                  </div>
                  <div>
                    <dt className="inline">Price: </dt>
                    <dd className="inline">{item?.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 space-y-4 text-center">
        <Link
          onClick={() => openState(false)}
          href="/cart"
          className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
        >
          View my cart ({products?.length})
        </Link>
        <button
          className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
          onClick={() => openState(false)}
        >
          Continue shopping
        </button>
      </div>
    </div>
  )
}
export default ProductsCart
