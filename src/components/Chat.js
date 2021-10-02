import React from "react";
import { Helmet } from 'react-helmet';

function Test(){
    return(
        <div>
            <Helmet>
                <title>Chat System </title>
            </Helmet>
            <h3> lol1 </h3>

            <div className = "bg-red-200">
                Hello World
            </div>
        </div>
    )
}

export default Test;