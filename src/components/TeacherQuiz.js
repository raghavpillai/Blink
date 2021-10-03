import React from 'react'


class TeacherQuiz extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            question: '',
            answerChoices: []
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
        
    }

    
}