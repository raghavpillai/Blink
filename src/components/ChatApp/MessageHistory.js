import React from 'react'
import { data } from './ChatHistory/data'

class MessageHistory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    }

    forceUpdateHandler() {
        this.forceUpdate()
    }

    componentDidMount() {
        setInterval(this.forceUpdateHandler, 1000)
    }

    render() {
        return (
            <ul className="bg-white h-3/6 m-4 rounded p-4">
                {data.map((data) => {
                    return (
                        <li>
                            {data.username}: {data.message}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MessageHistory