"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ContactForm({ theme }: { theme: "dark" | "light" }) {
  const [state, handleSubmit] = useForm("xbgjlnyl");

  if (state.succeeded) {
    return (
      <div className={`p-6 rounded-xl border-l-4 border-green-500 text-center ${
        theme === "dark" ? "bg-green-500/10" : "bg-green-500/10"
      }`}>
        <p className="text-lg font-medium text-green-500">Thanks for your message!</p>
        <p className={`text-sm mt-2 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={`block text-sm font-medium mb-1 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`w-full px-4 py-3 rounded-xl border transition-colors ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-sky-500/50 focus:ring-sky-500/30"
              : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-sky-500/50 focus:ring-sky-500/30"
          }`}
          placeholder="Your name"
        />
        <ValidationError field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`w-full px-4 py-3 rounded-xl border transition-colors ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-sky-500/50 focus:ring-sky-500/30"
              : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-sky-500/50 focus:ring-sky-500/30"
          }`}
          placeholder="your@email.com"
        />
        <ValidationError field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-medium mb-1 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-sky-500/50 focus:ring-sky-500/30"
              : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-sky-500/50 focus:ring-sky-500/30"
          }`}
          placeholder="Write your message..."
        />
        <ValidationError field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={`w-full py-3 rounded-xl font-medium transition-colors disabled:opacity-60 ${
          theme === "dark"
            ? "bg-sky-600 text-white hover:bg-sky-500"
            : "bg-sky-600 text-white hover:bg-sky-500"
        }`}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${
      theme === "dark" ? "bg-[#0a0a14] text-[#e8e6f0]" : "bg-[#fcfaf7] text-[#1a1a24]"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="max-w-2xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact</h1>
          <p className={`text-lg mb-8 ${
            theme === "dark" ? "opacity-70" : "opacity-70"
          }`}>
            Have a question, an idea, or just want to say hello? Send me a message.
          </p>

          <ContactForm theme={theme} />

          {/* Alternative contact methods */}
          <div className="mt-12 space-y-4">
            <p className={`text-sm ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}>
              Or reach me directly:
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:bhargav3nd@gmail.com" className="text-sky-400 hover:text-sky-300 transition-colors">
                bhargav3nd@gmail.com
              </a>
              <a href="https://instagram.com/bhargavpokharel_main" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">
                instagram @ bhargavpokharel_main
              </a>
              <a href="https://github.com/bhargavpokharel" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">
                github.com/bhargavpokharel
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}