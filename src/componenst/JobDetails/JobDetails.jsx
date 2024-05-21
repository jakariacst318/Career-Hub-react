import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, experiences, educational_requirements, job_responsibility,job_title, salary } = job
    return (
        <div>
            <h2 className="text-center font-bold text-2xl py-10"> Job Details </h2>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border border-indigo-600 md:col-span-3 space-y-5">
                    <h1 className="text-2xl font-semibold">job_description: <span className="text-base text-gray-500">{job_description}</span></h1>
                    <h1 className="text-2xl font-semibold">job responsibility: <span className="text-base text-gray-500">{job_responsibility}</span></h1><h1 className="text-2xl font-semibold">educational requirements: <span className="text-base text-gray-500">{educational_requirements}</span></h1><h1 className="text-2xl font-semibold">experiences: <span className="text-base text-gray-500">{experiences}</span></h1>

                </div>
                <div className="border border-indigo-600">
                    <h1 className="text-2xl font-bold">Job Details</h1>

                    <h1 className="text-xl font-semibold">salary: <span className="text-base text-gray-500">{salary}</span></h1>
                    <h1 className="text-xl font-semibold">job title: <span className="text-base text-gray-500">{job_title}</span></h1>
                    
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;