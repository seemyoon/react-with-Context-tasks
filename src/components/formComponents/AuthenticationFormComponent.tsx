import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserDataModel} from "../../models/IUserDataModel";
import {authService} from "../../services/api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";

const AuthenticationFormComponent = () => {
    const {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IUserDataModel>({mode: "all", resolver: joiResolver(userValidator)})
    const [
        isAuthState,
        setIsAuthState
    ] = useState<boolean>(false)
    const authenticity = async (data: IUserDataModel) => {
        const isAuth = await authService.authUser(data)
        setIsAuthState(isAuth)
    }
    return (
        <div>
            {isAuthState ? (<div>Success</div>) : (<div>Not success</div>)}
            {errors.username && (<div>{errors.username?.message}</div>)}
            {errors.password && (<div>{errors.password?.message}</div>)}
            <form onSubmit={handleSubmit(authenticity)}>
                <input type={"text"} {...register("username",
                    {
                        required: true,
                        min: {value: 1, message: "username to small"},
                        max: {value: 20, message: "username to big"}
                    })}></input>
                <input type={"text"} {...register("password", {
                    required: true,
                    min: {value: 1, message: "password to small"},
                    max: {value: 128, message: "password to big"}
                })}></input>
                <button disabled={!isValid}>Authentication</button>
            </form>
        </div>
    );
};

export default AuthenticationFormComponent;