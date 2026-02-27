import React, { useState } from "react";
import QuestionPanel from "../components/QuestionPanel";
import SampleDataViewer from "../components/SampleDataViewer";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import HintButton from "../components/HintButton";
import { executeQuery } from "../api/sqlApi";

function AssignmentAttempt() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleExecute = async () => {
    setError("");
    try {
      const data = await executeQuery(query);
      setResult(data.rows || []);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="assignment-attempt">
      <QuestionPanel />
      <SampleDataViewer />
      <SqlEditor query={query} setQuery={setQuery} />

      <button onClick={handleExecute}>Execute Query</button>

      {error && <p className="error">{error}</p>}
      <ResultTable data={result} />
      <HintButton />
    </div>
  );
}

export default AssignmentAttempt;