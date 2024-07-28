import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserDataModel} from "../../models/IUserDataModel";
import {userService} from "../../services/api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";

const RegistrationFormComponent = () => {
    const {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IUserDataModel>({mode: "all", resolver: joiResolver(userValidator)})
    const [
        isRegistrationState,
        setIsRegistrationState
    ] = useState<boolean>(false)
    const registration = async (data: IUserDataModel) => {
        const isAuth = await userService.saveUser(data)
        setIsRegistrationState(isAuth)
    }
    return (
        <div>
            {isRegistrationState && (<div>you have registered</div>)}
            {errors.username && (<div>{errors.username?.message}</div>)}
            {errors.password && (<div>{errors.password?.message}</div>)}
            <form onSubmit={handleSubmit(registration)}>
                <input type={"text"} {...register("username", {
                    required: true,
                    min: {value: 1, message: "username to small"},
                    max: {value: 20, message: "username to big"}
                })}></input>
                <input type={"text"} {...register("password", {
                    required: true,
                    min: {value: 1, message: "password to small"},
                    max: {value: 128, message: "password to big"}
                })}></input>

                <button disabled={!isValid}>Registration</button>
            </form>
        </div>
    );
};

export default RegistrationFormComponent;


