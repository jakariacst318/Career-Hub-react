import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        <div >
            <div className="text-center pb-20">
                <h2 className="text-5xl">Featured Jobs {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, odio.</p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 bg-slate-400 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex justify-center">
                <div className={dataLength === jobs.length && 'hidden '} >
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn btn-primary mt-20 ">Show All </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;