import React from 'react'
import { data } from './ChatHistory/data'
import MessageHistory from './MessageHistory'
import SendMessage from './SendMessage'

function MessageWrapper() {


    return(
        <div>
            <MessageHistory />
            <SendMessage />
        </div>
    )
}

export default MessageWrapper