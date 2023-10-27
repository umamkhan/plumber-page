import React from 'react'

const CostumerSupportCard = ({support}) => {
  return (
    <div className=' mt-12 flex justify-center items-center '>
      
        <div className="max-w-md  overflow-hidden shadow-lg rounded-lg hover:bg-gray-100">
  <img className="w-[150px] h-[150px] mx-8 mt-4" src={support.image} alt="image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{support.name}</div>
        
    </div>
    </div>
    </div>
   
  )
}

export default CostumerSupportCard