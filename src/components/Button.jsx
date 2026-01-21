import React from "react";

export default function Button({
    as: As = "button",
    className = "",
    variant = "primary",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/15 active:scale-[0.98]";
    const styles = {
        primary:
            "bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_18px_60px_-22px_rgba(255,255,255,0.45)]",
        ghost:
            "bg-white/0 text-zinc-100 hover:bg-white/10 ring-1 ring-white/12",
        subtle:
            "bg-white/10 text-zinc-100 hover:bg-white/14 ring-1 ring-white/10"
    };

    return <As className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
