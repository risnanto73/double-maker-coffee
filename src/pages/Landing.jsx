import React from "react";

// ✅ import gambar dari src/assets
import g1 from "../assets/gallery-1.png";
import g2 from "../assets/gallery-2.png";
import g3 from "../assets/gallery-3.png";
import g4 from "../assets/gallery-4.png";

const BRAND = {
    name: "Double Maker Coffee",
    city: "Brisbane City",
    address: "126 Margaret St, Brisbane City QLD 4000",
    phone: "493311253",
    maps: "https://maps.app.goo.gl/3qumJ8NtSXiW4sgm7",
};

const MENU = [
    { name: "Espresso", note: "Bold • clean • single origin", price: "$4.5" },
    { name: "Cappuccino", note: "Foamy • balanced • cozy", price: "$5.5" },
    { name: "Iced Latte", note: "Smooth • chilled • refreshing", price: "$6.0" },
    { name: "Signature Mocha", note: "Cocoa • espresso • silky", price: "$6.5" },
];

const TESTI = [
    {
        name: "Ava",
        text: "Minimal place, maximum taste. The espresso is sharp but smooth.",
    },
    {
        name: "Noah",
        text: "I come here to focus. Great vibe, great latte, friendly staff.",
    },
    {
        name: "Mia",
        text: "Their cappuccino foam is perfect. Clean design, calm energy.",
    },
];

const GALLERY = [
    { src: g1, label: "Morning pours" },
    { src: g2, label: "Milk texture" },
    { src: g3, label: "Minimal interior" },
    { src: g4, label: "Signature cup" },
];

export default function Landing() {
    const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
        BRAND.address
    )}&output=embed`;

    return (
        <div
            id="top"
            className="relative bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
        >
            {/* soft grid background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
                <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:64px_64px] dark:opacity-[0.08] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]" />
            </div>

            {/* HERO */}
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-14">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    {/* LEFT */}
                    <div>
                        {/* badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                            Specialty Coffee • {BRAND.city}
                            <span className="mx-1 h-3 w-px bg-zinc-200 dark:bg-zinc-800" />
                            Open daily
                        </div>

                        {/* headline */}
                        <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
                            <span className="block">
                                {BRAND.name}
                            </span>
                            <span className="mt-2 block text-zinc-500 dark:text-zinc-400">
                                brew. taste. repeat.
                            </span>
                        </h1>

                        {/* subcopy */}
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Minimalist coffee experience in the heart of the city — crafted drinks,
                            clean vibes, and a calm space for focus.
                        </p>

                        {/* CTA row */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="#menu"
                                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-zinc-950 dark:ring-white/10"
                            >
                                Explore Menu
                                <span className="transition group-hover:translate-x-0.5">→</span>
                            </a>

                            <a
                                href={BRAND.maps}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
                            >
                                Directions
                            </a>

                            <a
                                href={`tel:${BRAND.phone}`}
                                className="text-sm font-semibold text-zinc-700 underline underline-offset-4 hover:opacity-80 dark:text-zinc-200"
                            >
                                Call {BRAND.phone}
                            </a>
                        </div>

                        {/* stats */}
                        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                            <Stat k="4.8★" v="Avg rating" />
                            <Stat k="CBD" v="Central spot" />
                            <Stat k="7am–5pm" v="Daily" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        {/* soft spotlight behind card */}
                        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

                        <div className="rounded-[28px] border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                        Visit
                                    </div>
                                    <div className="mt-1 text-sm font-semibold leading-snug">
                                        {BRAND.address}
                                    </div>

                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-100">
                                            Open daily
                                        </span>

                                        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium dark:border-zinc-800 dark:bg-zinc-950/40">
                                            Wi-Fi
                                        </span>

                                        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium dark:border-zinc-800 dark:bg-zinc-950/40">
                                            Oat milk
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href={BRAND.maps}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    Maps ↗
                                </a>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <Mini label="Beans" value="Fresh roast" />
                                <Mini label="Milk" value="Oat option" />
                                <Mini label="Vibe" value="Minimal" />
                                <Mini label="Wi-Fi" value="Available" />
                            </div>

                            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
                                “Good coffee is a craft — we double down on quality.”
                            </div>

                            {/* tiny footer line */}
                            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                                <span>Brisbane CBD</span>
                                <span>Walk-in • Takeaway</span>
                            </div>
                        </div>

                        {/* glows */}
                        <Glow className="absolute -right-10 -top-10" />
                        <Glow className="absolute -left-10 -bottom-10" />
                    </div>
                </div>
            </section>

            {/* MENU */}
            <section className="border-t border-zinc-200/70 dark:border-zinc-800/70">
                <div id="menu" className="relative -top-32 h-0 pointer-events-none" aria-hidden="true" />

                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Menu Highlights
                            </h2>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                Simple, focused list — best sellers.
                            </p>
                        </div>
                        <a
                            href="#location"
                            className="text-sm font-semibold underline underline-offset-4 hover:opacity-80"
                        >
                            Find us →
                        </a>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {MENU.map((m) => (
                            <div
                                key={m.name}
                                className="group rounded-[26px] border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-base font-semibold">{m.name}</div>
                                        <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                            {m.note}
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50">
                                        {m.price}
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                                    <span>Single • Double</span>
                                    <span className="rounded-full border border-zinc-200 px-2 py-1 dark:border-zinc-800">
                                        House pick
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY + GALLERY */}
            <section className="border-t border-zinc-200/70 dark:border-zinc-800/70">
                <div id="gallery" className="relative -top-32 h-0 pointer-events-none" aria-hidden="true" />

                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                A calm space.
                            </h2>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                We keep it minimal — so your coffee stands out. Thoughtful
                                extraction, consistent recipes, and a clean atmosphere for quick
                                breaks or deep focus.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <Feature
                                    title="Clean taste"
                                    desc="Balanced profiles, no over-roast."
                                />
                                <Feature
                                    title="Consistent"
                                    desc="Standardized recipes & timing."
                                />
                                <Feature title="Minimal design" desc="Less noise, more calm." />
                                <Feature title="Friendly service" desc="Fast, warm, and easy." />
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {GALLERY.map((g) => (
                                <PhotoCard key={g.label} src={g.src} label={g.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OPENING HOURS + SOCIALS */}
            <section className="border-t border-zinc-200/70 dark:border-zinc-800/70">
                <div id="hours" className="relative -top-32 h-0 pointer-events-none" aria-hidden="true" />
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
                        <div className="rounded-[26px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                            <h2 className="text-lg font-semibold tracking-tight">
                                Opening hours
                            </h2>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Simple schedule section (clean & readable).
                            </p>

                            <div className="mt-5 space-y-3 text-sm">
                                <Row left="Mon — Fri" right="07:00 — 17:00" />
                                <Row left="Saturday" right="08:00 — 16:00" />
                                <Row left="Sunday" right="08:00 — 15:00" />
                            </div>

                            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-200">
                                Want to update hours later? tinggal edit array-nya aja.
                            </div>
                        </div>

                        <div className="rounded-[26px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                            <h2 className="text-lg font-semibold tracking-tight">Socials</h2>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Link placeholder — ganti URL sesuai akun asli.
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <SocialCard
                                    label="Instagram"
                                    handle="@doublemakercoffee"
                                    href="https://instagram.com/"
                                />
                                <SocialCard
                                    label="TikTok"
                                    handle="@doublemakercoffee"
                                    href="https://tiktok.com/"
                                />
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href={`tel:${BRAND.phone}`}
                                    className="rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-950"
                                >
                                    Contact
                                </a>
                                <a
                                    href={BRAND.maps}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="border-t border-zinc-200/70 dark:border-zinc-800/70">
                <div
                    id="testimonials"
                    className="relative -top-32 h-0 pointer-events-none"
                    aria-hidden="true"
                />

                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight">What people say</h2>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Short reviews — clean & believable.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {TESTI.map((t) => (
                            <div
                                key={t.name}
                                className="rounded-[26px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
                            >
                                <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                                    “{t.text}”
                                </div>
                                <div className="mt-5 flex items-center justify-between">

                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-full bg-zinc-900 text-white grid place-items-center text-xs font-bold dark:bg-white dark:text-zinc-900">
                                            {t.name.slice(0, 1).toUpperCase()}
                                        </div>
                                        <div className="text-sm font-semibold">{t.name}</div>
                                    </div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">4.8★</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* LOCATION */}
            <section className="border-t border-zinc-200/70 dark:border-zinc-800/70">
                <div id="location" className="relative -top-32 h-0 pointer-events-none" aria-hidden="true" />
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">Visit us</h2>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                {BRAND.address}
                            </p>

                            <div className="mt-6 space-y-3 text-sm">
                                <Info
                                    label="Phone"
                                    value={
                                        <a
                                            className="underline underline-offset-4 hover:opacity-80"
                                            href={`tel:${BRAND.phone}`}
                                        >
                                            {BRAND.phone}
                                        </a>
                                    }
                                />
                                <Info
                                    label="Maps"
                                    value={
                                        <a
                                            className="underline underline-offset-4 hover:opacity-80"
                                            href={BRAND.maps}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Open in Google Maps
                                        </a>
                                    }
                                />
                                <Info label="Hours" value="Daily 07:00 — 17:00" />
                            </div>

                            <div className="mt-8 rounded-[26px] border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200">
                                Minimal location section — clear and premium.
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
                            <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900">
                                <iframe
                                    title="Double Maker Coffee Map"
                                    className="h-full w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={mapEmbed}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ---------- components ---------- */

function Stat({ k, v }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="text-lg font-semibold">{k}</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">{v}</div>
        </div>
    );
}

function Mini({ label, value }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950/30">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
            <div className="mt-1 font-semibold">{value}</div>
        </div>
    );
}

function Feature({ title, desc }) {
    return (
        <div className="rounded-[22px] border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="text-sm font-semibold">{title}</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</div>
        </div>
    );
}

function PhotoCard({ src, label }) {
    return (
        <div className="group relative overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="aspect-[4/3] w-full">
                <img
                    src={src}
                    alt={label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-100">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                    {label}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.14),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-16 shrink-0 text-zinc-500 dark:text-zinc-400">
                {label}
            </div>
            <div className="font-medium">{value}</div>
        </div>
    );
}

function Row({ left, right }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-950/30">
            <span className="font-medium">{left}</span>
            <span className="text-zinc-600 dark:text-zinc-400">{right}</span>
        </div>
    );
}

function SocialCard({ label, handle, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900/40"
        >
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
            <div className="mt-1 font-semibold">{handle}</div>
            <div className="mt-2 text-xs underline underline-offset-4 opacity-80">
                Open →
            </div>
        </a>
    );
}

function Glow({ className = "" }) {
    return (
        <div
            className={[
                "pointer-events-none h-36 w-36 rounded-full blur-3xl",
                "bg-zinc-900/10 dark:bg-white/10",
                className,
            ].join(" ")}
        />
    );
}
