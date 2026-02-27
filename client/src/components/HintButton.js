import React, { useState } from "react";

function HintButton() {
  const [hint, setHint] = useState("");

  const getHint = async () => {
    const res = await fetch("/api/get-hint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question:
          "Write a SQL query to fetch employees with salary greater than 50,000"
      })
    });

    const data = await res.json();
    setHint(data.hint);
  };

  return (
    <div className="hint-section">
      <button onClick={getHint}>Get Hint</button>
      {hint && <p>{hint}</p>}
    </div>
  );
}

export default HintButton;