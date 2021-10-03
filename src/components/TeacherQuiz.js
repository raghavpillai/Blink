import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"

class TeacherQuiz extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            time: '',
            question: '',
            answerChoices: [],
        }

        this.setQuestion = this.setQuestion.bind(this)
        this.time = this.setTime.bind(this)
        this.addAnswer = this.addAnswer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setTime(event){
        this.setState({time: event.target.value})
    }

    setQuestion(event){
        this.setState({question: event.target.value})
    }

    addAnswer(event){
        this.state.answerChoices.push( [event.target.value, false] )
    }

    handleSubmit(event){
        const myObj = {
            question: this.state.question,
            time: 15,
            answers: this.state.answerChoices
        };

        const myObjStr = JSON.stringify(myObj);

        axios.get("http://localhost:4000/api/question/create/math8/"+myObjStr).then((response) => console.log(response.data));

        alert('Questions sent to students!')
    }

    render(){
        
       return(
           <div className="h-screen bg-gray-300 flex justify-center items-center">
            <form onSubmit={this.handleSubmit} className="w-80 bg-white rounded px-4 py-8">
                <h2 className="text-3xl mb-4">Quiz</h2>
                <label htmlFor="question" className="mb-10">Question:</label>
                <input onChange={this.setQuestion} id="question" placeholder="question" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="time" className="mb-5">Time:</label>
                <input onChange={this.state.value} id="time" placeholder="Seconds" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />

                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="..." className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="..." className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="..." className="border text-grey-darkest rounded-md mb-10 p-2" /><br />

                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="..." className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <input type="submit" value="Submit" className="bg-purple-700 rounded-2xl px-3 py-2 transform hover:bg-purple-500 active:scale-110" />
            </form>
        </div>
       )
    }

    
}

export default TeacherQuiz