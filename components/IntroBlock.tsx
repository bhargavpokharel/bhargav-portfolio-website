export default function IntroBlock({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="max-w-2xl mx-auto text-center mt-16 mb-20">
      {/* Part 1: Human Intro */}
      <div
        className={`p-8 rounded-xl border-l-4 border-amber-600 mb-8 ${
          theme === "dark"
            ? "bg-[#1a1a2e] border-white/10"
            : "bg-white shadow-md border-gray-100"
        }`}
      >
        <p
          className={`text-lg leading-relaxed mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          I&apos;m Bhargav — a final semester BCA student who loves to build
          things and let life flow through. I read, build, write poems, learn
          deeply, and spend quiet (or musical) moments in the silence, holding space for
          myself amid the intensity and chaos and pain of life and the psyche.
        </p>
      </div>

      {/* Part 2: Mystic Truth (same font as Part 1) */}
      <div
        className={`p-8 rounded-xl border-l-4 border-sky-600 ${
          theme === "dark"
            ? "bg-[#0e1a2e] border-sky-500/20"
            : "bg-white shadow-md border-gray-100"
        }`}
      >
        <p
          className={`text-lg leading-relaxed mb-4 ${
            theme === "dark" ? "text-sky-200/80" : "text-sky-800/80"
          }`}
        >
          Beneath it all, I see myself as formless Spirit or Life itself,
          expressing in all things — in you, in me, in every moment and work. I
          try to get out of the way and let that Life express itself as the
          power in the Heart of all things.
        </p>
      </div>

      {/* Work Link (standalone, below both boxes) */}
      <div className="mt-8 text-center">
        <a
          href="/portfolio"
          className="inline-block font-medium text-amber-600 hover:text-amber-500 transition-colors"
        >
          If you want work and related stuff, click here →
        </a>
      </div>
    </section>
  );
}