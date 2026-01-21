import Container from "./Container.jsx";
import { site } from "../data/siteData.js";

export default function Footer() {
    return (
        <footer className="border-t border-black/8 bg-zinc-50 dark:border-white/8 dark:bg-zinc-950">
            <Container className="py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="text-white font-semibold">{site.name}</div>
                        <p className="mt-2 text-sm text-zinc-400">
                            A calm corner for bold espresso & soft mornings.
                        </p>
                        <div className="mt-4 text-sm text-zinc-300">
                            <div>{site.address}</div>
                            <a className="text-zinc-200 hover:underline" href={`tel:${site.phone}`}>
                                +{site.phone}
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-white font-semibold">Hours</div>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                            {site.hours.map((h) => (
                                <li key={h.day} className="flex items-center justify-between gap-4">
                                    <span className="text-zinc-400">{h.day}</span>
                                    <span>{h.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-white font-semibold">Links</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {site.socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    className="rounded-2xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                                >
                                    {s.label}
                                </a>
                            ))}
                            <a
                                href="/admin"
                                className="rounded-2xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                            >
                                Admin / CMS
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-zinc-500">
                            CMS dashboard sudah disiapkan (scaffold) dan bisa dihubungkan ke API/auth nanti.
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500">
                    <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
                    <div className="relative">
                        <div className="absolute inset-0 grain" />
                        <div className="relative">Designed with calm contrast ✦</div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
