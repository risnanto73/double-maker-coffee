import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { menu } from "../data/siteData.js";

function MenuGroup({ title, items }) {
    return (
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-white font-semibold">{title}</div>
            <div className="mt-4 space-y-4">
                {items.map((i) => (
                    <div key={i.name} className="flex items-start justify-between gap-4">
                        <div>
                            <div className="text-zinc-100 font-medium">{i.name}</div>
                            <div className="text-sm text-zinc-400">{i.desc}</div>
                        </div>
                        <div className="text-zinc-200 text-sm">${i.price.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Menu() {
    return (
        <main className="py-12">
            <Container>
                <SectionTitle
                    eyebrow="Menu"
                    title="Crafted selection"
                    desc="Struktur menu siap untuk dihubungkan ke CMS (CRUD) pada route /admin/menu."
                />

                <div className="grid gap-4 lg:grid-cols-2">
                    <MenuGroup title="Coffee" items={menu.coffee} />
                    <MenuGroup title="Non-Coffee" items={menu.nonCoffee} />
                    <MenuGroup title="Pastry" items={menu.pastry} />
                    <MenuGroup title="Signature" items={menu.signature} />
                </div>
            </Container>
        </main>
    );
}
