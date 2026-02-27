const pool = require("../db/pg");

exports.executeQuery = async (req, res) => {
  const { query } = req.body;

  // Basic validation
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  // Security: allow only SELECT queries
  const trimmedQuery = query.trim().toLowerCase();
  if (!trimmedQuery.startsWith("select")) {
    return res.status(400).json({
      error: "Only SELECT queries are allowed"
    });
  }

  try {
    const result = await pool.query(query);
    res.json({
      success: true,
      rows: result.rows
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};