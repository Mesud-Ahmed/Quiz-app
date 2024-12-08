
import { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import trophy from '../assets/trophy.png'
import Question from './Question'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const [answerState, setAnswerState] = useState('')

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1

    const quizIsComplete = activeQuestionIndex == QUESTIONS.length

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState('answerd')

        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })

        setTimeout(() => {
            if (selectedAnswer == QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }
            setTimeout(() => {
                setAnswerState('')
            }, 1000)
        }, 1000)
    }, [activeQuestionIndex])

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
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                onSelectAnswer={handleSelectAnswer}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]} 
                onSkipAnswer={handleSkipAnswer}/>
        </div>


    )
}