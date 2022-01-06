import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, title, short_description, main_img, live_Link, code_link } = project;
    return (
        <div className="relative bg-white border border-gray-100 transition transform duration-700 rounded-lg">
            <img className=" mx-auto transform transition duration-300 hover:scale-105" src={main_img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg font-medium">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{short_description}</p>

                <div className="live_link  pt-4">
                    <a className=" border-2 font-semibold border-red-400 py-1 px-3 rounded-3xl hover:bg-red-500 transition transform duration-700 hover:text-white cursor-pointer mr-2" href={live_Link} target="_blank">live</a>
                    <a className="border-2 mr-4 font-semibold border-red-400 py-1 px-3 rounded-3xl hover:bg-red-500 transition transform duration-700 hover:text-white cursor-pointer" href={code_link} target="_blank">github code</a>
                    <Link to={`/project/${_id}`}>
                        <a className=" border-2 font-semibold border-red-400 py-1 px-3 rounded-3xl hover:bg-red-500 transition transform duration-700 hover:text-white cursor-pointer">More Details</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;