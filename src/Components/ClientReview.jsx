
import { useEffect, useState } from "react";
import Client from "./Client";

const ClientReview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../client.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div className="my-10">
      <div className="my-10">
        <h2 className="text-center text-4xl font-bold">Client Review</h2>
      <p className="text-center my-5">If you know about the power of social proof, you know how important it is to have reviews on your website. But those reviews don’t need to stay static wherever your customers felt inspired to post.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
        {data.map((dt, index) => (
          <Client key={index} dt={dt}></Client>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
