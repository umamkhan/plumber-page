import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServicePage = () => {
  return (
    <div className=' flex justify-center items-center flex-wrap mt-12 '>
      
    <div>
    <div className="flex flex-wrap justify-center items-center w-[full] h-[full] border border-gray-200 mx-12 rounded-xl  ">
    <div>
    <h1 className=" flex justify-center items-center text-2xl  mt-2">Select a service</h1>
    </div>
      <div className='flex flex-wrap justify-center items-center mt-5 gap-5 mx-2 p-4  '>
     
        <div className='hover:underline'>
        <AnchorLink href='#water-tap-container'><img src="./image/tap and mixer.png" className=' flex justify-center items-center w-[100px] h-[100px] border-none    '/></AnchorLink>
                <h1 className='p-2 text-lg '>Tap Repair</h1>
                </div>
                <div className='hover:underline'>

                
                <AnchorLink href='#water-tank-container'><img src='./image/Water tank leakage repair.png' className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-lg '>Water Tank</h1>
                </div>
                <div className='hover:underline'>

                <AnchorLink href='#toilet-container'><img src="./image/analwasherrepairinstall.png"  className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-lg '>Toilet</h1>
                </div>
                <div className='hover:underline'>

                
                <AnchorLink href='#wash-basin-container'><img src='./image/wah basin sink repair leakage.png' className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-lg '>Wash Basin</h1>
                </div>
                <div className='hover:underline'>
                <AnchorLink href='#bath-container'><img src='./image/Bathing repair.png' className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/></AnchorLink>
                <h1 className='p-2 text-lg '>Bath Fitting</h1>
                </div>
                <div className='hover:underline'>

                
                <img src='./image/not sure about the issue.png' className=' flex justify-center items-center w-[90px] h-[90px]  border-none  '/>
                <h1 className='p-2 text-lg '>Not sure??
                 </h1>
                </div>
                </div>
              
        </div>
        </div>
        <div className='mx-6 mt-2'>
          <img src="./image/plumber.png"  className="xl:w-[300px] xl:h-[200px] lg:h-[400px] lg:w-[900px] md:h-[400px] md:w-[700px] sm:w-[400px] sm:h-[300px]rounded-lg -mt-2 "/>
            </div> 
        </div>
  )
}

export default ServicePage