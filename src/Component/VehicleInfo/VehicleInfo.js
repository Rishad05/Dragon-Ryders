import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import { useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';

const VehicleInfo = () => {
    const { id } =useParams(); 
        
    const [vehicles, setVehicles] = useState([]);
    const {vehicleName, vehicleImage,vehicleSeat,ticketPrice, from, to} = vehicles;

    useEffect(() => {
        setVehicles(fakeData[id-1])
    }, [id]);
    

    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-4 mt-3 col-sm-12 bg-light shadow radius rounded">
                    <div className="mt-5">
                        <div class="mt-5 text-light bg-success p-3 rounded">
                            <h5>From: <strong>{from}</strong> </h5>
                            <h5>To: <strong>{to}</strong> </h5>
                        </div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                            <strong class="ml-5"> {vehicleName}</strong>
                            <img class="ml-3" style={{ width: '40px' }} src="https://e7.pngegg.com/pngimages/73/985/png-clipart-computer-icons-person-icon-design-knowledge-miscellaneous-blue.png" alt="" /> <strong> {vehicleSeat}</strong> <strong class="ml-5">${ticketPrice}</strong>
                        </div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                            <strong class="ml-5"> {vehicleName}
                            <img class="ml-3" style={{ width: '40px' }} src="https://e7.pngegg.com/pngimages/73/985/png-clipart-computer-icons-person-icon-design-knowledge-miscellaneous-blue.png" alt="" /> </strong> <strong> {vehicleSeat}</strong> <strong class="ml-5"> ${ticketPrice}</strong>
                        </div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={vehicleImage} alt="" />
                            <strong class="ml-5"> {vehicleName}</strong>
                            <img class="ml-3" style={{ width: '40px' }} src="https://e7.pngegg.com/pngimages/73/985/png-clipart-computer-icons-person-icon-design-knowledge-miscellaneous-blue.png" alt="" /> <strong> {vehicleSeat}</strong> <strong class="ml-5"> ${ticketPrice}</strong>
                        </div>
                    </div>
                </div>
            
            
            <div className="col-md-8 col-sm-12 mt-3">
                <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
        
    );
};

export default VehicleInfo;