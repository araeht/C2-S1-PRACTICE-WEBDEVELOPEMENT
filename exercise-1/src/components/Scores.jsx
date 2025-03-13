import Statistic from "./Statistics";

function Score({ courseName, courseResults }) {
    const getScoreClass = (score) => {
        return score < 50 ? 'warning' : '';
    }

    const calculateStatistics = (results) => {
        const scores = results.map(student => student.score);
        const total = scores.reduce((acc, score) => acc + score, 0);
        const average = (total / scores.length).toFixed(2);
        const min = Math.min(...scores);
        const max = Math.max(...scores);
        return { average, min, max };
    };

    const stats = calculateStatistics(courseResults);

    return (
      <div className="scores">
        <h1>{courseName}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResults.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td className={getScoreClass(student.score)}>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Statistic stats={stats} />
      </div>
    );
  }
  
  export default Score;
  