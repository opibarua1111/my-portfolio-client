import { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://vast-wave-19166.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return {
        projects
    }
};

export default useProjects;