import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[];
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map((car) => (<div key={car.id}>{car.id} {car.year} {car.brand} {car.price}</div>))}
        </div>
    );
};

export default CarsComponent;