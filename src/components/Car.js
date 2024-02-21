import React from 'react';
import { Container, Paper, Chip } from '@mui/material';

const Car = (props) => {
    const id = props.match.params.id;
    const car = props.cars.find(c => c.id == id); // Changed cars to props.cars

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.keys(car).map((key, idx) => (
                        <Chip key={idx} label={`${key}: ${car[key]}`} />
                    ))
                }
            </Paper>
        </Container>
    );
};

export default Car;