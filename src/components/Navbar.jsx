import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { site } from "../data/siteData.js";

function NavItem({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/8 hover:text-white"
                ].join(" ")
            }
        >
            {children}
        </NavLink>
    );
}

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const loc = useLocation();

    React.useEffect(() => setOpen(false), [loc.pathname]);

    return (
        <div className="sticky top-0 z-40 border-b border-white/8 bg-zinc-950/75 backdrop-blur">
            <Container className="py-3">
                <div className="flex items-center justify-between gap-3">
                    <NavLink to="/" className="group flex items-center gap-3">
                        <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/10 overflow-hidden">
                            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
                            <span className="relative text-sm font-semibold text-white">DM</span>
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold text-white">{site.name}</div>
                            <div className="text-xs text-zinc-400">Brisbane City</div>
                        </div>
                    </NavLink>

                    <div className="hidden md:flex items-center gap-1">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/menu">Menu</NavItem>
                        <NavItem to="/gallery">Gallery</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant="ghost"
                            as="a"
                            href={`tel:${site.phone}`}
                            className="rounded-2xl"
                            title="Call"
                        >
                            Call
                            <span className="text-zinc-400 text-xs">+{site.phone}</span>
                        </Button>
                        <Button as={NavLink} to="/menu" className="rounded-2xl">
                            Explore Menu
                        </Button>
                    </div>

                    <button
                        className="md:hidden rounded-2xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                            <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
                            <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                        </div>
                    </button>
                </div>

                {open && (
                    <div className="md:hidden mt-3 rounded-3xl bg-white/5 ring-1 ring-white/10 p-2">
                        <div className="grid gap-1">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/menu">Menu</NavItem>
                            <NavItem to="/gallery">Gallery</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                            <div className="mt-2 flex gap-2">
                                <Button variant="ghost" as="a" href={`tel:${site.phone}`} className="flex-1">
                                    Call
                                </Button>
                                <Button as={NavLink} to="/menu" className="flex-1">
                                    Menu
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
