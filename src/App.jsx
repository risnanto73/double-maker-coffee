import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Login from "./pages/Login.jsx";

const NAV = [
  { id: "top", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "hours", label: "Hours" },
  { id: "testimonials", label: "Testimoni" },
  { id: "location", label: "Location" },
];

function cx(...arr) {
  return arr.filter(Boolean).join(" ");
}

function NavA({ id, label, activeId }) {
  const isActive = activeId === id;

  return (
    <a
      href={`#${id}`}
      className={cx(
        "relative px-3 py-2 rounded-xl text-sm font-semibold transition",
        "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800",
        isActive &&
        "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-zinc-800"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {/* underline kecil biar premium */}
      <span
        className={cx(
          "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition",
          isActive
            ? "bg-zinc-900/70 dark:bg-white/70"
            : "bg-transparent"
        )}
      />
    </a>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState("top");

  // theme init (punya kamu)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  // ✅ Active state observer
  // ✅ Active state (line-based) — works great with anchor div (h-0, -top-32)
  useEffect(() => {
    const ids = NAV.map((n) => n.id);

    const setHashIfNeeded = (id) => {
      const current = window.location.hash?.replace("#", "");
      if (current !== id) window.history.replaceState(null, "", `#${id}`);
    };

    const getActiveByLine = () => {
      // Garis patokan: di bawah navbar (tweak kalau perlu)
      const line = 140;

      let bestId = "top";
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const r = el.getBoundingClientRect();
        // Anchor div kamu h-0, jadi gunakan r.top sebagai patokan
        const dist = Math.abs(r.top - line);

        // pilih yang dekat garis & masih dalam viewport range
        const inRange = r.top < window.innerHeight && r.top > -window.innerHeight;
        if (inRange && dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      return bestId;
    };

    // throttle via rAF biar halus & ringan
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const id = getActiveByLine();
        if (id) {
          setActiveId(id);
          setHashIfNeeded(id);
        }
        ticking = false;
      });
    };

    const onHash = () => {
      const h = window.location.hash?.replace("#", "");
      if (h && ids.includes(h)) setActiveId(h);
    };

    onHash();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);


  // memo nav render
  const navItems = useMemo(() => NAV, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              DM
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Double Maker Coffee</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                Brisbane City
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <NavA key={n.id} id={n.id} label={n.label} activeId={activeId} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile quick buttons */}
            <a
              href="#menu"
              className={cx(
                "md:hidden rounded-xl border px-3 py-2 text-sm font-semibold shadow-sm transition",
                "border-zinc-200 bg-white hover:bg-zinc-50",
                "dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              )}
            >
              Menu
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile tiny tabs (optional, cantik & ringan) */}
        <div className="md:hidden border-t border-zinc-200/70 dark:border-zinc-800/70">
          <div className="mx-auto max-w-6xl overflow-x-auto px-2 py-2">
            <div className="flex w-max gap-1">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={cx(
                    "whitespace-nowrap px-3 py-2 rounded-xl text-sm font-semibold transition",
                    "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800",
                    activeId === n.id &&
                    "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-zinc-800"
                  )}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Double Maker Coffee
        </div>
      </footer>
    </div>
  );
}
