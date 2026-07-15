import { Link, useLocation } from "react-router-dom"
import { ROUTES } from '../const';
import Result from "../components/Result/Result";

export default function ResultPage() {
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen
    const correctNumLen = location.state.correctNumLen
  return (
    <>
        <h1>Result</h1>
        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
        <br />
        <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}
