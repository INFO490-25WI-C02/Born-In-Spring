import React, { useState, useRef, useEffect } from 'react';
import '../chatbot.css';

function Chatbot() {
  const initialMessages = [
    {
      sender: 'bot',
      text: '👋 Hi there! Welcome to InsightBot.',
    },
    {
      sender: 'bot',
      text: "Here are some things I can help with:\n• What’s the average commission in Seattle?\n• Show me a top-rated agent in Capitol Hill.\n• Do you have agents who offer virtual tours?\n• Recommend an agent within my budget.",
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

  const getBotReply = (userInput) => {
    const text = userInput.toLowerCase();

    if (text.includes('commission')) {
      return "In Seattle, the average total real estate commission is around 5% to 6% of the final sale price.";
    } else if (text.includes('top') && text.includes('capitol hill')) {
      return "Sure! Michael Parker is a top-rated agent in Capitol Hill with a 4.9⭐ rating.";
    } else if (text.includes('virtual tour')) {
      return "Yes! We have agents who provide virtual home tours. Want me to recommend one?";
    } else if (text.includes('budget')) {
      return "Tell me your target budget and location, and I’ll find agents that match.";
    } else {
      return "Thanks for your message! Try asking about commissions, top agents, or specific neighborhoods.";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botMsg = { sender: 'bot', text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
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
