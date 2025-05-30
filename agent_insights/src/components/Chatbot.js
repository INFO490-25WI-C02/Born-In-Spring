import React, { useState, useRef, useEffect } from 'react';
import '../chatbot.css';

function Chatbot() {
  const initialMessages = [
    {
      sender: 'bot',
      text: '👋 Hi there! Welcome to InsightBot. The first reply may take 1-2 mins. Thanks for waiting!',
    },
    {
      sender: 'bot',
      text: "Not sure where to start? Try asking:\n• Can you match me with an agent near Bellevue?\n• I want someone who's patient and responsive.\n• I'm looking for a family-friendly home — who can help?",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotReply = async (userInput) => {
    try {
      const response = await fetch("https://born-in-spring.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      return data.reply;
    } catch (err) {
      console.error("Error getting reply from backend:", err);
      return "Sorry, I’m having trouble getting a response right now.";
    }
  };

  const extractAgentSlug = (text) => {
    const match = text.match(/recommend\s+([A-Z][a-z]+\s[A-Z][a-z]+)/i);
    if (match) {
      const name = match[1].toLowerCase().replace(/\s+/g, '_');
      return name;
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    const reply = await getBotReply(input);

    const agentSlug = extractAgentSlug(reply);
    const botMsg = {
      sender: 'bot',
      text: reply,
      agentSlug: agentSlug,
    };

    setMessages((prev) => [...prev, botMsg]);
    setInput('');
  };

  return (
    <>
      <div className="chat-wrapper">
        <div className="chat-container" ref={containerRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat ${msg.sender === 'user' ? 'user-chat' : 'bot-chat'}`}>
              {msg.sender === 'bot' && (
                <img src="logo.jpg" alt="Bot" className="avatar bot-avatar" />
              )}
              <div className="message">
                {msg.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                {msg.agentSlug && (
                  <div style={{ marginTop: '10px' }}>
                    <a href={`/AgentProfile?agent=${msg.agentSlug}`} className="profile-btn">
                      View Profile
                    </a>
                  </div>
                )}
              </div>
              {msg.sender === 'user' && (
                <img src="User.png" alt="User" className="avatar user-avatar" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-btn" onClick={handleSend}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </>
  );
}

export default Chatbot;
