import React from 'react'
import CostumerSupport from './costumer support/CostumerSupport'
import FrequentlyContainer from './frequentlybooked/FrequentlyContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ServicePage from './service/ServicePage'
// import ServiceContainer from './ServiceContainer'



const PlumberService = () => {
  return (
    <div>
    <div className='flex justify-center items-center mt-8'>
      <h1 className='font-bold text-3xl '>Plumber</h1>
      
    </div>
    <div className='flex justify-center items-center'>
    
    <FontAwesomeIcon className='text-2xl' icon={faStar} />
    <h1 className='text-2xl'>4.7 (6.3M booking)</h1>
    </div>
   
   <ServicePage/>
    {/* <ServiceContainer/> */}
    <CostumerSupport/>
   
    <div className='flex justify-center items-center mt-10 '>
      {/* <ServicesBox /> */}
     
      {/* <ServicePage/> */}
      
    <FrequentlyContainer/>
    </div>
    
    </div>
  )
}

export default PlumberService