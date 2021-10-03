import React from 'react'
import { useForm } from "react-hook-form";


class TeacherQuiz extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            question: '',
            answerChoices: [],
        }

        this.setQuestion = this.setQuestion.bind(this)
        this.addAnswer = this.addAnswer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setQuestion(event){
        this.setState({question: event.target.value})
    }

    addAnswer(event){
        this.state.answerChoices.push(event.target.value)
    }

    handleSubmit(event){
        alert('Questions sent to students!')
    }



    render(){
        
       return(
           <div className="h-screen bg-red-200 flex justify-center items-center">
            <form onSubmit={this.handleSubmit} className="w-80 bg-white rounded px-4 py-8">
                <h2 className="text-3xl mb-4">Quiz</h2>
                <label htmlFor="question" className="mb-10">Question:</label>
                <input onChange={this.setQuestion} id="question" placeholder="question" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="answer" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="answer" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <label htmlFor="answer" className="mb-5">Answer:</label>
                <input value={this.state.value} onChange={this.addAnswer} id="answer" placeholder="answer" className="border text-grey-darkest rounded-md mb-10 p-2" /><br />
                
                <input type="submit" value="Submit" className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-2xl px-3 py-2" />
            </form>
        </div>
       )
    }

    
}

export default TeacherQuiz