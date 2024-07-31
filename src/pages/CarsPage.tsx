import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/CarsComponent";
import {authService, carsService} from "../services/api.service";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../models/CarPaginated";
import PaginationComponent from "../components/PaginationComponent";
import {AxiosError} from "axios";

const CarsPage = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useSearchParams({page: "1"})
    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginatedModel>(
        {
            total_items: 0,
            total_pages: 0,
            prev: null,
            next: null,
            items: []
        }
    )
    useEffect(() => {

        const getAllCarsData = async () => {
            try {
                const response = await carsService.getAllCars(query.get("page") || "1")
                if (response) {
                    setCarsPaginatedObj(response)
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh()
                    }catch (e){
                        return navigate("/authorization")
                    }
                }
            }
        }
        getAllCarsData()
    }, [query]);

    return (
        <div>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export default CarsPage;