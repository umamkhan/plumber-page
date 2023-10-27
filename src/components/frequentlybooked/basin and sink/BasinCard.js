import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BasinCard = ({basindetail}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-[90%] h-[full] border border-gray-200 rounded shadow-md sm:ml-4">
        
        <div>
          <h1 className="text-2xl font-bold mt-10  mx-10">{basindetail.heading}</h1>
        </div>
        <div className="flex justify-between mt-4">
          <div className="mx-10">
          <div className="flex gap-2">
          <FontAwesomeIcon icon={faStar} />
            <h1 className="mb-1">{basindetail.ratings}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="font-bold">{basindetail.price}</h1>
              <h1>{basindetail.time}</h1>
            </div>
            <hr className="mt-4"/>
                <ul>
              <li className="mt-4  ">This is the best service of the world</li>
              <li className="mt-4 ">This is the best service of the world</li>
              </ul>
           
          </div>
          <div>
            <img
              className=" w-[110px] h-[110px] mr-6"
              src="./image/wah basin sink repair leakage.png"
            />
            <button className="bg-black text-white mt-8 rounded p-2 hover:bg-slate-500 mb-4">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasinCard;