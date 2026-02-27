const fetch = require("node-fetch");

exports.getHint = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const prompt = `
You are a SQL tutor.
Give a helpful hint for solving the problem.
Do NOT provide the full SQL query.
Explain only the approach or concept.

Question:
${question}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6
      })
    });

    const data = await response.json();

    res.json({
      hint: data.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to generate hint"
    });
  }
};