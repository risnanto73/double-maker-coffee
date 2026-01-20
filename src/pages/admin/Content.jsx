export default function Content() {
    return (
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-white font-semibold">Content</div>
            <p className="mt-2 text-sm text-zinc-300">
                Rencana: editor untuk Hero, About, Hours, Testimonials, CTA, dll.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
                {["Hero", "About", "Testimonials", "Footer"].map((x) => (
                    <div key={x} className="rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 p-4">
                        <div className="text-white font-medium">{x}</div>
                        <div className="mt-1 text-xs text-zinc-400">
                            Status: scaffold • nanti jadi form + save
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
