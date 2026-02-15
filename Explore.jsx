import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import BookingModal from '../components/BookingModal';


const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Mock Data
    const skills = [
        {
            id: 1,
            title: 'Beginner Crochet: Granny Squares',
            description: 'Learn the basics of crochet and make your first granny square. I have extra yarn!',
            category: 'Creative',
            userName: 'Aisha Gupta',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
            college: 'Design School',
            rating: 4.8,
            isVerified: true,
        },
        {
            id: 2,
            title: 'Linear Algebra Help',
            description: 'Struggling with matrices? I can help you understand the core concepts for your exam.',
            category: 'Academic',
            userName: 'Riya Sharma',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
            college: 'Tech University',
            rating: 5.0,
            isVerified: true,
        },
        {
            id: 3,
            title: 'Healthy Meal Prep 101',
            description: 'How to prep 5 meals in 1 hour. Ideal for busy students living in hostels.',
            category: 'Lifestyle',
            userName: 'Sneha P.',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
            college: 'City College',
            rating: 4.5,
            isVerified: false,
        },
        {
            id: 4,
            title: 'Python for Beginners',
            description: 'Write your first Python script. No prior coding experience needed.',
            category: 'Academic',
            userName: 'Tanvi M.',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvi',
            college: 'Tech University',
            rating: 4.9,
            isVerified: true,
        },
        {
            id: 5,
            title: 'Watercolor Landscapes',
            description: 'Relaxing watercolor session. Bring your own paints or use mine.',
            category: 'Creative',
            userName: 'Priya K.',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            college: 'Arts Institute',
            rating: 4.7,
            isVerified: true,
        },
        {
            id: 6,
            title: 'Resume Review & Editing',
            description: 'Get your resume internship-ready. I have experience with HR.',
            category: 'Lifestyle',
            userName: 'Meera S.',
            userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
            college: 'Business School',
            rating: 4.9,
            isVerified: true,
        },
    ];

    const categories = ['All', 'Creative', 'Academic', 'Lifestyle'];

    const filteredSkills = skills.filter(skill => {
        const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRequest = (skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-background min-h-screen py-10">
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                skill={selectedSkill}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-text">Explore Skills</h1>
                        <p className="text-gray-500">Discover what talented women around you are teaching.</p>
                    </div>

                    <div className="flex items-center space-x-4 max-w-md w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0 md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search skills..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-600">
                            <Filter className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex overflow-x-auto pb-4 mb-8 space-x-2 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${selectedCategory === cat
                                ? 'bg-text text-white'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} onRequest={handleRequest} />
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No skills found matching your search.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;
