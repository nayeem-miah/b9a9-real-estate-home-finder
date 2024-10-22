import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import ClientReview from "../../Components/ClientReview";

import PageTittle from "../../Components/PageTittle";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="min-h-[calc(100vh-250px)] lg:px-10 px-1 ">
      <PageTittle title="Home page"></PageTittle>
      <Header></Header>
      {/* category  */}
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 my-4 animate__animated animate__slideInUp">
        {categories.map((category) => (
          <Cards key={category.id} category={category}></Cards>
        ))}
      </div>
      {/*  client review  */}

      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
