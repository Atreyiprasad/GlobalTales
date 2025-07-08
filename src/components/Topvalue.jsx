import React from 'react'
import "./TopValue.css"
import CardsMain from "./CardsMain.jsx"

const Topvalue = () => {
  return (
    <>
        <div className='Main'>
            <div className='heading'>
                <h1>Top Values For You</h1>
            </div>

            <div className='content'>Try variety of benefits using our services</div>
        </div>

        <CardsMain/>
    </>
  )
}

export default Topvalue
