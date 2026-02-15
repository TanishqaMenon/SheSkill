import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail, User, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        name: '',
        email: '',
        password: '',
        college: '',
        skillsToTeach: '',
        interestsToLearn: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register attempt:', formData);
        // Simulate registration success
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Heart className="h-12 w-12 text-primary fill-current" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-display font-bold text-text">
                    Join SheSkill
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-primary hover:text-red-400">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl shadow-primary/5 sm:rounded-2xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="you@college.edu"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                                College / University
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="college"
                                    name="college"
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="City College"
                                    value={formData.college}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="skillsToTeach" className="block text-sm font-medium text-gray-700">
                                Skills you can teach
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="skillsToTeach"
                                    name="skillsToTeach"
                                    rows={3}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="e.g. Crochet, Python, Algebra..."
                                    value={formData.skillsToTeach}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="interestsToLearn" className="block text-sm font-medium text-gray-700">
                                Skills you want to learn
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="interestsToLearn"
                                    name="interestsToLearn"
                                    rows={3}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="e.g. Digital Art, Spanish, React..."
                                    value={formData.interestsToLearn}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit" variant="primary" className="w-full flex justify-center py-3">
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
