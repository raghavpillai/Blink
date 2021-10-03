import React, { useState } from 'react'
import axios from 'axios';
import username from './Username';

class Quiz extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
    
    

    render(){
        axios.get("http://localhost:4000/api/question/check/" + "math8" + "/" + username).then((response => console.log(response.data)))

        return(
            <div>
                <div className="h-screen bg-red-200 flex justify-center items-center">
                    <form onSubmit={this.handleSubmit} className="w-80 bg-white rounded px-4 py-8">
                        <h2 className="text-3xl mb-4">Quiz</h2>
                        <label htmlFor="question" className="mb-10">Question: What is 1 + 3 - 5 + 19</label>
                        <br/>
                        <input type="checkbox" id="answer1" name="answer1" value="1"/>
                        <label for="answer1"> 1</label><br/>
                        <input type="checkbox" id="answer2" name="answer2" value="2"/>
                        <label for="answer2"> 19</label><br/>
                        <input type="checkbox" id="answer3" name="answer3" value="3"/>
                        <label for="answer3"> 34</label><br/>
                        <input type="checkbox" id="answer4" name="answer4" value="4"/>
                        <label for="answer4"> 12</label><br/>
                        
                        <input type="submit" value="Submit" className="bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-2xl px-3 py-2" />
                    </form>
                </div>
            </div>
        )
    }

}

export default Quiz
