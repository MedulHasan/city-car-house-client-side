import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestBrand from '../BestBrand/BestBrand';
import BestSellers from '../BestSellers/BestSellers';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BestSellers />
            <CustomerFeedback />
            <BestBrand />
            <Footer />
        </div>
    );
};

export default Home;