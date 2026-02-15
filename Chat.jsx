import React, { useState } from 'react';
import { Send, User, Search, Phone, Video, MoreVertical } from 'lucide-react';
import Button from '../components/Button';

const Chat = () => {
    // Mock Conversations
    const conversations = [
        {
            id: 1,
            user: 'Riya Sharma',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
            lastMessage: 'Sure, 4 PM works for me!',
            time: '10:30 AM',
            unread: 2,
            online: true
        },
        {
            id: 2,
            user: 'Priya K.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            lastMessage: 'Thanks for the crochet tip!',
            time: 'Yesterday',
            unread: 0,
            online: false
        },
    ];

    const [activeChat, setActiveChat] = useState(conversations[0]);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { id: 1, sender: 'them', text: 'Hi! I saw your request for Linear Algebra help.', time: '10:00 AM' },
        { id: 2, sender: 'me', text: 'Hey Riya! Yes, I am really struggling with Eigenvectors.', time: '10:05 AM' },
        { id: 3, sender: 'them', text: 'No worries! It is easier than it looks. Are you free today?', time: '10:15 AM' },
        { id: 4, sender: 'me', text: 'I am free after 3 PM. Does that work?', time: '10:20 AM' },
        { id: 5, sender: 'them', text: 'Sure, 4 PM works for me!', time: '10:30 AM' },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = {
            id: chatHistory.length + 1,
            sender: 'me',
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChatHistory([...chatHistory, newMessage]);
        setMessage('');
    };

    return (
        <div className="bg-background min-h-screen py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-100px)]">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex">

                    {/* Sidebar */}
                    <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-100 flex flex-col">
                        <div className="p-4 border-b border-gray-100">
                            <h2 className="text-xl font-bold font-display text-text mb-4">Messages</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search chats..."
                                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-1 focus:ring-primary text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {conversations.map(chat => (
                                <div
                                    key={chat.id}
                                    onClick={() => setActiveChat(chat)}
                                    className={`p-4 flex items-center space-x-3 cursor-pointer hover:bg-gray-50 transition-colors ${activeChat.id === chat.id ? 'bg-primary/5 border-l-4 border-primary' : ''}`}
                                >
                                    <div className="relative">
                                        <img src={chat.avatar} alt={chat.user} className="w-12 h-12 rounded-full border border-gray-200" />
                                        {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className={`font-semibold text-sm truncate ${activeChat.id === chat.id ? 'text-primary' : 'text-text'}`}>{chat.user}</h3>
                                            <span className="text-xs text-gray-400">{chat.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
                                    </div>
                                    {chat.unread > 0 && (
                                        <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            {chat.unread}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="hidden md:flex flex-1 flex-col bg-gray-50/50">
                        {/* Header */}
                        <div className="p-4 bg-white border-b border-gray-100 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <img src={activeChat.avatar} alt={activeChat.user} className="w-10 h-10 rounded-full border border-gray-200" />
                                <div>
                                    <h3 className="font-bold text-text">{activeChat.user}</h3>
                                    <p className="text-xs text-green-600 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Phone className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Video className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><MoreVertical className="w-5 h-5" /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {chatHistory.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs md:max-w-md lg:max-w-lg px-5 py-3 rounded-2xl shadow-sm ${msg.sender === 'me'
                                                ? 'bg-primary text-white rounded-br-none'
                                                : 'bg-white text-text border border-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        <p className="text-sm">{msg.text}</p>
                                        <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className={`p-3 rounded-xl transition-all shadow-md transform active:scale-95 ${message.trim()
                                            ? 'bg-primary text-white hover:bg-red-400 hover:shadow-lg'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={!message.trim()}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Chat;
