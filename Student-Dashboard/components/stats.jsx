function Stats({ students }) {
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.length === 0
      ? 0
      : Math.floor(
          students.reduce((sum, s) => sum + s.score, 0) /
            students.length
        );

  return (
    <div className="stats-container">
      <div className="stat-box">
        <p>TOTAL</p>
        <h2>{total}</h2>
      </div>

      <div className="stat-box">
        <p>PASSED</p>
        <h2>{passed}</h2>
      </div>

      <div className="stat-box">
        <p>AVG SCORE</p>
        <h2>{avg}</h2>
      </div>
    </div>
  );
}

export default Stats;