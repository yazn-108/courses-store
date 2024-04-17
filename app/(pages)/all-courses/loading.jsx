import React from 'react'
const loading = () => {
  return (
    <div className='px-10 md:px-10 mt-4'>
      <div className='grid gap-3 max-[576px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {
          Array(8).fill(true).map((_, i) => (
            <div key={i} className='rounded-lg overflow-hidden border bg-slate-200 animate-pulse'>
              <div className=' h-[170px] w-[100%]'></div>
              <div className='flex justify-between items-center p-3'>
                <div className='grid gap-1'>
                  <h2 className='w-[110px] h-[20px] bg-slate-300 animate-pulse rounded'></h2>
                  <h2 className='w-[90px] h-[20px] bg-slate-300 animate-pulse rounded'></h2>
                </div>
                <h2 className='w-[100px] h-[20px] bg-slate-300 animate-pulse rounded'></h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default loading
