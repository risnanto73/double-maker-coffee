import React, { useMemo, useState } from "react";

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

const SECTIONS = [
  { key: "brand", label: "Brand & Contact", desc: "Nama, alamat, telp, maps." },
  { key: "menu", label: "Menu", desc: "Tambah/edit item menu." },
  { key: "gallery", label: "Gallery", desc: "Atur gambar & label." },
  { key: "hours", label: "Opening Hours", desc: "Jam buka per hari." },
  { key: "testi", label: "Testimonials", desc: "Review pelanggan." },
  { key: "socials", label: "Socials", desc: "Instagram, TikTok, dll." },
];

export default function Dashboard() {
  const [active, setActive] = useState("brand");

  const [brand, setBrand] = useState({
    name: "Double Maker Coffee",
    city: "Brisbane City",
    address: "126 Margaret St, Brisbane City QLD 4000",
    phone: "493311253",
    maps: "https://maps.app.goo.gl/3qumJ8NtSXiW4sgm7",
    tagline: "brew. taste. repeat.",
    description:
      "Minimalist coffee experience in the heart of the city — crafted drinks, clean vibes, and a calm space for focus.",
  });

  const [menu, setMenu] = useState([
    { name: "Espresso", note: "Bold • clean • single origin", price: "$4.5" },
    { name: "Cappuccino", note: "Foamy • balanced • cozy", price: "$5.5" },
    { name: "Iced Latte", note: "Smooth • chilled • refreshing", price: "$6.0" },
    { name: "Signature Mocha", note: "Cocoa • espresso • silky", price: "$6.5" },
  ]);

  // ✅ GANTI: pakai url link (bisa dari cloudinary, imgur, google drive direct link, dsb)
  const [gallery, setGallery] = useState([
    {
      label: "Morning pours",
      url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1200&q=80",
    },
    {
      label: "Milk texture",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    },
    {
      label: "Minimal interior",
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      label: "Signature cup",
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    },
  ]);

  const [hours, setHours] = useState([
    { day: "Mon — Fri", time: "07:00 — 17:00" },
    { day: "Saturday", time: "08:00 — 16:00" },
    { day: "Sunday", time: "08:00 — 15:00" },
  ]);

  const [testi, setTesti] = useState([
    { name: "Ava", text: "Minimal place, maximum taste. The espresso is sharp but smooth." },
    { name: "Noah", text: "I come here to focus. Great vibe, great latte, friendly staff." },
    { name: "Mia", text: "Their cappuccino foam is perfect. Clean design, calm energy." },
  ]);

  const [socials, setSocials] = useState([
    { label: "Instagram", handle: "@doublemakercoffee", url: "https://instagram.com/" },
    { label: "TikTok", handle: "@doublemakercoffee", url: "https://tiktok.com/" },
  ]);

  const headerTitle = useMemo(() => {
    const s = SECTIONS.find((x) => x.key === active);
    return s?.label ?? "Dashboard";
  }, [active]);

  const headerDesc = useMemo(() => {
    const s = SECTIONS.find((x) => x.key === active);
    return s?.desc ?? "";
  }, [active]);

  const onSave = () => {
    alert("Saved (dummy). Next step: connect to Landing via store/localStorage.");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-[22px] border border-zinc-200 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="px-3 py-2">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Admin Panel
              </div>
              <div className="mt-1 text-sm font-semibold">{brand.name}</div>
            </div>

            <div className="mt-2 space-y-1">
              {SECTIONS.map((s) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={cx(
                      "w-full rounded-2xl px-3 py-2.5 text-left text-sm font-semibold transition",
                      "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                      isActive
                        ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white"
                        : "text-zinc-700 dark:text-zinc-200"
                    )}
                  >
                    {s.label}
                    <div className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {s.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 border-t border-zinc-200/70 pt-4 dark:border-zinc-800/70">
              <a
                href="/"
                className="block rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:hover:bg-zinc-800"
              >
                ← Back to Landing
              </a>
            </div>
          </aside>

          {/* Main */}
          <section className="rounded-[22px] border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">{headerTitle}</h1>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{headerDesc}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/"
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  Preview Landing
                </a>
                <button
                  onClick={onSave}
                  className="rounded-2xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-950"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="mt-6">
              {active === "brand" && <BrandEditor brand={brand} setBrand={setBrand} />}
              {active === "menu" && <MenuEditor menu={menu} setMenu={setMenu} />}

              {/* ✅ Gallery link */}
              {active === "gallery" && (
                <GalleryEditor gallery={gallery} setGallery={setGallery} />
              )}

              {active === "hours" && <HoursEditor hours={hours} setHours={setHours} />}
              {active === "testi" && <TestiEditor testi={testi} setTesti={setTesti} />}
              {active === "socials" && (
                <SocialsEditor socials={socials} setSocials={setSocials} />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Editors (UI only) -------------------- */

function Field({ label, hint, children }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-end justify-between gap-3">
        <div className="text-sm font-semibold">{label}</div>
        {hint ? <div className="text-xs text-zinc-500 dark:text-zinc-400">{hint}</div> : null}
      </div>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition",
        "focus:border-zinc-400 dark:focus:border-zinc-600",
        "dark:border-zinc-800 dark:bg-zinc-950/30"
      )}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={cx(
        "w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition",
        "focus:border-zinc-400 dark:focus:border-zinc-600",
        "dark:border-zinc-800 dark:bg-zinc-950/30"
      )}
    />
  );
}

function GhostBtn({ children, ...props }) {
  return (
    <button
      {...props}
      className="rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}

function DangerBtn({ children, ...props }) {
  return (
    <button
      {...props}
      className="rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}

function BrandEditor({ brand, setBrand }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Name">
          <Input value={brand.name} onChange={(e) => setBrand({ ...brand, name: e.target.value })} />
        </Field>

        <Field label="City">
          <Input value={brand.city} onChange={(e) => setBrand({ ...brand, city: e.target.value })} />
        </Field>

        <Field label="Tagline" hint="Muncul di hero">
          <Input value={brand.tagline} onChange={(e) => setBrand({ ...brand, tagline: e.target.value })} />
        </Field>

        <Field label="Description" hint="Muncul di hero">
          <Textarea
            rows={4}
            value={brand.description}
            onChange={(e) => setBrand({ ...brand, description: e.target.value })}
          />
        </Field>
      </div>

      <div className="space-y-4">
        <Field label="Address">
          <Input value={brand.address} onChange={(e) => setBrand({ ...brand, address: e.target.value })} />
        </Field>

        <Field label="Phone">
          <Input value={brand.phone} onChange={(e) => setBrand({ ...brand, phone: e.target.value })} />
        </Field>

        <Field label="Google Maps URL">
          <Input value={brand.maps} onChange={(e) => setBrand({ ...brand, maps: e.target.value })} />
        </Field>

        <div className="rounded-[22px] border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-200">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Preview</div>
          <div className="mt-2 font-semibold">{brand.name}</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">{brand.tagline}</div>
          <div className="mt-2 text-xs">{brand.address}</div>
        </div>
      </div>
    </div>
  );
}

function MenuEditor({ menu, setMenu }) {
  const addItem = () => setMenu([...menu, { name: "New drink", note: "note", price: "$0.0" }]);
  const update = (i, patch) => setMenu(menu.map((m, idx) => (idx === i ? { ...m, ...patch } : m)));
  const remove = (i) => setMenu(menu.filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">Edit item menu. (UI dulu)</div>
        <GhostBtn onClick={addItem}>+ Add item</GhostBtn>
      </div>

      <div className="mt-5 space-y-4">
        {menu.map((m, i) => (
          <div
            key={i}
            className="rounded-[22px] border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold">Item #{i + 1}</div>
              <DangerBtn onClick={() => remove(i)}>Remove</DangerBtn>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Input value={m.name} onChange={(e) => update(i, { name: e.target.value })} />
              <Input value={m.price} onChange={(e) => update(i, { price: e.target.value })} />
              <Input value={m.note} onChange={(e) => update(i, { note: e.target.value })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryEditor({ gallery, setGallery }) {
  const add = () => setGallery([...gallery, { label: "New photo", url: "" }]);
  const update = (i, patch) => setGallery(gallery.map((g, idx) => (idx === i ? { ...g, ...patch } : g)));
  const remove = (i) => setGallery(gallery.filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Gallery pakai <span className="font-semibold">Image URL</span> (link).
        </div>
        <GhostBtn onClick={add}>+ Add photo</GhostBtn>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {gallery.map((g, i) => (
          <div
            key={i}
            className="rounded-[22px] border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold">Photo #{i + 1}</div>
              <DangerBtn onClick={() => remove(i)}>Remove</DangerBtn>
            </div>

            <div className="mt-4 space-y-3">
              <Field label="Label">
                <Input value={g.label} onChange={(e) => update(i, { label: e.target.value })} />
              </Field>

              <Field label="Image URL" hint="contoh: https://...jpg/png/webp">
                <Input value={g.url} onChange={(e) => update(i, { url: e.target.value })} />
              </Field>

              {/* ✅ Preview */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30">
                <div className="aspect-[4/3] w-full">
                  {g.url ? (
                    <img
                      src={g.url}
                      alt={g.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-xs text-zinc-500 dark:text-zinc-400">
                      Paste image URL to preview
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 text-xs text-zinc-600 dark:text-zinc-400">
                  Preview: <span className="font-semibold">{g.label || "Untitled"}</span>
                </div>
              </div>

              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Tips: pakai link direct image (akhiran .jpg/.png/.webp) biar pasti kebaca.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HoursEditor({ hours, setHours }) {
  const add = () => setHours([...hours, { day: "New day", time: "00:00 — 00:00" }]);
  const update = (i, patch) => setHours(hours.map((h, idx) => (idx === i ? { ...h, ...patch } : h)));
  const remove = (i) => setHours(hours.filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">Atur jam buka.</div>
        <GhostBtn onClick={add}>+ Add row</GhostBtn>
      </div>

      <div className="mt-5 space-y-3">
        {hours.map((h, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-[22px] border border-zinc-200 bg-white p-4 shadow-sm md:flex-row md:items-center dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <div className="flex-1">
              <Input value={h.day} onChange={(e) => update(i, { day: e.target.value })} />
            </div>
            <div className="flex-1">
              <Input value={h.time} onChange={(e) => update(i, { time: e.target.value })} />
            </div>
            <div className="md:w-[92px]">
              <DangerBtn onClick={() => remove(i)}>Remove</DangerBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestiEditor({ testi, setTesti }) {
  const add = () => setTesti([...testi, { name: "Name", text: "Review..." }]);
  const update = (i, patch) => setTesti(testi.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  const remove = (i) => setTesti(testi.filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">Edit testimoni.</div>
        <GhostBtn onClick={add}>+ Add testimonial</GhostBtn>
      </div>

      <div className="mt-5 space-y-4">
        {testi.map((t, i) => (
          <div
            key={i}
            className="rounded-[22px] border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold">Testimonial #{i + 1}</div>
              <DangerBtn onClick={() => remove(i)}>Remove</DangerBtn>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Input value={t.name} onChange={(e) => update(i, { name: e.target.value })} />
              <Input value="4.8★" disabled />
            </div>

            <div className="mt-3">
              <Textarea rows={3} value={t.text} onChange={(e) => update(i, { text: e.target.value })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialsEditor({ socials, setSocials }) {
  const add = () => setSocials([...socials, { label: "New", handle: "@handle", url: "https://" }]);
  const update = (i, patch) => setSocials(socials.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  const remove = (i) => setSocials(socials.filter((_, idx) => idx !== i));

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">Social links.</div>
        <GhostBtn onClick={add}>+ Add social</GhostBtn>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {socials.map((s, i) => (
          <div
            key={i}
            className="rounded-[22px] border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold">Social #{i + 1}</div>
              <DangerBtn onClick={() => remove(i)}>Remove</DangerBtn>
            </div>

            <div className="mt-4 space-y-3">
              <Input value={s.label} onChange={(e) => update(i, { label: e.target.value })} />
              <Input value={s.handle} onChange={(e) => update(i, { handle: e.target.value })} />
              <Input value={s.url} onChange={(e) => update(i, { url: e.target.value })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
