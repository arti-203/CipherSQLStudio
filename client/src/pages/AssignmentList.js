import React from "react";
import { Link } from "react-router-dom";

const assignments = [
  {
    id: 1,
    title: "Employees with Salary > 50K",
    difficulty: "Easy",
    description: "Fetch employees earning more than 50,000"
  }
];

function AssignmentList() {
  return (
    <div className="assignment-list">
      <h2>SQL Assignments</h2>

      {assignments.map((a) => (
        <div key={a.id} className="assignment-card">
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <span>{a.difficulty}</span>
          <br />
          <Link to={`/assignment/${a.id}`}>Attempt</Link>
        </div>
      ))}
    </div>
  );
}

export default AssignmentList;