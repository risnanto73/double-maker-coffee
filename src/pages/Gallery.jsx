import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { gallery } from "../data/siteData.js";

function PlaceholderImage({ title, note }) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
            <div className="aspect-[4/3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%)] opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_55%)]" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="text-white font-semibold">{title}</div>
                    <div className="text-sm text-zinc-300">{note}</div>
                </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
        </div>
    );
}

export default function Gallery() {
    return (
        <main className="py-12">
            <Container>
                <SectionTitle
                    eyebrow="Gallery"
                    title="Aesthetic moments"
                    desc="Masih placeholder (tanpa image). Nanti gampang ganti ke data CMS berisi URL gambar."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((g) => (
                        <PlaceholderImage key={g.title} title={g.title} note={g.note} />
                    ))}
                </div>
            </Container>
        </main>
    );
}
