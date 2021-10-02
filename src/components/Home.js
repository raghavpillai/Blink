import React from "react";
import { Link } from 'react-router-dom';
import LogoText from "../images/LogoB.png";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Home(){

    const callback = function (entries) {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
        } else {
        entry.target.classList.remove("animate-fadeIn");
        }
    });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
    });


    return(
        <div>
            <div className = "h-screen bg-red-200"> 
                <div className = "absolute top-4/10 left-1/2 transform -translate-x-1/4">
                    <img className = "w-1/2" src={LogoText}  alt="Blink"/>
                </div>
                <Link to="/login" className = "absolute left-1/2 top-3/4 transform -translate-x-1/2 bg-blue-200 px-10 py-2 rounded-full text-2xl">
                    Login
                </Link>
                
            </div>
            <div className = "h-screen bg-gradient-to-b from-red-200 to-white flex flex-col items-center">
                <div className = "mt-20 mb-10 text-4xl font-bold"> About us</div>
                <div className = "bg-white h-1/2 w-2/4 rounded-lg shadow-lg transform hover:scale-110 duration-700 ease-in-out">
                    <div className = "p-6 text-lg font-medium">
                        We are dedicated to bridging the gap between interactive learning and the online environment for students and teachers.
                        Blink strives to promote an enganging setting that follows in-person learning through real-time interactive classroom activities.
                        With a more connective present, the horizons of the future becomes limitless.
                    </div>
                    <div className = "absolute bottom-0 bg-blue-100 w-full h-1/3 p-4 font-semibold">
                        "Blink is the only application that scales on large classrooms. It's easy to adapt, improve, and design classroom environments."
                        <div className = "font-light text-sm text-red-500">-Martha Excalibus</div>
                        <div className = "font-light text-sm">Elementary School Teacher, Texas</div>
                    </div>

                </div>
            </div>

            <div className = "h-screen flex justify-center flex-wrap">
                <div className = "mt-20  text-4xl font-bold w-full text-center"> Getting Started</div>
                <div className = "grid grid-cols-3 gap-4 h-3/5 w-1/2 text-2xl font-semibold">
                    <div className = "rounded-xl bg-red-200 transform hover:skew-y-6 transition duration-300">
                        <div className = "w-full h-1/6 bg-blue-100 rounded-t-xl flex justify-center items-center">
                            Discover
                        </div>
                        <div className = "p-4 text-lg font-normal h-1/2">
                            Click here to view information on how to use Blink and its features more closely
                        </div>
                        <div className = "w-full flex justify-center">
                            <HelpOutlineIcon style={{ fontSize: 150 }}/>
                        </div>
                    </div>
                    <div className = "rounded-xl bg-red-200 transform hover:skew-y-6 transition duration-300">
                        <div className = "w-full h-1/6 bg-blue-100 rounded-t-xl flex justify-center items-center">
                            Pricing
                        </div>
                        <div className = "p-4 text-lg font-normal h-1/2">
                            Check out pricing options based on your needed level of classroom activity
                        </div>
                        <div className = "w-full flex justify-center">
                            <AttachMoneyIcon style={{ fontSize: 150 }}/>
                        </div>
                    </div>
                    <div className = "rounded-xl bg-red-200 transform hover:skew-y-6 transition duration-300">
                        <div className = "w-full h-1/6 bg-blue-100 rounded-t-xl flex justify-center items-center">
                            Reach Out
                        </div>
                        <div className = "p-4 text-lg font-normal h-1/2">
                            Feel free to send any questions our way using any form of communication. Click here for all the options
                            to reach out.
                        </div>
                        <div className = "w-full flex justify-center">
                            <MailOutlineIcon style={{ fontSize: 150 }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
