import React from "react";
import { useTheme } from "../hooks/useTheme.js";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className={[
                "rounded-2xl px-3 py-2 text-sm ring-1 transition",
                "bg-black/5 ring-black/10 hover:bg-black/8",
                "dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10",
                className
            ].join(" ")}
            aria-label="Toggle theme"
            title="Toggle dark/light"
            type="button"
        >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
