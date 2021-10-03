import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching(){
    return(
        //REPLACE fetchPoint with the object where data will be recieved
        // const [fetchPoint, setfetchPoint]=useState([])

        /*useEffect(()=>{
            axios.get('HTTPS LINK')
                .then(res=>{
                    console.log(res)
                    //setfetchPoint(res.data)
                })
                .catch(err=>{
                    console.log(err)
                })
        }, [])         */
        <div>
            <ul>
                {
                    fetchPoint.map(fetchPoint => <li key={fetchPoint.id}>{fetchPoint.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching
