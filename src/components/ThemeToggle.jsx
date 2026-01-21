import React from "react";
import { ThemeContext } from "../providers/ThemeProvider.jsx";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggle } = React.useContext(ThemeContext);

    return (
        <button
            onClick={toggle}
            type="button"
            className={[
                "rounded-2xl px-3 py-2 text-sm ring-1 transition",
                "bg-black/5 ring-black/10 hover:bg-black/8 text-zinc-900",
                "dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10 dark:text-zinc-100",
                className
            ].join(" ")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
