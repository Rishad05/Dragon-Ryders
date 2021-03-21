import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const { id, vehicleName } = useParams();
    const history = useHistory();
    const handleVehicleInfo = (id, vehicleName) =>{
        history.push(`/vehicleInfo/${id}/${vehicleName}`);
    }
    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
        }
        
    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-6 ">
                    <div className="card bg-light shadow radius text-white" style={{width:'25rem',height:'25rem'}}>
                        <form className="p-3">
                        <label for="destination"  className="p-3 text-dark">Pick from</label>
                       <input  onBlur={handleBlur} type="text" className="form-control" required></input>
                        <label className="p-3 text-dark">Pick To</label>
                       <input onBlur={handleBlur} type="text" className="form-control" required></input>
                        <button className="btn btn-success mt-3 w-100" onClick ={() =>handleVehicleInfo(id, vehicleName)}>Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6  mt-3">
                   <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;
