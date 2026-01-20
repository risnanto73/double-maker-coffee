import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import { site } from "../data/siteData.js";

export default function Contact() {
    return (
        <main className="py-12">
            <Container>
                <SectionTitle
                    eyebrow="Visit"
                    title="Find us & say hello"
                    desc="Form ini bisa diarahkan ke email, WhatsApp, atau API endpoint nanti."
                />

                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                        <div className="text-white font-semibold">Details</div>
                        <div className="mt-3 space-y-2 text-sm text-zinc-300">
                            <div><span className="text-zinc-400">Address:</span> {site.address}</div>
                            <div>
                                <span className="text-zinc-400">Phone:</span>{" "}
                                <a className="text-zinc-200 hover:underline" href={`tel:${site.phone}`}>
                                    +{site.phone}
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="text-white font-semibold">Hours</div>
                            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                                {site.hours.map((h) => (
                                    <li key={h.day} className="flex items-center justify-between">
                                        <span className="text-zinc-400">{h.day}</span>
                                        <span>{h.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Button as="a" href={`tel:${site.phone}`}>Call</Button>
                            <Button variant="ghost" as="a" href="#">Open Maps</Button>
                            <Button variant="subtle" as="a" href="/admin">CMS</Button>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                        <div className="text-white font-semibold">Message</div>
                        <form className="mt-4 space-y-3">
                            <input
                                className="w-full rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/15"
                                placeholder="Your name"
                            />
                            <input
                                className="w-full rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/15"
                                placeholder="Email"
                            />
                            <textarea
                                rows="5"
                                className="w-full rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/15"
                                placeholder="Message"
                            />
                            <Button type="button" onClick={() => alert("Hook ke backend/API nanti ya!")}>
                                Send
                            </Button>
                            <p className="text-xs text-zinc-500">
                                Nanti bisa diganti jadi submit ke API + validasi + spam protection.
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </main>
    );
}
