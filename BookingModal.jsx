import React, { useState } from 'react';
import { X, Calendar, Clock, MessageSquare } from 'lucide-react';
import Button from './Button';

const BookingModal = ({ isOpen, onClose, skill }) => {
    if (!isOpen || !skill) return null;

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to backend
        alert(`Request sent to ${skill.userName} for ${date} at ${time}!`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-text">Request Swap</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            with <span className="font-semibold text-primary">{skill.userName}</span>
                        </p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-text transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div className="mb-6 flex items-start space-x-3 bg-gray-50 p-3 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-xl">
                            🎨
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-text">{skill.title}</h4>
                            <p className="text-xs text-gray-500 line-clamp-1">{skill.description}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Suggested Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="date"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferred Time
                            </label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="time"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message (Optional)
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                <textarea
                                    rows="3"
                                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all resize-none"
                                    placeholder={`Hi ${skill.userName}, I'd love to learn this!`}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <Button type="submit" variant="primary" className="w-full py-3 text-lg shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 transition-all">
                            Send Request
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingModal;
