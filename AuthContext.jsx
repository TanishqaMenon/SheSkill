import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Initialize with null or check local storage in a real app
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // In a real app, this would validate credentials and fetch user data
        // For now, we'll just set the user state with mock data + input
        setUser({
            name: "Aisha Gupta", // Default mock if not provided
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
            college: "National Institute of Design",
            bio: "Design student who loves crochet and digital art.",
            isVerified: true,
            rating: 4.8,
            reviews: 12,
            sessionsGiven: 24,
            ...userData // Overwrite with actual login data if any
        });
    };

    const register = (formData) => {
        // Set user data from registration form
        setUser({
            name: formData.name,
            email: formData.email,
            college: formData.college,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`, // Generate avatar based on name
            bio: "I'm new here! Excited to share my skills.",
            isVerified: false, // New users aren't verified yet
            rating: 0,
            reviews: 0,
            sessionsGiven: 0,
        });
    };

    const logout = () => {
        setUser(null);
    };

    const updateUser = (updates) => {
        setUser(prev => ({ ...prev, ...updates }));
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
