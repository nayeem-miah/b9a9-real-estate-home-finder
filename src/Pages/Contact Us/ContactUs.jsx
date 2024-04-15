import { MdOutlineEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import PageTittle from "../../Components/PageTittle";
const ContactUs = () => {
  return (
    <div className="min-h-[calc(100vh-250px)]">
      <PageTittle title="Contact page"></PageTittle>
      <div>
        <h2 className="text-center text-5xl underline text-gray-500 hover:text-gray-700">
          contact
        </h2>
        <div className="mt-10">
          <div className="text-center  lg:p-10 p-2 shadow-lg">
            <p className="text-2xl flex  items-center gap-3 lg:ml-96 ml-40">
              <MdOutlineEmail></MdOutlineEmail> Email:{" "}
              <Link className="hover:underline hover:text-blue-500 ">
                nayeem5113a@gmail.com
              </Link>
            </p>

            <p className="text-2xl flex  items-center gap-3 lg:ml-96 ml-40">
              {" "}
              <IoMdContact></IoMdContact>Number:{" "}
              <Link className="hover:underline hover:text-blue-500">
                01849317388
              </Link>
            </p>

            <p className="text-2xl flex  items-center gap-3 lg:ml-96 ml-40">
              {" "}
              <IoMdContact></IoMdContact>Number:{" "}
              <Link className="hover:underline hover:text-blue-500">
                016*****00
              </Link>
            </p>
            <p className="text-2xl flex  items-center gap-3 lg:ml-96 ml-40">
              {" "}
              <IoMdContact></IoMdContact>fex :{" "}
              <Link className="hover:underline hover:text-blue-500">
                +99*****876
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
