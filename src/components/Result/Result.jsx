import styles from "./Result.module.css";
import Confetti from 'react-confetti'
import Loading from '../Loading/Loading';

export default function Result({maxQuizLen, correctNumLen}) {
  return (
    <>
    <Loading />
    <div className={styles.result}>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
            {`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}
        </span>
    </div>
    <Confetti />
    </>
  )
}