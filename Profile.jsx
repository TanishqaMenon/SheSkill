import React, { useState } from 'react';
import { Settings, MapPin, CheckCircle, Star, Plus } from 'lucide-react';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Aisha Gupta");

    // Mock User Data
    const user = {
        name: name,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
        college: "National Institute of Design",
        bio: "Design student who loves crochet and digital art. Always down to swap skills!",
        isVerified: true,
        rating: 4.8,
        reviews: 12,
        skillsListed: 3,
        sessionsGiven: 24,
    };

    const mySkills = [
        {
            id: 1,
            title: 'Beginner Crochet: Granny Squares',
            description: 'Learn the basics of crochet and make your first granny square.',
            category: 'Creative',
            rating: 4.8,
            userName: user.name,
            userAvatar: user.avatar,
            isVerified: user.isVerified,
            college: user.college
        },
        // ... more skills
    ];

    return (
        <div className="bg-background min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Profile Header */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-secondary/10"></div>

                    <div className="relative flex flex-col md:flex-row items-end md:items-center justify-between pt-16">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
                            <div className="relative">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-white"
                                />
                                {user.isVerified && (
                                    <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-secondary fill-current" />
                                    </div>
                                )}
                            </div>

                            <div className="text-center md:text-left pb-2">
                                <h1 className="text-3xl font-display font-bold text-text flex items-center justify-center md:justify-start">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="border-b-2 border-primary focus:outline-none bg-transparent"
                                        />
                                    ) : (
                                        name
                                    )}
                                </h1>
                                <p className="text-gray-500 flex items-center justify-center md:justify-start mt-1">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {user.college}
                                </p>
                                <div className="flex items-center justify-center md:justify-start space-x-4 mt-3">
                                    <div className="flex items-center text-sm font-medium">
                                        <Star className="w-4 h-4 text-accent fill-current mr-1" />
                                        <span>{user.rating} ({user.reviews} reviews)</span>
                                    </div>
                                    <div className="text-sm text-gray-400">•</div>
                                    <div className="text-sm text-gray-600">
                                        <span className="font-bold text-text">{user.sessionsGiven}</span> Sessions
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-0 flex space-x-3">
                            <Button variant="outline" className="px-4 py-2">
                                <Settings className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="primary"
                                className="px-6 py-2"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? 'Save Profile' : 'Edit Profile'}
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 max-w-2xl">
                        <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {user.bio}
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8">
                    <button
                        onClick={() => setActiveTab('skills')}
                        className={`pb-4 px-6 font-medium text-sm transition-colors relative ${activeTab === 'skills' ? 'text-primary' : 'text-gray-500 hover:text-text'
                            }`}
                    >
                        My Skills
                        {activeTab === 'skills' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`pb-4 px-6 font-medium text-sm transition-colors relative ${activeTab === 'reviews' ? 'text-primary' : 'text-gray-500 hover:text-text'
                            }`}
                    >
                        Reviews
                        {activeTab === 'reviews' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>
                        )}
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'skills' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-text">Ranked Skills</h2>
                            <Button variant="outline" className="flex items-center text-sm px-4 py-2">
                                <Plus className="w-4 h-4 mr-2" />
                                Add New Skill
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Reuse SkillCard but maybe add edit controls? For now just display */}
                            {mySkills.map(skill => (
                                <SkillCard key={skill.id} skill={skill} onRequest={() => { }} />
                            ))}

                            {/* Empty state placeholder if needed */}
                            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-primary" />
                                </div>
                                <h3 className="font-bold text-text mb-1">List a new skill</h3>
                                <p className="text-sm text-gray-400">Share what you know</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
                        No reviews yet. Complete a session to get rated!
                    </div>
                )}

            </div>
        </div>
    );
};

export default Profile;
