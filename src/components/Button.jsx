import React from "react";

export default function Button({
    as: As = "button",
    className = "",
    variant = "primary",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/15 dark:focus:ring-white/15 active:scale-[0.98]";

    const styles = {
        primary:
            "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-[0_18px_60px_-22px_rgba(0,0,0,0.25)] dark:shadow-[0_18px_60px_-22px_rgba(255,255,255,0.45)]",
        ghost:
            "bg-black/0 text-zinc-900 hover:bg-black/5 ring-1 ring-black/10 dark:bg-white/0 dark:text-zinc-100 dark:hover:bg-white/10 dark:ring-white/12",
        subtle:
            "bg-black/5 text-zinc-900 hover:bg-black/8 ring-1 ring-black/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/14 dark:ring-white/10"
    };

    return <As className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
