import { NavLink } from "react-router-dom";

export default function AdminTopbar() {
    return (
        <div className="sticky top-0 z-30 border-b border-white/8 bg-zinc-950/75 backdrop-blur">
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
                <div className="lg:hidden text-white font-semibold">CMS</div>
                <div className="flex items-center gap-2">
                    <NavLink
                        to="/"
                        className="rounded-2xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                    >
                        ← Back to site
                    </NavLink>
                    <button
                        className="rounded-2xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                        onClick={() => alert("Tambahkan auth/logout nanti.")}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
