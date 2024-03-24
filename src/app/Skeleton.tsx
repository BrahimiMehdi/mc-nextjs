import React from 'react'
type results = {
    name:string;
    url:string;
}

const Skeleton = async() => {

  return (
    <div className='grid w-full gap-12 max-w-6xl grid-cols-3'>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
            <div className='size-24 animate-pulse text-center grid place-items-center bg-gray-200 rounded-lg' ></div>
    </div>
  )
}

export default Skeleton