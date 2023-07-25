import React from "react";
import images5 from "../images/imagemessage.jpg"


const Contact = () => {
    return (
        <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-10">
            <h2 className="text-center text-gray-700">Send Us Message</h2>
            <p className="text-center text-gray-700 py-2">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img src={images5} alt="/" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-xl" />
                <form action="">
                    <div className="grid grid-cols-2">
                        <input className="border m-2 p-2" type="text" placeholder="First Name" />
                        <input className="border m-2 p-2" type="text" placeholder="Last Name" />
                        <input className="border m-2 p-2" type="email" placeholder="Email" />
                        <input className="border m-2 p-2" type="Tel" placeholder="Phone Number" />
                        <input className="border col-span-2 p-2 m-2" type="Address" placeholder="Address:" />
                        <textarea className="border col-span-2 m-2 p-2 " cols="30" rows="10"></textarea>
                        <button className="col-span-2 m-2">Sumbit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}




export default Contact;