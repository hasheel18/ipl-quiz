function Question({ question, selected, onAnswer, onNext, current, total, timeLeft, timerMax }) {
  const progress = (current / total) * 100;
  const timerPct = (timeLeft / timerMax) * 100;
  const timedOut = selected === "__timeout__";
  const hasImages = question.images && Object.keys(question.images).length > 0;

  const getOptionClass = (option) => {
    if (!selected) return "opt";
    if (option === question.answer) return "opt opt--correct";
    if (option === selected && selected !== question.answer) return "opt opt--wrong";
    return "opt opt--dim";
  };

  const timerColor =
    timeLeft > 8 ? "#4ade80" : timeLeft > 4 ? "#facc15" : "#f87171";

  return (
    <div className="question-wrap">
      <div className="progress-row">
        <span className="progress-label">{current + 1} / {total}</span>
        <div className="progress-bg">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="timer-row">
        <div className="timer-bar-bg">
          <div
            className="timer-bar-fill"
            style={{
              width: `${timerPct}%`,
              background: timerColor,
              transition: "width 1s linear, background 0.3s",
            }}
          />
        </div>
        <span className="timer-num" style={{ color: timerColor }}>
          {timeLeft}s
        </span>
      </div>

      <h2 className="q-text">{question.question}</h2>

      <div className={hasImages ? "options options--grid" : "options"}>
        {question.options.map((option, i) => (
          <button
            key={i}
            className={getOptionClass(option) + (hasImages ? " opt--card" : "")}
            onClick={() => onAnswer(option)}
            disabled={!!selected}
          >
            {hasImages && question.images[option] && (
              <div className="opt-img-wrap">
                <img
                  src={question.images[option]}
                  alt={option}
                  className="opt-img"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            )}
            <div className="opt-bottom">
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span className="opt-text">{option}</span>
              {selected && option === question.answer && (
                <span className="opt-badge opt-badge--correct">✓</span>
              )}
              {selected && option === selected && selected !== question.answer && (
                <span className="opt-badge opt-badge--wrong">✗</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="feedback-row">
          <p className="feedback-msg">
            {timedOut
              ? "⏰ Time's up! The correct answer is highlighted."
              : selected === question.answer
              ? "🎉 Correct! Well played."
              : "❌ Incorrect. Better luck next time!"}
          </p>
          <button className="next-btn" onClick={onNext}>
            {current + 1 < total ? "Next question →" : "See results →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;