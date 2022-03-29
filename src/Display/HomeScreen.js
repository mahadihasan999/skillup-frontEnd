import React from 'react';
import Products from '../components/DisplayProducts/Products';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Review from "../components/Review/Review"

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Products></Products>
            <Review />
            <Subscribe />
            <Footer />
        </>
    )
}

export default HomeScreen
