import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import Button from './Button';

const LumiChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Lumi! ✨ I can help you find the perfect skill match. What do you want to learn today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const newMessages = [...messages, { id: Date.now(), text: inputText, sender: 'user' }];
        setMessages(newMessages);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            let botResponse = "That sounds interesting! Tell me more! 💖";
            const lowerInput = inputText.toLowerCase();

            if (lowerInput.includes('learn')) {
                botResponse = "Ooh, learning is fun! 📚 Have you checked the 'Academic' section? There are amazing tutors there!";
            } else if (lowerInput.includes('teach')) {
                botResponse = "You're a star! 🌟 Sharing your skills is the best way to make friends.";
            } else if (lowerInput.includes('crochet') || lowerInput.includes('knitting')) {
                botResponse = "I love fiber arts! 🧶 I know a few people who would love to swap skills with you.";
            } else if (lowerInput.includes('code') || lowerInput.includes('programming')) {
                botResponse = "Beep boop! 🤖 Coding is a superpower! I can help you find a coding buddy.";
            } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponse = "Hello bestie! 👋 Ready to find your skill match?";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-primary/20 overflow-hidden transform transition-all duration-300 origin-bottom-right animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-lg">Lumi ✨</h3>
                                <p className="text-xs text-white/80">Your Skill Matchmaker</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-96 overflow-y-auto p-4 bg-background space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white text-text border border-gray-100 rounded-tl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm bg-gray-50"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white p-2 rounded-full hover:bg-primary-light transition-colors shadow-md disabled:opacity-50"
                                disabled={!inputText.trim()}
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-primary/40 hover:scale-110 transition-all duration-300"
            >
                {isOpen ? (
                    <X className="h-8 w-8" />
                ) : (
                    <div className="relative">
                        <MessageCircle className="h-8 w-8" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                    </div>
                )}
            </button>
        </div>
    );
};

export default LumiChatbot;
