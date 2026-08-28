"use client";

import { useState } from "react";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import PoemSection from "@/components/PoemSection";
import BooksSection from "@/components/BooksSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ease-in-out ${
        theme === "dark"
          ? "bg-[#0a0a14] text-[#e8e6f0]"
          : "bg-[#fcfaf7] text-[#1a1a24]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <IntroBlock theme={theme} />
        <PoemSection />
        <BooksSection />
        <Footer />
      </div>
    </div>
  );
}