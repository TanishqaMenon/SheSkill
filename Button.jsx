import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-opacity-50 font-sans tracking-wide";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 focus:ring-primary-light",
        secondary: "bg-secondary text-white hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/30 focus:ring-secondary",
        outline: "bg-white border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
        ghost: "bg-transparent text-text hover:bg-accent/30 hover:text-primary",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
