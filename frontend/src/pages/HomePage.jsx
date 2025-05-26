import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/carousel'
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div>
            <Carousel />
            <h1 className="text-2xl font-bold mb-2">Welcome to the Shopping Cart App</h1>
            <p className="text-red-500">Browse our products and add them to your cart!</p>
            <Footer />
        </div>
    );
}