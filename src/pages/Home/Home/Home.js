import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestSellers from '../BestSellers/BestSellers';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BestSellers />
        </div>
    );
};

export default Home;