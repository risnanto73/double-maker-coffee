import React from "react";

const KEY = "dm_theme";
export const ThemeContext = React.createContext({ theme: "dark", toggle: () => { } });

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("dark");

    // init theme (localStorage > OS preference)
    React.useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            return;
        }
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
        setTheme(prefersDark ? "dark" : "light");
    }, []);

    // apply theme to <html>
    React.useEffect(() => {
        const root = document.documentElement;

        // ✅ dark => add class "dark", light => remove
        root.classList.toggle("dark", theme === "dark");

        // optional: make browser controls follow theme
        root.style.colorScheme = theme;

        localStorage.setItem(KEY, theme);

        console.log("Theme applied:", theme, "html class:", root.className);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
