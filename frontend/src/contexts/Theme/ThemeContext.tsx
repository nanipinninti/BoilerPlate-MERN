import React, { createContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
    theme: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>(() => {
        // Retrieve the theme from localStorage, default to "light" if not found
        const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
        return savedTheme || "light";
    });

    useEffect(() => {
        // Save the theme to localStorage whenever it changes
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
    };

    const value: ThemeContextType = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = ()=>{
    return React.useContext(ThemeContext)
}