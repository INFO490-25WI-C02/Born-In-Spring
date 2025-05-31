const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = require('./firebaseKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://agent-insight-default-rtdb.firebaseio.com/'
});

const db = admin.database();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const snapshot = await db.ref('agents').once('value');
    const agents = snapshot.val();

    if (!agents) {
      return res.json({ reply: "No agents found in the database." });
    }

    const context = Object.values(agents).map(agent =>
      `${agent.name}, located in ${agent.location}, rating: ${agent.rating}, market: ${agent.market || "N/A"}, specialties: ${(agent.specialties || []).join(", ")}`
    ).join('\n');

    const prompt = `
You are a helpful real estate assistant. Here is a list of available agents:

${context}

Based on the user's request, recommend ONE specific agent. Mention the agent's name, their rating, and the most relevant market they serve. Be concise.
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: userMessage }
      ]
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ reply: 'Something went wrong. Please try again later.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
