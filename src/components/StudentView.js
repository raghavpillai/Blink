import React from "react";


export function StudentView(){
    return(
        <div className = "flex flex-wrap flex-grow">

            <section id="mainContent" className="px-6 py-3 lg:w-4/5 w-3/4">
                
                <div className="font-bold text-2xl md:text-4xl lg:text-6xl">Big Heading</div>
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