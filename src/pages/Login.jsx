import React, { useState } from "react";

function cx(...arr) {
    return arr.filter(Boolean).join(" ");
}

export default function Login() {
    const [show, setShow] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // ✅ dummy login: langsung arahkan ke dashboard
        window.location.href = "/dashboard";
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    {/* LEFT: Brand intro */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                            Admin Access • Double Maker Coffee
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            Login to dashboard.
                            <span className="block text-zinc-500 dark:text-zinc-400">
                                manage landing content
                            </span>
                        </h1>

                        <p className="max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Halaman ini khusus admin untuk ngatur data landing (menu, hours,
                            socials, testimonial). Untuk sekarang masih dummy UI dulu.
                        </p>

                        <div className="grid max-w-lg grid-cols-3 gap-3 pt-2">
                            <Mini k="Menu" v="Edit items" />
                            <Mini k="Hours" v="Update time" />
                            <Mini k="Socials" v="Links" />
                        </div>
                    </div>

                    {/* RIGHT: Card */}
                    <div className="lg:justify-self-end">
                        <div className="w-full max-w-md rounded-[28px] border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                        Sign in
                                    </div>
                                    <div className="mt-1 text-lg font-semibold">Admin Login</div>
                                </div>
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-100">
                                    Secure
                                </span>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                                <Field label="Email">
                                    <input
                                        type="email"
                                        required
                                        placeholder="admin@doublemaker.com"
                                        className={cx(
                                            "w-full rounded-2xl border px-4 py-3 text-sm outline-none transition",
                                            "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400",
                                            "dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
                                        )}
                                    />
                                </Field>

                                <Field label="Password">
                                    <div className="relative">
                                        <input
                                            type={show ? "text" : "password"}
                                            required
                                            placeholder="••••••••"
                                            className={cx(
                                                "w-full rounded-2xl border px-4 py-3 pr-12 text-sm outline-none transition",
                                                "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400",
                                                "dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
                                            )}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShow((s) => !s)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                                        >
                                            {show ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </Field>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-700"
                                        />
                                        Remember me
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-semibold text-zinc-700 underline underline-offset-4 hover:opacity-80 dark:text-zinc-200"
                                        onClick={() => alert("Forgot password (dummy).")}
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-950"
                                >
                                    Login
                                </button>

                                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300">
                                    Dummy mode: submit langsung redirect ke <b>/dashboard</b>.
                                </div>

                                <a
                                    href="/#top"
                                    className="block text-center text-sm font-semibold text-zinc-700 underline underline-offset-4 hover:opacity-80 dark:text-zinc-200"
                                >
                                    Back to landing
                                </a>
                            </form>
                        </div>

                        {/* glow */}
                        <div className="pointer-events-none relative -z-10 mx-auto mt-6 h-16 w-56 rounded-full bg-zinc-900/10 blur-3xl dark:bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Field({ label, children }) {
    return (
        <div className="space-y-2">
            <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                {label}
            </div>
            {children}
        </div>
    );
}

function Mini({ k, v }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="text-sm font-semibold">{k}</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">{v}</div>
        </div>
    );
}
