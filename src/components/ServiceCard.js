import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div>

               <div className='cursor-pointer m-1 rounded-2xl flex flex-wrap justify-center items-center w-48 border border-white shadow-lg h-4/4 hover:bg-gray-200'>
               <div>
               <div className='flex flex-wrap justify-center items-center mt-5'>
                <img src={service.image} className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/>
                </div>
                <h1 className='text-neutral-700  items-center font-bold text-md mt-5'>{service.name}</h1>
               </div>
               </div>
    </div>
  )
}

export default ServiceCard