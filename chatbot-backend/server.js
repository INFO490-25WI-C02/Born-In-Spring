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


    const context = Object.values(agents)
      .map(agent =>
        `${agent.name}, located in ${agent.location}, rating: ${agent.rating}, specialties: ${agent.specialties.join(", ")}, commission: ${agent.commission}`
      )
      .join('\n');



    const wantsAgent = /\b(?:recommend(?: an)? agent|match(?: me)? with an agent|agent near)\b/i
      .test(userMessage);



    const systemPrompt = wantsAgent
      ? `
You are a helpful real-estate assistant.  
When the user explicitly asks you to recommend or match them with an agent, choose ONE agent from the list below and mention their name, rating, and why they fit the user’s request:

${context}
`
      : `
You are a helpful real-estate assistant.  
Answer general questions about prices, market trends, processes, financing, and tips.  
Do NOT recommend any agent unless the user explicitly asks for one.
`;


    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt.trim() },
        { role: 'user', content: userMessage }
      ]
    });


    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (err) {
    console.error('Error in /chat:', err);
    res.status(500).json({ reply: 'Something went wrong. Please try again later.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
