export default function Settings() {
    return (
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-white font-semibold">Settings</div>
            <p className="mt-2 text-sm text-zinc-300">
                Rencana: authentication, roles, integrations (maps, analytics), theme, dsb.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                    { t: "Auth", d: "Login + session/JWT + roles" },
                    { t: "Database", d: "Menu/content CRUD (Postgres/Firebase/etc.)" },
                    { t: "Media", d: "Upload gambar gallery + optimasi" },
                    { t: "SEO", d: "Meta, OG image, sitemap" }
                ].map((x) => (
                    <div key={x.t} className="rounded-2xl bg-zinc-950/40 ring-1 ring-white/10 p-4">
                        <div className="text-white font-medium">{x.t}</div>
                        <div className="mt-1 text-xs text-zinc-400">{x.d}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
