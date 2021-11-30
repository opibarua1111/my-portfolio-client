import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import OverView from '../OverView/OverView';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <OverView></OverView>
        </div>
    );
};

export default Home;