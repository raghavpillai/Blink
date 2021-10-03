import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Login() {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    return (

        <div>
            <Navbar />
            <div className="h-screen bg-red-200 flex justify-center items-center s">
                <div className="bg-white h-4/6 lg:w-1/4 w:1/2 rounded-2xl flex justify-center">
                    <div className="py-10 px-5">
                        <div className="text-3xl lg:text-5xl font-extrabold">
                            Login
                        </div>
                        <div className="text-s mt-2">
                            Please sign in to enter class
                        </div>
                        <form className="text-xl" onSubmit={handleSubmit(onSubmit)}>
                            <label>

                                <br />
                                <input className="border text-grey-darkest rounded-md mt-7 mb-5"
                                    {...register("username")} placeholder="username"
                                />
                            </label>
                            <label>

                                <br />
                                <input className="border text-grey-darkest rounded-md mb-10"
                                    {...register("password")} placeholder="password"
                                />
                            </label>
                            <p className="text-xs">{result}</p>
                            <Link to="/organizations" className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-2xl px-3 py-2">Submit</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;