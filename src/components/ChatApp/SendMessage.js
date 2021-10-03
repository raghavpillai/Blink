import React from "react";
import { useForm } from "react-hook-form";
import { data } from './ChatHistory/data'


export default function SendMessage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = msg => {
        data.push({
            username: msg.username,
            message: msg.message
        })
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="bg-gray-300 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-80 bg-white rounded px-4 py-8">
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="username" >Username:</label><br></br>
                <input {...register("username")} id="username" placeholder="username" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="message">Message:</label><br></br>
                <input {...register("message", { required: true })} id="message" placeholder="message" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Submit" className="bg-purple-700 text-white rounded-xl px-3 py-2 transform hover:bg-purple-500 active:scale-110" />
            </form>
        </div>
    );
}