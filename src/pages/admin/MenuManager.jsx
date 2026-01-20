import React from "react";
import { menu as seed } from "../../data/siteData.js";

export default function MenuManager() {
    const [items, setItems] = React.useState(() => {
        const flat = [
            ...seed.signature.map((x) => ({ ...x, category: "Signature" })),
            ...seed.coffee.map((x) => ({ ...x, category: "Coffee" })),
            ...seed.nonCoffee.map((x) => ({ ...x, category: "Non-Coffee" })),
            ...seed.pastry.map((x) => ({ ...x, category: "Pastry" }))
        ];
        return flat;
    });

    const [q, setQ] = React.useState("");

    const filtered = items.filter((i) =>
        (i.name + " " + i.category).toLowerCase().includes(q.toLowerCase())
    );

    function addMock() {
        setItems((prev) => [
            { name: "New Item", desc: "Edit me (CMS)", price: 0, category: "Coffee" },
            ...prev
        ]);
    }

    function updateAt(idx, patch) {
        setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
    }

    function removeAt(idx) {
        setItems((prev) => prev.filter((_, i) => i !== idx));
    }

    return (
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <div className="text-white font-semibold">Menu Manager</div>
                    <div className="text-xs text-zinc-400 mt-1">
                        Mock CRUD (state lokal). Nanti tinggal sambungkan ke API + database.
                    </div>
                </div>

                <div className="flex gap-2">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search menu…"
                        className="w-full sm:w-64 rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-white/15"
                    />
                    <button
                        onClick={addMock}
                        className="rounded-2xl bg-white text-zinc-950 px-4 py-2 text-sm font-medium hover:bg-zinc-200"
                    >
                        + Add
                    </button>
                </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-white/10">
                <div className="grid grid-cols-[1.4fr_1fr_110px_88px] bg-white/6 text-xs text-zinc-300">
                    <div className="px-4 py-3">Item</div>
                    <div className="px-4 py-3">Category</div>
                    <div className="px-4 py-3 text-right">Price</div>
                    <div className="px-4 py-3 text-right">Actions</div>
                </div>

                <div className="divide-y divide-white/8">
                    {filtered.map((it, idx) => (
                        <div key={idx} className="grid grid-cols-[1.4fr_1fr_110px_88px] bg-zinc-950/30">
                            <div className="px-4 py-3">
                                <input
                                    value={it.name}
                                    onChange={(e) => updateAt(idx, { name: e.target.value })}
                                    className="w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/15"
                                />
                                <input
                                    value={it.desc}
                                    onChange={(e) => updateAt(idx, { desc: e.target.value })}
                                    className="mt-2 w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 outline-none focus:ring-2 focus:ring-white/15"
                                />
                            </div>

                            <div className="px-4 py-3">
                                <select
                                    value={it.category}
                                    onChange={(e) => updateAt(idx, { category: e.target.value })}
                                    className="w-full rounded-xl bg-zinc-950 ring-1 ring-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/15"
                                >
                                    {["Signature", "Coffee", "Non-Coffee", "Pastry"].map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="px-4 py-3">
                                <input
                                    type="number"
                                    step="0.1"
                                    value={it.price}
                                    onChange={(e) => updateAt(idx, { price: Number(e.target.value) })}
                                    className="w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 text-sm text-right outline-none focus:ring-2 focus:ring-white/15"
                                />
                            </div>

                            <div className="px-4 py-3 flex justify-end">
                                <button
                                    onClick={() => removeAt(idx)}
                                    className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs hover:bg-white/10"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="p-6 text-sm text-zinc-400">No results.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
