import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import PageTittle from "../../Components/PageTittle";

const ViewDetails = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = items.find((data) => data.id === idInt);
  console.log(item);
  const {
    price,
    segment_name,
    status,
    area,
    location,
    image,
    estate_title,
    description,
    facilities,
  } = item;
  return (
    <div className="flex  p-2 lg:p-10 shadow-lg">
      <PageTittle title="View details"></PageTittle>
      <div>
        <img src={image} className="" />
      </div>
      <div>
      <div className="card-body">
        <h2 className="card-title lg:text-4xl">{estate_title}</h2>
        <p className="lg:text-xl">{segment_name}</p>
        <p>{description}</p>
        <div>
          <p><span className="font-bold">price :</span>{price}</p>
          <p className="flex gap-2 items-center"><FaLocationDot></FaLocationDot> Location : {location}</p>
        </div>
        <div className="flex justify-between text-center gap-6">
            {
                facilities.map((f,i)=><p className="border rounded" key={i}>{f}</p>)
            }
        </div>
        <p className="my-2"><span className="font-bold">status:</span> {status}</p>
        <p className="">Area : {area}</p>
      </div>
      </div>
    </div>
  );
};

export default ViewDetails;
