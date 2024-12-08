import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout,mode }) {

    const [remainingTime, setRemainigTime] = useState(timeout)
    useEffect(() => {
        console.log('setting timer')
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log('setting interval')
        const interval = setInterval(() => {
            setRemainigTime(prevTime => prevTime - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    )
}