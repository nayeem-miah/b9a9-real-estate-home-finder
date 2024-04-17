import PropTypes from 'prop-types'; 
const Client = ({ dt }) => {
  
  const { name, img, details, additional_details } = dt;
  return (
    <div className="card card-compact hover:bg-base-200 pt-8  bg-base-100 shadow-xl">
      <figure>
        <img className="w-10 rounded-lg" src={img} />
      </figure>
      <div className="rating mx-auto my-4">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          
         
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          
        />
      </div>
      <div className="card-body">
        <h2 className=" text-2xl font-bold text-center">{name}</h2>
        <p>Location : {additional_details.location}</p>
        <p> Date :{additional_details.date}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};
Client.propTypes = {
    dt: PropTypes.object.isRequired,
}

export default Client;
