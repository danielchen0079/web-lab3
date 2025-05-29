import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/carousel'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PhoneMockUp from '../components/phoneMockUp';


export default function HomePage() {
    return (
        <div>
            <Carousel />
            <HeroSection/>
            <HeroSection/>
            <PhoneMockUp />
            <Footer />
        </div>
    );
}