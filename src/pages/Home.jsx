import React from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Toast from "../components/Toast.jsx";
import { site, menu, testimonials } from "../data/siteData.js";
import { NavLink } from "react-router-dom";

function Stat({ label, value }) {
    return (
        <div className="rounded-3xl bg-black/5 ring-1 ring-black/10 p-5 dark:bg-white/5 dark:ring-white/10">
            <div className="text-2xl font-semibold text-zinc-900 dark:text-white">{value}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
        </div>
    );
}

function Card({ children }) {
    return (
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/6 transition">
            {children}
        </div>
    );
}

export default function Home() {
    const [toast, setToast] = React.useState({ show: false, message: "" });

    function showToast(message) {
        setToast({ show: true, message });
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
    }

    return (
        <main>
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%)]" />
                <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                <Container className="relative py-14 sm:py-18">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
                                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                                Open vibe • Brewed with precision
                            </div>

                            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                                Calm mornings. <span className="text-zinc-300">Bold espresso.</span>
                            </h1>

                            <p className="mt-4 text-zinc-300 leading-relaxed max-w-xl">
                                {site.name} menghadirkan kopi dengan karakter yang jelas, interior aesthetic,
                                dan space nyaman untuk kerja atau chill.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Button as={NavLink} to="/menu">See Menu</Button>
                                <Button
                                    variant="ghost"
                                    as="a"
                                    href={`tel:${site.phone}`}
                                    onClick={(e) => {
                                        // keep tel, but also show UI feedback
                                        showToast("Calling the cafe…");
                                    }}
                                >
                                    Call {site.phone}
                                </Button>
                                <Button
                                    variant="subtle"
                                    as={NavLink}
                                    to="/contact"
                                    onClick={() => showToast("See you at Margaret St ✨")}
                                >
                                    Get Directions
                                </Button>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                                <Stat label="Signature Drinks" value="12+" />
                                <Stat label="Roast Profiles" value="3" />
                                <Stat label="Daily Pastry" value="Fresh" />
                            </div>
                        </div>

                        {/* Hero visual */}
                        <div className="relative">
                            <div className="rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-4">
                                <div className="rounded-[1.6rem] bg-zinc-900/60 ring-1 ring-white/10 overflow-hidden">
                                    <div className="relative h-[360px] sm:h-[420px]">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
                                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_55%)]" />
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                            <div className="inline-flex w-fit items-center gap-2 rounded-2xl bg-white/6 px-3 py-2 ring-1 ring-white/10 text-sm">
                                                <span className="text-zinc-300">Now pouring:</span>
                                                <span className="text-white font-medium">Double Maker Latte</span>
                                            </div>
                                            <div>
                                                <div className="text-white text-xl font-semibold">126 Margaret St</div>
                                                <div className="text-zinc-300 text-sm">Brisbane City QLD 4000</div>
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    <span className="rounded-full bg-white/6 px-3 py-1 text-xs ring-1 ring-white/10">Work-friendly</span>
                                                    <span className="rounded-full bg-white/6 px-3 py-1 text-xs ring-1 ring-white/10">Aesthetic</span>
                                                    <span className="rounded-full bg-white/6 px-3 py-1 text-xs ring-1 ring-white/10">Smooth espresso</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-amber-400/10 blur-2xl" />
                            <div className="pointer-events-none absolute -top-8 -left-8 h-36 w-36 rounded-full bg-sky-400/10 blur-2xl" />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Signature */}
            <Container className="py-14">
                <SectionTitle
                    eyebrow="Signature"
                    title="Most-loved pours"
                    desc="Menu di bawah bersifat data-driven (nanti bisa diambil dari CMS/API)."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {menu.signature.map((item) => (
                        <Card key={item.name}>
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-white font-semibold">{item.name}</div>
                                <div className="text-sm text-zinc-200">${item.price.toFixed(2)}</div>
                            </div>
                            <div className="mt-2 text-sm text-zinc-300">{item.desc}</div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="rounded-full bg-white/6 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
                                    {item.tag}
                                </span>
                                <button
                                    className="text-sm text-zinc-200 hover:text-white underline-offset-4 hover:underline"
                                    onClick={() => showToast(`Saved: ${item.name}`)}
                                >
                                    Save
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>

            {/* Testimonials */}
            <Container className="pb-16">
                <SectionTitle eyebrow="People" title="What guests say" />
                <div className="grid gap-4 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6"
                        >
                            <p className="text-zinc-200 leading-relaxed">“{t.text}”</p>
                            <div className="mt-4 text-sm text-zinc-400">— {t.name}</div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Maps / Location */}
            <Container className="pb-16">
                <SectionTitle
                    eyebrow="Visit"
                    title="Find us on the map"
                    desc="126 Margaret St, Brisbane City QLD 4000"
                />

                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-3xl overflow-hidden ring-1 ring-black/10 bg-white dark:bg-white/5 dark:ring-white/10">
                        <div className="aspect-[4/3]">
                            <iframe
                                title="Double Maker Coffee - Map"
                                className="h-full w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={
                                    "https://www.google.com/maps?q=" +
                                    encodeURIComponent("Double Maker Coffee, 126 Margaret St, Brisbane City QLD 4000") +
                                    "&output=embed"
                                }
                            />
                        </div>
                    </div>

                    <div className="rounded-3xl ring-1 ring-black/10 bg-white p-6 dark:bg-white/5 dark:ring-white/10">
                        <div className="text-lg font-semibold text-zinc-900 dark:text-white">
                            Double Maker Coffee
                        </div>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                            {`126 Margaret St, Brisbane City QLD 4000`}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <a
                                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                                href="https://maps.app.goo.gl/3qumJ8NtSXiW4sgm7"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open in Google Maps
                            </a>

                            <a
                                className="rounded-2xl bg-black/5 px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-black/8 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
                                href="tel:493311253"
                            >
                                Call 493311253
                            </a>
                        </div>

                        <div className="mt-6 rounded-2xl bg-black/5 p-4 text-sm text-zinc-700 ring-1 ring-black/10 dark:bg-white/5 dark:text-zinc-300 dark:ring-white/10">
                            Tip: nanti section ini bisa diambil dari CMS (alamat, link maps, jam buka).
                        </div>
                    </div>
                </div>
            </Container>


            <Toast show={toast.show} message={toast.message} />
        </main>
    );
}
