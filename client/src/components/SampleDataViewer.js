import React from "react";

function SampleDataViewer() {
  return (
    <div className="sample-data">
      <h3>Sample Table</h3>
      <pre>
employees(
  id INT,
  name VARCHAR,
  salary INT,
  department VARCHAR
)
      </pre>
    </div>
  );
}

export default SampleDataViewer;