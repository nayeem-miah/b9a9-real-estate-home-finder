/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Cards = ({ category }) => {
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    Aos.init();
  },[])
  const {
    segment_name,
    price,
    id,
    location,
    image,
    estate_title,
    description,
    facilities,
  } = category;
  return (
    <div className="card card-compact bg-gray-800 shadow-xl" data-aos="fade-right">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{segment_name}</p>
        <p>{description.slice(0,70)}</p>
        <div>
          <p>price : {price}</p>
          <p className="flex gap-2 items-center"><FaLocationDot></FaLocationDot> Location : {location}</p>
        </div>
        <div className="flex justify-between text-center gap-6">
            {
                facilities.map((f,i)=><p className="border rounded" key={i}>{f}</p>)
            }
        </div>
       {
        user ?  <div className="card-actions my-4">
        <Link to={`/details/${id}`} className="btn btn-primary">View Details </Link> 
      </div>:
       <div className="card-actions my-4">
       <Link to={'/login'} className="btn btn-primary">View Details </Link>
     </div>
       }
      </div>
    </div>
  );
};

export default Cards;
