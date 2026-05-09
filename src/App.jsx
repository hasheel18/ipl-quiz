import { useState, useEffect } from "react";
import Question from "./Question";
import Score from "./Score";
import iplQuestions from "./questions";

const TIMER_SECONDS = 10;

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!started || !timerActive || quizEnd) return;

    if (timeLeft === 0) {
      handleTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, timeLeft, timerActive, quizEnd]);

  const handleTimeout = () => {
    setTimerActive(false);
    setSelected("__timeout__");
  };

  const handleAnswer = (answer) => {
    if (selected) return;
    setTimerActive(false);
    setSelected(answer);
    if (answer === iplQuestions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < iplQuestions.length) {
      setCurrent(next);
      setSelected("");
      setTimeLeft(TIMER_SECONDS);
      setTimerActive(true);
    } else {
      setQuizEnd(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setQuizEnd(false);
    setTimeLeft(TIMER_SECONDS);
    setTimerActive(false);
    setStarted(false);
  };

  return (
    <div className="app-shell">
      <div className="quiz-card">
        <div className="brand">
          <span className="brand-icon">🏏</span>
          <span className="brand-name">IPL Quiz</span>
        </div>

        {!started && !quizEnd && (
          <div className="start-screen">
            <div className = "start-logo">
              <img src={`${import.meta.env.BASE_URL}images/teams/ipl_logo.png`} alt="IPL Logo" />
            </div>
            <div className="start-title">Welcome to the IPL Quiz</div>
            <div className="start-desc">
              15 questions • 10 seconds each • Test your IPL knowledge!
            </div>
            <button
              className="start-button"
              onClick={() => {
                setStarted(true);
                setCurrent(0);
                setSelected("");
                setScore(0);
                setQuizEnd(false);
                setTimeLeft(TIMER_SECONDS);
                setTimerActive(true);
              }}
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* 2. QUIZ SCREEN */}
        {started && !quizEnd && (
          <Question
            question={iplQuestions[current]}
            selected={selected}
            onAnswer={handleAnswer}
            onNext={handleNext}
            current={current}
            total={iplQuestions.length}
            timeLeft={timeLeft}
            timerMax={TIMER_SECONDS}
          />
        )}

        {/* 3. SCORE SCREEN */}
        {quizEnd && (
          <Score
            score={score}
            total={iplQuestions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;