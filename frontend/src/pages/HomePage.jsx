import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/carousel'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import HeroSection2 from '../components/HeroSection/HeroSection2';
import HeroSection3 from '../components/HeroSection/HeroSection3';
import HeroSection4 from '../components/HeroSection/HeroSection4';
import HeroSection5 from '../components/HeroSection/HeroSection5';


export default function HomePage() {
    return (
        <div>
            <Carousel />
            <HeroSection/>
            <HeroSection2/>
            <HeroSection3/>
            <HeroSection4/>
            <HeroSection5/>
            <Footer />
        </div>
    );
}