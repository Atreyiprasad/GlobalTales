import React from 'react'
import "./Home.css"
import Populardestination from './populardestination.jsx'
import TopValue from "./Topvalue.jsx"
import WhyChooseUs from "./WhyChooseUs.jsx"
import ExperienceSection from "./ExperienceSection"
import Testimonial from "./Testimonial.jsx"
import ModernHomesLanding from "./ModernHomesLanding.jsx"
const Home = () => {
    return (
        <>


            <ModernHomesLanding/>



            {/* //idhar aayega explaore populardestination  */}
            <Populardestination/>

            <TopValue/>

            <WhyChooseUs/>

            <ExperienceSection/>
            <Testimonial/>

        </>
    )
}

export default Home
