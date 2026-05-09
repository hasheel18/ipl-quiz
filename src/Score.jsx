function Score({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  let message = "";
  let emoji = "";
  if (percentage >= 80) {
    message = "IPL Legend!";
    emoji = "🏆";
  } else if (percentage >= 50) {
    message = "Nice cricket knowledge!";
    emoji = "🏏";
  } else {
    message = "Keep watching the IPL!";
    emoji = "📺";
  }

  const barColor =
    percentage >= 80 ? "#4ade80" : percentage >= 50 ? "#facc15" : "#f87171";

  return (
    <div className="score-wrap">
      <div className="score-emoji">{emoji}</div>
      <h2 className="score-title">{message}</h2>

      <div className="score-circle">
        <span className="score-fraction">
          {score}<span className="score-total">/{total}</span>
        </span>
        <span className="score-pct">{percentage}%</span>
      </div>

      <div className="score-bar-bg">
        <div
          className="score-bar-fill"
          style={{ width: `${percentage}%`, background: barColor }}
        />
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <span className="stat-num stat--correct">{score}</span>
          <span className="stat-lbl">Correct</span>
        </div>
        <div className="stat-card">
          <span className="stat-num stat--wrong">{total - score}</span>
          <span className="stat-lbl">Wrong</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">{percentage}%</span>
          <span className="stat-lbl">Score</span>
        </div>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Play again
      </button>
    </div>
  );
}

export default Score;