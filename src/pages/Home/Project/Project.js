import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, title, short_description, main_img } = project;
    return (
        <div className="relative bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-3 rounded-lg">
            <img className=" mx-auto transform transition duration-300 hover:scale-105" src={main_img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg font-medium">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{short_description}</p>
                <Link to={`/project/${_id}`}>
                    <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-4 transform transition">More Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Project;