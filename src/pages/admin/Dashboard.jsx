export default function Dashboard() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-white font-semibold">Overview</div>
                <p className="mt-2 text-zinc-300 text-sm">
                    Ini tempat ringkasan konten, menu, traffic, dan notifikasi perubahan.
                </p>
                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                    {[
                        { k: "Menu items", v: "28" },
                        { k: "Hero banners", v: "3" },
                        { k: "Gallery", v: "12" }
                    ].map((x) => (
                        <div key={x.k} className="rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 p-4">
                            <div className="text-2xl font-semibold text-white">{x.v}</div>
                            <div className="text-xs text-zinc-400">{x.k}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-white font-semibold">Quick actions</div>
                <div className="mt-4 space-y-2">
                    <button
                        className="w-full rounded-2xl bg-white text-zinc-950 px-4 py-3 text-sm font-medium hover:bg-zinc-200"
                        onClick={() => alert("Buat modal create item (nanti).")}
                    >
                        + Add menu item
                    </button>
                    <button
                        className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm hover:bg-white/10"
                        onClick={() => alert("Buat editor konten (nanti).")}
                    >
                        Edit homepage sections
                    </button>
                    <button
                        className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm hover:bg-white/10"
                        onClick={() => alert("Integrasi analytics (nanti).")}
                    >
                        View analytics
                    </button>
                </div>
            </div>
        </div>
    );
}
