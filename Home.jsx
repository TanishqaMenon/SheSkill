import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Coffee, Heart } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
    const categories = [
        { name: 'Creative', icon: <Sparkles className="h-6 w-6 text-primary" />, desc: 'Crochet, Painting, DIY' },
        { name: 'Academic', icon: <BookOpen className="h-6 w-6 text-secondary" />, desc: 'Tutoring, Languages, Coding' },
        { name: 'Lifestyle', icon: <Coffee className="h-6 w-6 text-primary-light" />, desc: 'Cooking, Baking, Yoga' },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-accent/30 py-24 lg:py-36 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm ring-4 ring-white/30 animate-fade-in-up">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs font-sans">🌸 Community First 🌸</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-text mb-8 leading-tight tracking-tight">
                        Share Your Spark, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                            Exchange Your Skill
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        A community for women to connect, teach, and learn from each other.
                        <br className="hidden md:block" /> Simple, safe, and supportive.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/explore">
                            <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
                                Start Exploring
                            </Button>
                        </Link>
                        <Link to="/how-it-works">
                            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 rounded-full border-2 bg-transparent hover:bg-white/50">
                                See How it Works
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 pt-8 border-t border-text/5 flex flex-col md:flex-row justify-center items-center gap-8 opacity-70">
                        <span className="text-sm font-semibold uppercase tracking-widest text-text/50">Trusted by students from</span>
                        <div className="flex gap-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                            <span className="font-display font-bold text-xl">NID</span>
                            <span className="font-display font-bold text-xl">NIFT</span>
                            <span className="font-display font-bold text-xl">Srishti</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements - Organic Shapes */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-multiply"></div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">Find Your Niche</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you want to master a new hobby or boost your GPA, there's a skill for everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat) => (
                            <div key={cat.name} className="group p-8 rounded-3xl bg-white border border-gray-100/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 transform hover:-translate-y-2">
                                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-text mb-3">{cat.name}</h3>
                                <p className="text-text/70 mb-6 leading-relaxed">{cat.desc}</p>
                                <Link to="/explore" className="inline-flex items-center text-primary font-bold tracking-wide text-sm uppercase group-hover:tracking-wider transition-all">
                                    Browse {cat.name} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-6">
                                Exchange skills, <br />
                                <span className="text-secondary">connect locally.</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">1</div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text mb-1">List your micro-skills</h4>
                                        <p className="text-gray-600">Post what you can teach in just 1 hour. Crochet, algebra, minimal design—anything!</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold">2</div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text mb-1">Find a match</h4>
                                        <p className="text-gray-600">Browse skills you want to learn and request a swap with other women on campus.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-yellow-700 font-bold">3</div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text mb-1">Learn & Connect</h4>
                                        <p className="text-gray-600">Meet up (virtual or safe campus spots) and exchange knowledge. No money changes hands.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 scale-95 opacity-70"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                                {/* Mock Skill Card in usage context */}
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                                    <div>
                                        <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-3 w-20 bg-gray-100 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                                    <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                                    <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-1">
                                        <StarIcon className="text-accent h-4 w-4" />
                                        <StarIcon className="text-accent h-4 w-4" />
                                        <StarIcon className="text-accent h-4 w-4" />
                                        <StarIcon className="text-accent h-4 w-4" />
                                        <StarIcon className="text-accent h-4 w-4" />
                                    </div>
                                    <div className="h-8 w-24 bg-primary/20 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <Heart className="h-12 w-12 mx-auto mb-6 text-white/80" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to share your talent?</h2>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Join hundreds of women exchanging skills and building confidence today.
                    </p>
                    <Link to="/explore">
                        <button className="bg-white text-primary font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:scale-105">
                            Get Started
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

// Helper for the mock card
const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default Home;
