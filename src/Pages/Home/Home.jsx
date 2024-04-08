import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div className="min-h-[calc(100vh-250px)] lg:px-10 px-1 ">
      <Header></Header>
      <div className="my-10">
        {" "}
        <h2 className="text-center font-extrabold text-4xl my-4 ">
          Category of Our House
        </h2>
        <p className="text-center">
          <small>
            A residential property is a typical space where people live and
            build their lives. The world of real estate is dynamic as it deals
            with various types of properties. Hence, understanding the
            uniqueness of residential properties is very important for both
            property managers and homeowners.{" "}
          </small>
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 my-4">
        {categories.map((category) => (
          <Cards key={category.id} category={category}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
