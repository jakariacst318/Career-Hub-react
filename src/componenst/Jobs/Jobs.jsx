import { Link } from "react-router-dom";

const Jobs = () => {
    return (
        <div>
            <h2 className="font-semibold text-3xl text-red-500 text-center pt-10 ">Ops !!!! 404</h2>
            <Link to='/' className="bg-slate-500 p-5 rounded-xl text-white">Go back home</Link>
        </div>
    );
};

export default Jobs;