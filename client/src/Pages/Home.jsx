import React from 'react'
import Hero from '../Components/Hero'
import FeaturedDestinations from '../Components/FeaturedDestinations'
import ExclusiveOffers from '../Components/ExclusiveOffers'
import Testimonial from '../Components/Testimonial'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedDestinations />
            <ExclusiveOffers />
            <Testimonial />
        </>
    )
}

export default Home