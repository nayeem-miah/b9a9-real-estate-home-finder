/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";

const Cards = ({ category }) => {
  const {
    segment_name,
    price,
    location,
    image,
    estate_title,
    description,
    facilities,
  } = category;
  return (
    <div className="card card-compact hover:scale-105  bg-base-100 shadow-xl">
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
        <div className="card-actions my-4">
          <button className="btn btn-primary">View Details </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
