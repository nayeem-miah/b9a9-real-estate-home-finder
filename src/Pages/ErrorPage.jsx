import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center items-center space-y-5 mt-20">
            <h3 className="text-5xl font-bold text-red-600">404 !!!</h3>
            <p className="text-3xl font-bold">No Found</p>
            <Link to={'/'}><p className="link link-primary text-4xl">Go Back</p></Link>
        </div>
    );
};

export default ErrorPage;