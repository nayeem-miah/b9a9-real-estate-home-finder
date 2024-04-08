import { MdOutlineEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
const ContactUs = () => {
    return (
        <div className="min-h-[calc(100vh-250px)]">
             <div>
            <h2 className="text-center text-5xl underline text-gray-500 hover:text-gray-700">contact</h2>
            <div className="mt-10">
            <div className="text-center border lg:p-10 p-2 hover:bg-gray-700 shadow-2xl">
                <p className="text-2xl flex  items-center gap-3 "><MdOutlineEmail></MdOutlineEmail> Email: <Link className="hover:underline hover:text-blue-500">nayeem5113a@gmail.com</Link></p>
                <p className="text-2xl flex  items-center gap-3"> <IoMdContact></IoMdContact>Number: <Link className="hover:underline hover:text-blue-500">01849317388</Link></p>
                
                <p className="text-2xl flex  items-center gap-3"> <IoMdContact></IoMdContact>Number: <Link className="hover:underline hover:text-blue-500">016*****00</Link></p>
                
               
            </div>
        </div>
        </div>
        </div>
    );
};

export default ContactUs;