import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch(`https://vast-wave-19166.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);
    console.log(project);
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div><img src={project.main_img} alt="" /></div>
                <div><img src={project.img1} alt="" /></div>
                <div><img src={project.img2} alt="" /></div>
                <div><img src={project.img3} alt="" /></div>
            </div>
            <div className="text-left text-3xl">
                <p>-{project.des1}</p>
                <p>-{project.des2}</p>
                <p>-{project.des3}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;