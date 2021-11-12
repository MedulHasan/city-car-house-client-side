import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestSellers from '../BestSellers/BestSellers';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BestSellers />
            <CustomerFeedback />
        </div>
    );
};

export default Home;