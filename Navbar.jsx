import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Explore', path: '/explore' },
    ];

    // Mock Auth State (for demo purposes, toggled by checking if URL contains 'dashboard' or 'profile')
    // In a real app, this would come from AuthContext
    const isLoggedIn = location.pathname.includes('dashboard') || location.pathname.includes('profile');

    return (
        <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-text/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="SheSkill" className="h-auto w-[250px] max-w-none" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-primary font-bold'
                                    : 'text-text hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {isLoggedIn ? (
                            <>
                                <Link to="/dashboard" className={`font-medium transition-colors duration-200 ${isActive('/dashboard') ? 'text-primary font-bold' : 'text-text hover:text-primary'}`}>
                                    Dashboard
                                </Link>
                                <Link to="/profile" className={`font-medium transition-colors duration-200 ${isActive('/profile') ? 'text-primary font-bold' : 'text-text hover:text-primary'}`}>
                                    Profile
                                </Link>
                                <Button variant="primary" className="ml-4">List a Skill</Button>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4 ml-4">
                                <Link to="/login" className="font-medium text-text hover:text-primary transition-colors">
                                    Log in
                                </Link>
                                <Link to="/register">
                                    <Button variant="primary">Join Now</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-primary bg-red-50'
                                    : 'text-text hover:text-primary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3 space-y-3">
                            {isLoggedIn ? (
                                <>
                                    <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50">
                                        Dashboard
                                    </Link>
                                    <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50">
                                        Profile
                                    </Link>
                                    <Button variant="primary" className="w-full">List a Skill</Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="block w-full text-center py-2 font-medium text-text hover:text-primary">
                                        Log in
                                    </Link>
                                    <Link to="/register">
                                        <Button variant="primary" className="w-full">Join Now</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav >
    );
};

export default Navbar;
