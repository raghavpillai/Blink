import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios"

export default function Login() {
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.get("http://localhost:4000/api/class/info/" + data.class)
            .then((response) => {
                console.log(response)
                if (response.data == 'FAILED') {
                    return
                } else {
                    let something = window.open("data:text/json," + encodeURIComponent(response.data),
                    "_blank");
                    something.focus();
                }
            });
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="h-screen bg-gray-300 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-80 bg-white rounded px-4 py-8">
                <h2 className="text-3xl mb-4">Enroll</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="class" className="mb-5">Class:</label><br></br>
                <input {...register("class", { required: true })} id="class" placeholder="class" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/*  */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Submit" className="bg-purple-700 text-white rounded-xl px-3 py-2 transform hover:bg-purple-500 active:scale-110" />
            </form>
        </div>
    );
}