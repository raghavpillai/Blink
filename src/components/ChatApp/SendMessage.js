import axios from "axios";
import React from "react";
import { data } from './ChatHistory/data'

class SendMessage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const target = event.target
        this.setState({[target.name]: target.value})
    }

    handleSubmit(event){
        data.push({
            username: this.state.username,
            message: this.state.message
        })
        event.preventDefault()
    }


    render(){
        return(
            <form>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Message:
                    <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SendMessage;