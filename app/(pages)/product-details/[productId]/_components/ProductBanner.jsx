import Image from 'next/image'
import React from 'react'
const ProductBanner = ({ product }) => {
    return (
        <div>
            <Image
                src={product?.bannerUrl}
                alt=''
                width={400}
                height={400}
                className='w-[400px] h-[250px] rounded-lg object-cover'
            />
        </div>
    )
}
export default ProductBanner
