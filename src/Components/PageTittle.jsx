/* eslint-disable react/prop-types */
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTittle = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default PageTittle;
