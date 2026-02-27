import React from "react";
import Editor from "@monaco-editor/react";

function SqlEditor({ query, setQuery }) {
  return (
    <div className="sql-editor">
      <Editor
        height="200px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </div>
  );
}

export default SqlEditor;