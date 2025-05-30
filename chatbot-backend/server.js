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
      `${agent.name}, located in ${agent.location}, rating: ${agent.rating}, specialties: ${agent.specialties.join(", ")}, commission: ${agent.commission}`
    ).join('\n');

    const prompt = `
You are a helpful real estate assistant.  
1) If the user is asking for **general market info** (prices, process, tips, etc.), you should answer the question directly using your real-estate knowledge, **without** recommending an agent.  
2) Only recommend **one** specific agent if the user explicitly asks to be matched with or recommended an agent (words like "recommend", "agent", "match"). If so, mention the agent’s name, rating, and how they meet the request.  

Here is the list of available agents you **may** recommend (only when asked):

${context}

Now, respond to the user's last message.
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
