import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios"

export default function Login() {
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.get("http://localhost:4000/api/user/login/" + data.username + "/" + data.password)
            .then((response) => {
                console.log(response)
                if (response.data == 'PASSED') {
                    history.push('/organizations')
                }
            });
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="h-screen bg-gray-300 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-80 bg-white rounded px-4 py-8">
                <h2 className="text-3xl mb-4">Login</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="username" className="mb-10">Username:</label><br></br>
                <input {...register("username")} id="username" placeholder="username" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="password" className="mb-5">Password:</label><br></br>
                <input {...register("password", { required: true })} id="password" placeholder="password" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Submit" className="bg-purple-700 text-white rounded-xl px-3 py-2 transform hover:bg-purple-500 active:scale-110" />
            </form>
        </div>
    );
}