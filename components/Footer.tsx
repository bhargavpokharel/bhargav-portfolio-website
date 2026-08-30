export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
        <span>&copy; 2026 Bhargav Pokharel</span>
        <span className="flex gap-4">
          <a
            href="https://github.com/bhargavpokharel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            GitHub: bhargavpokharel
          </a>
          <a
            href="mailto:bhargav3nd@gmail.com"
            className="hover:opacity-100 transition-opacity"
          >
            Email: bhargav3nd@gmail.com
          </a>
          <a
            href="https://instagram.com/bhargavpokharel_main"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            Instagram
          </a>
        </span>
      </div>

      <p className="text-xs mt-4 text-center opacity-40">
        A bit of my life, in your hands.
      </p>
    </footer>
  );
}