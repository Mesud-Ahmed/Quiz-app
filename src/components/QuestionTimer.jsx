import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainigTime] = useState(timeout)
    useEffect(() => {
        setTimeout(onTimeout, timeout)
    },[timeout,onTimeout])

    useEffect(() => {
        setInterval(() => {
            setRemainigTime(prevTime => prevTime - 100)
        }, 100)

    }, [])


    return (
        <progress id="question-time" max={timeout} value={remainingTime}/>
    )
}