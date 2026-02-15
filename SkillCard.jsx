import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import Button from './Button';

const SkillCard = ({ skill, onRequest }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={skill.userAvatar}
                        alt={skill.userName}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                        <h4 className="font-bold text-text text-sm flex items-center">
                            {skill.userName}
                            {skill.isVerified && (
                                <CheckCircle className="h-3 w-3 text-secondary ml-1 fill-current" />
                            )}
                        </h4>
                        <p className="text-xs text-gray-400">{skill.college}</p>
                    </div>
                </div>
                <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-accent fill-current mr-1" />
                    <span className="text-xs font-bold text-yellow-700">{skill.rating}</span>
                </div>
            </div>

            <div className="mb-4 flex-grow">
                <h3 className="font-display font-bold text-lg text-text mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{skill.description}</p>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary/80 bg-primary/5 px-2 py-1 rounded">
                    {skill.category}
                </span>
                <Button variant="secondary" className="text-sm px-4 py-1.5" onClick={() => onRequest(skill)}>
                    Request
                </Button>
            </div>
        </div>
    );
};

export default SkillCard;
