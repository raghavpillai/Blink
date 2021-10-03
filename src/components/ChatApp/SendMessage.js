import React from "react";
import { useForm } from "react-hook-form";
import { data } from './ChatHistory/data'


export default function SendMessage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = msg => {
        data.push({
            username: msg.username,
            message: msg.message
        }) 
        console.log(data)
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="h-screen bg-gray-300 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-80 bg-white rounded px-4 py-8">
                <h2 className="text-3xl mb-4">Login</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="username" className="mb-10">Username:</label><br></br>
                <input {...register("username")} id="username" placeholder="username" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="message" className="mb-5">Message:</label><br></br>
                <input {...register("message", { required: true })} id="message" placeholder="message" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Submit" className="bg-purple-700 text-white rounded-xl px-3 py-2 transform hover:bg-purple-500 active:scale-110" />
            </form>
        </div>
    );
}

/** 
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
        console.log(this.state.username)
        //event.preventDefault()
    }

    onSubmit(){
        console.log('hello')
    }


    render(){
        return(
            <form onSubmit={handleSubmit()}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Message:
                    <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        )
    }
}
*/
