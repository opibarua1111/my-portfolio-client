import React from 'react';
import about_me from '../../images/about_me.png'

const AboutMe = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl mx-auto text-bold">About Me</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img src={about_me} className="img-fluid mx-auto" alt="" />
                </div>
                <div className=" mt-7 flex items-center bg-red-400 text-white w-9/12" style={{ borderTopRightRadius: '30px', borderBottomLeftRadius: '30px' }}>
                    <p className="text-2xl">I am a Full Stack Developer specialized in HTML5, CSS, CSS Frameworks (Bootstrap, Tailwind, Material-
                        UI), JavaScript, React.js, Node.js, Express.js, Laravel, MongoDB,MySQL strong collaboration, problem-
                        solving.. I have solved problems in online judges such as Outsbook.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;