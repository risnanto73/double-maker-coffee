import React from "react";

export default function Toast({ show, message }) {
  return (
    <div
      className={[
        "fixed bottom-5 left-1/2 -translate-x-1/2 z-50",
        "transition-all duration-300",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      ].join(" ")}
      aria-live="polite"
    >
      <div className="rounded-2xl bg-zinc-900/80 backdrop-blur px-4 py-3 ring-1 ring-white/10 shadow-lg">
        <div className="text-sm text-zinc-100">{message}</div>
      </div>
    </div>
  );
}
