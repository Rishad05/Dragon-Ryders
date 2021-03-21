import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Vehicle.css'

const Vehicle = (props) => {
    const {vehicleName, vehicleImage, id} = props.vehicle;
    const history = useHistory();
    const handleDestination = () =>{
        history.push(`/destination/${vehicleName}/${id}`);
    }
    return (
        <div onClick={handleDestination} className="container mt-5" style={{cursor: "pointer"}}>
            <Card style={{ width: '15rem', height: '12rem' }}>
            <Card.Img className="w-100 h-75 mx-auto" variant="top" src={vehicleImage}  />
            <Card.Body>
            <Card.Title>{vehicleName}</Card.Title>
             </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;