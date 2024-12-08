
import { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import trophy from '../assets/trophy.png'
import Question from './Question'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])


    const activeQuestionIndex = userAnswers.length

    const quizIsComplete = activeQuestionIndex == QUESTIONS.length

    const handleSelectAnswer = useCallback((selectedAnswer) => {


        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })


    }, [])

    const handleSkipAnswer = useCallback(() => { handleSelectAnswer(null), [handleSelectAnswer] })
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={trophy} alt="trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    return (
        <div id="quiz">

            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}

                onSkipAnswer={handleSkipAnswer} />
        </div>


    )
}