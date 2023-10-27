import React from 'react'
import ServiceCard from  './ServiceCard';
import { services } from '../constants/data';


const ServiceContainer = () => {
  return (
    <div className=' flex justify-center items-center flex-wrap mt-12 '>
      
      <div>
      <div className="flex flex-wrap justify-center items-center w-[full] h-[full] border border-gray-200 mx-12 rounded-xl ">
      <h1 className=" flex justify-center items-center text-2xl  mt-2">Select a service</h1>
        <div className="flex flex-wrap justify-center items-center mt-5 mx-5 mb-5 gap-4">
       
          {services.map((service) => (

          <ServiceCard service={service} />


           
          ))}
        </div>
      </div>
    </div>
         {/* <div className='mx-6 mt-6'>
          <img src="./image/plumber.png"  className="xl:w-[500px] xl:h-[400px] lg:h-[400px] lg:w-[900px] md:h-[400px] md:w-[700px] sm:w-[400px] sm:h-[300px] "/>
            </div> */}
               </div>
                
  )
}

export default ServiceContainer