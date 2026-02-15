import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-display font-bold text-xl text-text">SheSkill</span>
                    </div>
                    <p className="text-gray-500 text-sm text-center">
                        Empowering women through skill exchange.
                    </p>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <span>Made with</span>
                        <Heart className="h-4 w-4 text-primary fill-current" />
                        <span>for women everywhere.</span>
                    </div>
                    <p className="text-gray-300 text-xs">
                        © {new Date().getFullYear()} SheSkill. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
