import Header from "./components/Header";
import Score from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Batch 2025" />

      <main className="scores-container">
        <Score courseName="Java" courseResults={JAVA_RESULTS} />
        <Score courseName="Python" courseResults={PYTHON_RESULTS} />
        <Score courseName="HTML" courseResults={HTML_RESULTS} />
        <Score courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;