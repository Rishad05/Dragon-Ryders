import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import Vehicle from '../Vehicle/Vehicle';
import image from '../../image/bacground.jpg'
import './Home.css'

const Home = () => {
    const [vehicle,setVehicle] = useState([])
    useEffect (() => {
        setVehicle(fakeData)
    
    }, [])
    return (
       <div className="header-style" style={{ backgroundImage: `url(${image})`}}>
            <div className="row m-0">
            {
                 vehicle.map(vehicle =><div className="col-lg-3 col-md-6 col-sm-12 "><Vehicle vehicle = {vehicle}></Vehicle></div>)
            }
        </div>
       </div>
    );
};
export default Home;