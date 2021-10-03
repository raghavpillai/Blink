import React from 'react'
import { data } from './ChatHistory/data'

class MessageHistory extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    }

    forceUpdateHandler(){
        this.forceUpdate()
    }

    componentDidMount(){
        setInterval(this.forceUpdateHandler,1000)
    }

    render(){
        return(
            <ul>
                {data.map((data) => {
                    return(
                        <li>
                            {data.username}: {data.message}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

/**
export const MessageHistory = () => {
    return(
        <ul>
        {data.map((data) => {
            return(
                <li key={data.username + data.message}>
                    {data.username}: {data.message}
                </li>
            )
        })}
        </ul>
    )
}
*/

export default MessageHistory