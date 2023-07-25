import React from "react";

import myImage from '../images/Image1.jpg'

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img src={myImage} className="h-full w-full object-cover" alt="/" />
            
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 ">
                   <h1 className="text-bold text-4xl">Find Your Special Trip</h1> 
                   <h2 className="text-4xl py-4 italic">With Weekaway</h2> 
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
        </div>
        
    )
}














export default Hero;