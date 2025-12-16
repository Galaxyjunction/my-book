import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  background?: string;
  experience?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, background: string, experience: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('auth_user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  useEffect(() => {
    if (user && typeof window !== 'undefined') {
      localStorage.setItem('auth_user', JSON.stringify(user));
      // Set user level for personalization
      if (user.experience) {
        localStorage.setItem('userLevel', user.experience);
      }
    } else if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Simulate API call - in production, call your backend
    const stored = localStorage.getItem(`user_${email}`);
    if (stored) {
      const userData = JSON.parse(stored);
      if (userData.password === password) {
        setUser({ email: userData.email, background: userData.background, experience: userData.experience });
      } else {
        throw new Error('Invalid credentials');
      }
    } else {
      throw new Error('User not found');
    }
  };

  const signup = async (email: string, password: string, background: string, experience: string) => {
    // Simulate API call - in production, call your backend
    if (typeof window !== 'undefined') {
      const userData = { email, password, background, experience };
      localStorage.setItem(`user_${email}`, JSON.stringify(userData));
      setUser({ email, background, experience });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};