"use client";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
      {/* Logo */}
      <div
        className={`text-3xl font-serif font-bold transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#e85d3a] via-[#c44a2c] to-[#a0311f] bg-clip-text text-transparent"
            : "text-[#2c2c2c] hover:text-[#b85a3a]"
        }`}
      >
        <a href="/">Bhargav Pokharel</a>
      </div>

      {/* Nav Links (wrap on mobile) */}
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
        <a href="/" className="hover:border-b-2 border-amber-600 pb-1">
          Home
        </a>
        <a href="/about" className="hover:border-b-2 border-amber-600 pb-1">
          About
        </a>
        <a href="/portfolio" className="hover:border-b-2 border-amber-600 pb-1">
          Portfolio
        </a>
        <a href="/poems" className="hover:border-b-2 border-amber-600 pb-1">
          Poems
        </a>
        <a href="/books" className="hover:border-b-2 border-amber-600 pb-1">
          Books
        </a>
        <a href="/contact" className="hover:border-b-2 border-amber-600 pb-1">
          Contact
        </a>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        className="text-2xl transition-transform hover:rotate-12"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}