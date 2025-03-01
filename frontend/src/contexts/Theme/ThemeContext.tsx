import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

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
        const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const savedTheme = Cookies.get("theme") as ThemeMode | null;
        return savedTheme || deviceTheme || "light";
    });


    const toggleTheme = () => {
        setTheme((previousTheme) => {
            const newTheme = previousTheme === "light" ? "dark" : "light";
            Cookies.set("theme", newTheme, { expires: 1 }); // Store new theme in cookies
            return newTheme;
        });
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