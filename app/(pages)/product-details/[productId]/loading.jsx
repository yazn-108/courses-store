import React from 'react'
const loading = () => {
  return (
    <div className=' py-8 md:px-28'>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='w-[100%] h-[250px] m-auto mt-0 bg-slate-200 rounded-lg animate-pulse'></div>
        <div className='w-[100%] flex flex-col gap-5 m-auto'>
          <div className='h-[20px] w-[100%] bg-slate-200 animate-pulse'>
          </div>
          <div className='h-[20px] w-[70px] bg-slate-200 animate-pulse'>
          </div>
          <div className='h-[20px] w-[100%] bg-slate-200 animate-pulse'>
          </div>
          <div className='h-[20px] w-[100%] bg-slate-200 animate-pulse'>
          </div>
          <div className='h-[20px] w-[100%] bg-slate-200 animate-pulse'>
          </div>
          <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'>
          </div>
          <div className='w-[200px] h-[40px] mt-3 bg-slate-200 animate-pulse'></div>
          <div className='w-[125px] h-[40px] rounded-[8px] p-2 bg-slate-200 animate-pulse'></div>
        </div>
      </div>
      <div>
        <h2 className='w-[148px] h-[28px] mt-24 mb-4 text-xl bg-slate-200 animate-pulse'></h2>
        <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
          <div className='bg-slate-200 animate-pulse rounded-lg border '>
            <div className=' h-[170px]'></div>
          </div>
          <div className='bg-slate-200 animate-pulse rounded-lg border '>
            <div className=' h-[170px] w-[100%]'></div>
          </div>
          <div className='bg-slate-200 animate-pulse rounded-lg border '>
            <div className=' h-[170px] w-[100%]'></div>
          </div>
          <div className='bg-slate-200 animate-pulse rounded-lg border '>
            <div className=' h-[170px] w-[100%]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default loading
