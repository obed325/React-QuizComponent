import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = { quiz_position: 1}
    }
    render(){
        const isQuizEnd;
        return (
            <div>
                {/* quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} */}
                <QuizEnd />
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]}/>

                    {/* {quizData.quiz_questions[-1].QuizQuestion}
                    quizData.quiz_questions[0].instruction_text} */}
                
            </div>
        )

    }
}

export default Quiz