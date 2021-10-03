import React from "react";
import avatar from '../images/emptyAvatar.png';
import mike from '../images/mike.jpeg';


export function StudentView(){
    return(
        <div className = "flex flex-wrap flex-grow max-h-screen">

            <section id="mainContent" className="flex flex-wrap lg:w-4/5 w-3/4">
                
                <div className="w-full h-4/5">
                    <div className="h-full bg-no-repeat bg-cover"style={{ backgroundImage: `url(${mike})` }}>
                        .
                    </div>
                </div>
                <div className="w-full h-1/5 bg-yellow-200 flex grid grid-cols-8">
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                    <img className="object-scale-down" src={avatar} alt="avatar" />
                </div>
            </section>

            <section
            id="ghost"
            className="flex justify-center h-screen sticky top-0 right-0 lg:w-1/5 w-1/4 bg-blue-200"
            ></section>

            <section
                id="Sidebar"
                className="flex justify-center items-end h-screen fixed top-0 right-0 border-l-2 border-gray-600 lg:w-1/5 w-1/4 text-xs lg:text-sm text-center"
            >
                <form className = "pb-4 w-full">
                    <input className = "w-11/12 rounded-sm text-lg"type="text" placeholder="Message"/>
                </form>
            </section>
        </div>
    )
}

export default StudentView;