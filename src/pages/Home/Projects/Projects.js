import React from 'react';
import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';

const Projects = () => {
    const { projects } = useProjects();
    return (
        <div className="mb-5">
            <h2 className="text-4xl font-semibold mt-3">Our Services</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" id="services">
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;