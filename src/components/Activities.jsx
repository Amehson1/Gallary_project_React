import React from "react";
import myImages from '../images/resort image.jpg' 
import myImage1 from '../images/cruise image.jpeg' 
import myImage2 from '../images/excursion image.jpg' 

const Activities = () => {
    return(
        <div className="max-w-[1140px] m-auto w-full md:grid grid-cols-3 mt-[-75px]">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Resorts</h3>
                <img src={myImages} alt="/" className="w-full h-full object-cover border-4 border-white shadow-lg rounded-xl" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Cruises</h3>
                <img src={myImage1} alt="/" className="w-full h-full object-cover  border-4 border-white shadow-lg rounded-xl" />
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Excursions</h3>
                <img src={myImage2} alt="/" className="w-full h-full object-cover border-4 border-white shadow-lg rounded-xl" />
            </div>
        </div>
    )
}





export default Activities;