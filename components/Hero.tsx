export default function Hero({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="flex flex-col items-center text-center min-h-[70vh] justify-center">
      <div className="max-w-2xl">
        <p className={`text-2xl md:text-3xl font-semibold mb-2 tracking-wide ${
          theme === "dark" ? "text-sky-400" : "text-sky-600"
        }`}>
          Welcome.
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
          This is my juice.
        </h1>
        <div className={`text-lg mb-6 space-y-6 ${
          theme === "dark" ? "opacity-80" : "opacity-70"
        }`}>
          <p>A little bit of the juice pressed from my life and work</p>
          <p>in your hands.</p>
          <p>Whether you like the taste or not,</p>
          <p>that's up to you.</p>
        </div>
      </div>

      {/* Photo below text — square with rounded corners */}
      <div className="flex-shrink-0 mt-8">
        <img
          src="/me.jpg"
          alt="Bhargav Pokharel"
          className={`w-48 h-48 md:w-72 md:h-72 object-cover rounded-2xl border-2 shadow-lg ${
            theme === "dark"
              ? "border-amber-600/30"
              : "border-amber-600/20"
          }`}
        />
      </div>
    </section>
  );
}