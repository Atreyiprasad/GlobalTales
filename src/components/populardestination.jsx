import React from 'react'
import "./populardestination.css"
import DestinationSlider from "./DestinationSlider.jsx"

const populardestination = () => {
    return (
        <>
            <div className="explore-container">
                <div className="explore-heading">
                    <h1>Explore Popular<br />Destinations</h1>
                </div>
                <div className="explore-description">
                    <p>
                        We have recommended popular destinations every week.
                        So you don’t have to worry about your dream destination
                        with traver
                    </p>
                </div>
            </div>

            <DestinationSlider/>


        </>
    )
}

export default populardestination
