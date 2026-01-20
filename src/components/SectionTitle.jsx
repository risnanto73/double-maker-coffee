export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="text-xs tracking-[0.18em] uppercase text-zinc-400">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-50">
        {title}
      </h2>
      {desc && <p className="mt-2 max-w-2xl text-zinc-300">{desc}</p>}
    </div>
  );
}
