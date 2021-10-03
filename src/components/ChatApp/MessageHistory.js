import React from 'react'
import { data } from './ChatHistory/data'

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

export default MessageHistory