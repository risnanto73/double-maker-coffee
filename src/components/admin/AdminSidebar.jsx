import { NavLink } from "react-router-dom";

function Item({ to, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                    isActive ? "bg-white/10 text-white ring-1 ring-white/12" : "text-zinc-300 hover:bg-white/7"
                ].join(" ")
            }
        >
            <span>{label}</span>
            <span className="text-xs text-zinc-500">→</span>
        </NavLink>
    );
}

export default function AdminSidebar() {
    return (
        <aside className="hidden lg:block border-r border-white/8 bg-zinc-950/60 p-4">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">CMS Dashboard</div>
                <div className="mt-1 text-xs text-zinc-400">
                    Scaffold siap untuk auth + API
                </div>
            </div>

            <nav className="mt-4 space-y-2">
                <Item to="/admin/dashboard" label="Overview" />
                <Item to="/admin/content" label="Content" />
                <Item to="/admin/menu" label="Menu Manager" />
                <Item to="/admin/settings" label="Settings" />
            </nav>

            <div className="mt-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-5 text-xs text-zinc-400">
                Next step: tambahkan login (JWT/session), role, dan CRUD ke database.
            </div>
        </aside>
    );
}
