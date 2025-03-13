function Statistic ({stats}) {
    return (
        <div className="statistics-panel">
            <h2>Statistics</h2>
            <p>Average Score: <span>{stats.average}</span></p>
            <p>Min Score: <span>{stats.min}</span></p>
            <p>Max Score: <span>{stats.max}</span></p>
        </div>
    );
}

export default Statistic;