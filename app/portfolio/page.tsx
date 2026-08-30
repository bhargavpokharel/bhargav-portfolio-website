"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const projects = [
    {
      title: "Titanic Survival Predictor",
      subtitle: "ML + Streamlit Web App",
      description: "Enhanced Titanic survival prediction using advanced feature engineering (Title, FamilySize, IsAlone, AgeBin, FareBin). Deployed as a fully interactive web app where users enter their own passenger details and see if they would have survived.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Feature Engineering"],
      link: "https://github.com/bhargavpokharel/titanic-2.0-feature-engineering",
      live: "https://lnkd.in/gFpF7vRt",
    },
    {
      title: "California Housing Predictor",
      subtitle: "ML + Streamlit Web App",
      description: "A machine learning web app that predicts California house prices using Random Forest. Users can input housing features and get price predictions instantly.",
      tech: ["Python", "Random Forest", "Streamlit"],
      link: "https://github.com/bhargavpokharel/california-housing-predictor",
      live: "https://bhargavs-california-housing-predictor.streamlit.app/",
    },
    {
      title: "Sweet-Reads Library",
      subtitle: "Bakery/Library Hybrid System",
      description: "A bakery/library hybrid system where people can log in and order food online either at or outside the bakery/library and can check out books at the library which is managed by an admin.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/bhargavpokharel/Sweet-Reads-Library---Tasty-Baking-with-Delicious-Reading",
    },
    {
      title: "Iconic-Clothkart",
      subtitle: "E-commerce + Apriori Algorithm",
      description: "An online clothing store using Django and implemented Apriori algorithm for market basket analysis to suggest frequently bought together items.",
      tech: ["Django", "Python", "Apriori", "SQLite"],
      link: "https://github.com/bhargavpokharel/Iconic-Clothkart",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${
      theme === "dark" ? "bg-[#0a0a14] text-[#e8e6f0]" : "bg-[#fcfaf7] text-[#1a1a24]"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Portfolio</h1>
          <p className="text-lg mb-8 opacity-70">A glimpse of my work and the tools I use.</p>

          {/* Intro Paragraph — Human + Philosophy */}
          <div className="mb-12 p-6 rounded-xl border-l-4 border-sky-600 bg-white/5">
            <p className="text-lg leading-relaxed mb-4">
              I&apos;m Bhargav — a final semester BCA student who loves to build things and let life flow through.
              My projects are not just code; they&apos;re expressions of curiosity, problem-solving, and a deep desire
              to understand how things work.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              But beneath it all, I see all work as an expression of Life — the same Life that animates me,
              that moves through every atom, every line of code, every model I train. I don&apos;t chase titles.
              I&apos;m open to any role, field, or project where I can learn, contribute, and grow — as long as
              there is competent guidance and genuine human connection.
            </p>
            <p className="italic text-sky-300/80">
              Because to me, work is just Life expressing itself through another form.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, i) => (
              <div key={i} className="group relative p-6 rounded-xl border border-sky-600/20 hover:border-sky-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sky-500/50 to-blue-500/50"></div>
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center text-sky-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    {project.live && (
                      <span className="px-2.5 py-1 rounded-full border bg-sky-500/10 text-sky-400 border-sky-500/20 text-xs font-medium">
                        Live Demo
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-1 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-xs mb-3 italic">{project.subtitle}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-gray-400">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      View Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5v14h14v-7h-2v5H7V7h5V5H5z" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-serif font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4 mb-12">
            {["Python", "JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "Next.js", "Git", "GitHub", "Django", "Scikit-learn", "Streamlit", "Machine Learning"].map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-sky-600/10 text-sky-400">{skill}</span>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <a
              href="https://github.com/bhargavpokharel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors"
            >
              Visit My GitHub →
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}