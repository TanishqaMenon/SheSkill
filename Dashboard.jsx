import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, Check, X, User } from 'lucide-react';
import Button from '../components/Button';

const Dashboard = () => {
    // Mock Data
    const requests = [
        { id: 1, user: 'Priya K.', skill: 'Beginner Crochet', date: '2024-03-15', time: '14:00', status: 'pending' },
        { id: 2, user: 'Sara M.', skill: 'Python Help', date: '2024-03-16', time: '10:00', status: 'pending' },
    ];

    const sessions = [
        { id: 101, user: 'Riya Sharma', skill: 'Linear Algebra', date: '2024-03-10', time: '16:00', status: 'confirmed' },
    ];

    return (
        <div className="bg-background min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-display font-bold text-text mb-8">Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Pending Requests */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                                <MessageSquare className="h-5 w-5 text-primary mr-2" />
                                Swap Requests
                                <span className="ml-2 bg-red-100 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                                    {requests.length}
                                </span>
                            </h2>

                            <div className="space-y-4">
                                {requests.map((req) => (
                                    <div key={req.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {req.user.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-text">{req.user} <span className="font-normal text-gray-500">wants to learn</span></p>
                                                <p className="text-primary font-medium">{req.skill}</p>
                                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                                    <Calendar className="h-3 w-3 mr-1" /> {req.date}
                                                    <Clock className="h-3 w-3 ml-2 mr-1" /> {req.time}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                                                <X className="h-5 w-5" />
                                            </button>
                                            <button className="p-2 rounded-full bg-primary text-white hover:bg-red-500 shadow-md transition-colors">
                                                <Check className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Sessions */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-text mb-4 flex items-center">
                                <Calendar className="h-5 w-5 text-secondary mr-2" />
                                Upcoming Sessions
                            </h2>

                            <div className="space-y-4">
                                {sessions.map((session) => (
                                    <div key={session.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-secondary/50 transition-colors">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-12 w-2 bg-secondary rounded-full"></div>
                                            <div>
                                                <h4 className="font-bold text-text">{session.skill}</h4>
                                                <p className="text-sm text-gray-500">with {session.user}</p>
                                            </div>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0 flex flex-col items-end space-y-2">
                                            <div>
                                                <div className="text-lg font-bold text-gray-700">{session.time}</div>
                                                <div className="text-sm text-gray-500">{session.date}</div>
                                            </div>
                                            <Link to="/chat">
                                                <Button variant="secondary" className="px-4 py-1.5 text-xs flex items-center">
                                                    <MessageSquare className="w-3 h-3 mr-1" /> Message
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="h-12 w-12 rounded-full bg-white p-1 shadow-sm">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha" alt="User" className="w-full h-full rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-text">Aisha Gupta</h3>
                                    <Link to="/profile" className="text-xs text-primary font-medium hover:underline">View Profile</Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-text">24</div>
                                    <div className="text-xs text-gray-500">Sessions</div>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <div className="text-2xl font-bold text-text">4.8</div>
                                    <div className="text-xs text-gray-500">Rating</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <Button variant="outline" className="w-full text-left justify-start">
                                    Find a new skill
                                </Button>
                                <Button variant="outline" className="w-full text-left justify-start">
                                    Update availability
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
