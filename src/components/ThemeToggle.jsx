import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
            type="button"
        >
            <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${isDark ? "bg-white" : "bg-zinc-900"
                    }`}
            />
            {isDark ? "Dark" : "Light"}
        </button>
    );
}
