import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display"
import quizData from "../data/quiz"
import { useState } from 'react';

export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length

    const handleClick = (clickedIndex) => {
        if(clickedIndex === quizData[quizIndex].answerIndex) {
            setAnswerLogs((prev) => [...prev, true])
        } else {
            setAnswerLogs((prev) => [...prev, false])
        }
        setQuizIndex((prev) => prev + 1);
    };
  return (
    <>
        <Display>
            {`Q1. ${quizData[quizIndex].question}`}
        </Display>
        {
            quizData[quizIndex].options.map((option, index) => {
                return (
                    <Button key={`option-${index}`} onClick={() => handleClick(index)}>
                        {option}
                    </Button>
                )
            })
        }
        
    </>
  )
}
