import React from "react";
import images4 from "../images/image 2R.jpg"
import images6 from "../images/gallary image1.jpg"
import images7 from "../images/gallary image 2.jpg"
import images8 from "../images/gallary 4.jpg"
import images9 from "../images/imageGallary.jpg"


const Gallary = () => {
    return(
        <div id="gallary" className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallary</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className="w-full h-full object-cover rounded-md" src={images4} alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover border rounded-md" src={images6} alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover rounded-md" src={images7} alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover rounded-md" src={images8} alt="/" />
                </div>
                <div>
                    <img className="w-full h-full object-cover rounded-md" src={images9} alt="/" />
                </div>
            </div>
        </div>
    )
}






export default Gallary;