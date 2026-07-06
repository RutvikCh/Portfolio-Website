import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const SKILLS = {
  "AI & ML": ["Google Gemini API", "Groq AI", "TensorFlow/Keras", "ANN", "CNN", "NLP", "Scikit-learn", "Prompt Engineering", "LLM Integration"],
  "Full Stack": ["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "Next.js 14", ".NET", "Angular"],
  "Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL"],
  "Database": ["MongoDB", "MySQL", "SQL Server"],
  "Tools & DevOps": ["Git", "GitHub", "GitHub Actions", "Postman", "VS Code", "Swagger", "JWT Auth", "Vercel", "Render"],
};

const EXPERIENCE = [
  {
    company: "Jayadhi Limited, UK",
    role: "AI/ML Intern · Remote",
    period: "Jun 2025 – Aug 2025",
    badge: "Internship",
    color: "#00c9a7",
    points: [
      "Developed and integrated an AI-powered chatbot for an educational platform using Google Gemini API, improving contextual response quality through iterative prompt engineering.",
      "Applied prompt engineering techniques — few-shot prompting, chain-of-thought, and system-role conditioning — to improve chatbot response relevance across multiple use cases.",
      "Integrated LLM-based features into existing platform workflows using REST APIs, handling real-time AI interaction and response streaming on the backend.",
      "Collaborated with the development team on testing, debugging, and performance optimisation of AI features across 3 deployment environments.",
      "Documented API integration patterns and prompt templates, enabling faster onboarding for future team members.",
    ],
  },
  {
    company: "Full Stack Developer Trainee",
    role: "In-person Training · Gujarat",
    period: "Jan 2024 – Apr 2024 (4 months)",
    badge: "Training",
    color: "#7c5cbf",
    points: [
      "Delivered 3 full-stack web applications end-to-end — SQL schema design, ASP.NET Core REST APIs, Angular frontends, and JWT authentication — within a 16-week Agile sprint cycle.",
      "Reduced average API response time by 30% on a Recruitment Management System by optimising SQL Server queries and introducing indexed lookups on a 10,000+ record candidate database.",
      "Integrated unit and integration tests using xUnit (.NET) and Jasmine (Angular), raising code coverage from 0% to 65% across the project codebase.",
      "Applied microservices architecture patterns by decomposing a monolithic booking system into 3 independently deployable service modules during a refactoring sprint.",
      "Collaborated in a 4-person team via Git branching workflows, code reviews, and daily standups, shipping on a bi-weekly cadence with zero critical bugs at handoff.",
    ],
  },
];

const PROJECTS = [
  {
    id: "umapaints",
    title: "Uma Paints Industries",
    subtitle: "Freelance Client Project · Next.js 14",
    desc: "Delivered a full 22-file production website for an Ahmedabad-based industrial paint manufacturer. Features a dark stone/amber gold design system, TypeScript, centralised content in constants.ts, WhatsApp enquiry integration, and contact form with product/quantity dropdowns.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    color: "#f7b731",
    icon: "🎨",
    live: null,
    badge: "Live · Freelance",
    highlight: true,
  },
  {
    id: "ann",
    title: "ANN Customer Churn Prediction",
    subtitle: "Deep Learning · Flask · React",
    desc: "Trained an Artificial Neural Network (TensorFlow/Keras) on a 10,000-row telecom dataset, achieving 91% accuracy and 0.88 AUC-ROC. Applied feature engineering (one-hot encoding, SMOTE), cross-validation, and deployed via Flask REST API.",
    tags: ["TensorFlow", "Keras", "Flask", "React", "ANN"],
    color: "#ff6b35",
    icon: "🧠",
    live: null,
    badge: null,
  },
  {
    id: "resume",
    title: "AI Resume Analyzer",
    subtitle: "Groq AI · MERN · ATS Scoring",
    desc: "Full-stack Resume Analyzer with Groq AI API that delivers ATS score (0–100), skill gap analysis, and improvement suggestions in under 3 seconds per upload. Includes JWT auth, dashboard analytics, and PDF file upload.",
    tags: ["React", "Node.js", "MongoDB", "Groq AI", "JWT"],
    color: "#00c9a7",
    icon: "📄",
    live: null,
    badge: null,
  },
  {
    id: "ai",
    title: "AI Virtual Assistant",
    subtitle: "Google Gemini · MERN · Prompt Engineering",
    desc: "Multi-turn AI assistant using Google Gemini API with conversation memory, context window management, and real-time streaming responses. RESTful backend with rate-limiting; mobile-responsive React frontend with dark mode.",
    tags: ["Gemini API", "React", "Node.js", "Prompt Eng."],
    color: "#7c5cbf",
    icon: "🤖",
    live: "https://ai-assistant-pvww.onrender.com",
    badge: null,
  },
  {
    id: "chat",
    title: "MERN Chat Application",
    subtitle: "Real-time · JWT · WebSockets",
    desc: "Real-time chat app with React, Node.js, Express & MongoDB. Secure JWT authentication, protected routes, and live messaging via WebSockets.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "WebSocket"],
    color: "#26de81",
    icon: "💬",
    live: "https://baatchit-nine.vercel.app",
    badge: null,
  },
  {
    id: "recr",
    title: "Recruitment Management System",
    subtitle: ".NET · Angular · MSSQL",
    desc: "Full-featured recruitment platform with .NET backend, Angular frontend, and MSSQL database. Automated candidate registration, interview scheduling, feedback collection, and status tracking for a 200+ candidate pipeline with 4-role RBAC.",
    tags: [".NET", "Angular", "MSSQL", "JWT", "Full Stack"],
    color: "#45aaf2",
    icon: "👔",
    live: null,
    badge: null,
  },
  {
    id: "movie",
    title: "Movie Recommendation System",
    subtitle: "ML · Flask · Collaborative Filtering",
    desc: "Machine learning model for personalised movie recommendations. Trained on user preference data with collaborative filtering; Flask backend serving predictions.",
    tags: ["Python", "Flask", "Scikit-learn", "ML"],
    color: "#fc5c65",
    icon: "🎬",
    live: null,
    badge: null,
  },
  {
    id: "house",
    title: "House Price Prediction",
    subtitle: "Regression · Flask · Data Science",
    desc: "Predictive model using Linear, Ridge & Lasso Regression to estimate house prices. Feature engineering, model evaluation, and Flask REST API integration.",
    tags: ["Regression", "Flask", "Pandas", "NumPy"],
    color: "#fd9644",
    icon: "🏠",
    live: null,
    badge: null,
  },
  {
    id: "spam",
    title: "Email Spam Detection",
    subtitle: "NLP · Classification · ML",
    desc: "NLP-based email spam classifier using text preprocessing, TF-IDF vectorisation, and machine learning classification algorithms.",
    tags: ["NLP", "Python", "Scikit-learn", "Classification"],
    color: "#ff6b35",
    icon: "📧",
    live: null,
    badge: null,
  },
];

const roles = ["AI Developer", "ML Enthusiast", "Full Stack Developer", "Python Developer"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [roleIdx,       setRoleIdx]       = useState(0);
  const [charIdx,       setCharIdx]       = useState(0);
  const [deleting,      setDeleting]      = useState(false);
  const [filter,        setFilter]        = useState("All");

  /* ── Typewriter ── */
  useEffect(() => {
    const role = roles[roleIdx];
    let t;
    if (!deleting && charIdx < role.length)     t = setTimeout(() => setCharIdx(c => c + 1), 80);
    else if (!deleting && charIdx === role.length) t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting  && charIdx > 0)          t = setTimeout(() => setCharIdx(c => c - 1), 40);
    else { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  /* ── Active section on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      for (const id of [...NAV_LINKS.map(n => n.toLowerCase())].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  /* ── Project filter categories ── */
  const filterCats = ["All", "AI/ML", "Full Stack", "Freelance"];
  const filterMap  = { "AI/ML": ["ann","resume","ai","movie","house","spam"], "Full Stack": ["chat","recr","umapaints","resume","ai"], "Freelance": ["umapaints"] };
  const visibleProjects = filter === "All" ? PROJECTS : PROJECTS.filter(p => filterMap[filter]?.includes(p.id));

  /* ── Shared style tokens ── */
  const SL = { fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00c9a7", marginBottom: "0.75rem" };
  const ST = { fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", marginBottom: "1rem" };
  const SB = { width: 60, height: 2, background: "#00c9a7", marginBottom: "3rem" };

  return (
    <div style={{ background: "#090b10", color: "#e8eaf0", fontFamily: "'DM Mono',monospace", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; }
        ::selection { background:#00c9a7; color:#000; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:#090b10; }
        ::-webkit-scrollbar-thumb { background:#00c9a7; border-radius:2px; }
        @keyframes pulse2  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes blink2  { 50%{opacity:0} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .pulse-dot  { animation:pulse2 2s infinite; }
        .blink-cur  { animation:blink2 1s step-end infinite; }
        .fade-up    { animation:fadeUp .5s ease both; }

        .nav-link { cursor:pointer; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; color:#6b7280; padding-bottom:2px; border-bottom:1px solid transparent; transition:color .2s,border-color .2s; user-select:none; }
        .nav-link:hover { color:#e8eaf0; }
        .nav-link.active { color:#e8eaf0; border-bottom-color:#00c9a7; }

        .proj-card { background:#090b10; border:1px solid rgba(255,255,255,.07); border-radius:8px; padding:1.75rem; transition:border-color .25s,transform .25s; position:relative; overflow:hidden; }
        .proj-card:hover { border-color:rgba(255,255,255,.2); transform:translateY(-3px); }
        .proj-card.highlight { border-color:rgba(247,183,49,.25); }
        .proj-card.highlight:hover { border-color:rgba(247,183,49,.6); }

        .skill-card { background:#090b10; border:1px solid rgba(255,255,255,.07); border-radius:8px; padding:1.5rem; transition:border-color .25s; }
        .skill-card:hover { border-color:#00c9a7; }

        .exp-card { background:#0e1117; border:1px solid rgba(255,255,255,.07); border-radius:8px; padding:2rem; position:relative; margin-bottom:1.5rem; transition:border-color .25s; }
        .exp-card:hover { border-color:rgba(255,255,255,.15); }
        .exp-card:last-child { margin-bottom:0; }

        .live-link { font-size:.7rem; padding:.45rem 1rem; border-radius:4px; border:1px solid rgba(255,255,255,.12); background:transparent; color:#e8eaf0; cursor:pointer; font-family:'DM Mono',monospace; text-decoration:none; display:inline-flex; align-items:center; gap:.3rem; transition:border-color .2s,color .2s; }
        .live-link:hover { border-color:#00c9a7; color:#00c9a7; }

        .hire-btn { display:inline-flex; align-items:center; padding:.75rem 2rem; background:transparent; color:#e8eaf0; font-family:'Syne',sans-serif; font-weight:700; font-size:.8rem; letter-spacing:.05em; border:1px solid rgba(255,255,255,.12); border-radius:4px; text-transform:uppercase; text-decoration:none; transition:border-color .2s,color .2s; }
        .hire-btn:hover { border-color:#00c9a7; color:#00c9a7; }

        .social-btn { padding:.6rem 1.2rem; border:1px solid rgba(255,255,255,.12); border-radius:4px; font-size:.72rem; color:#6b7280; text-decoration:none; font-family:'DM Mono',monospace; transition:border-color .2s,color .2s; }
        .social-btn:hover { border-color:#00c9a7; color:#00c9a7; }

        .filter-btn { padding:.4rem 1rem; border-radius:100px; border:1px solid rgba(255,255,255,.1); background:transparent; color:#6b7280; font-size:.68rem; font-family:'DM Mono',monospace; cursor:pointer; letter-spacing:.05em; transition:all .2s; }
        .filter-btn:hover { border-color:#00c9a7; color:#00c9a7; }
        .filter-btn.active { background:#00c9a7; border-color:#00c9a7; color:#000; font-weight:700; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: "rgba(9,11,16,.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
        <div onClick={() => scrollTo("about")} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#00c9a7", cursor: "pointer", letterSpacing: "-0.02em", userSelect: "none" }}>RC.</div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link${activeSection === l.toLowerCase() ? " active" : ""}`} onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,201,167,.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .025, backgroundImage: "linear-gradient(#e8eaf0 1px,transparent 1px),linear-gradient(90deg,#e8eaf0 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, width: "100%", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".35rem .9rem", border: "1px solid #00c9a7", borderRadius: "100px", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#00c9a7", marginBottom: "2rem" }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00c9a7", display: "inline-block" }} />
            Available for Opportunities
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1rem" }}>
            Rutvik<br /><span style={{ color: "#00c9a7" }}>Chaudhari</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.3rem)", color: "#6b7280", marginBottom: "1rem", minHeight: "2rem" }}>
            <span style={{ color: "#ff6b35", fontStyle: "italic" }}>
              {roles[roleIdx].slice(0, charIdx)}
              {charIdx < roles[roleIdx].length && <span className="blink-cur" style={{ display: "inline-block", width: 2, height: "1em", background: "#ff6b35", marginLeft: 2, verticalAlign: "text-bottom" }} />}
            </span>
          </p>
          <p style={{ maxWidth: 580, color: "#6b7280", lineHeight: 1.8, fontSize: ".85rem", marginBottom: "2.5rem" }}>
            Final-year CSE student building intelligent software — from ANN models to real-time chat apps and freelance production websites. Passionate about AI, ML, and full-stack development. 200+ DSA problems solved.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <button onClick={() => scrollTo("projects")} style={{ padding: ".75rem 2rem", background: "#00c9a7", color: "#000", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".8rem", letterSpacing: ".05em", border: "none", borderRadius: 4, cursor: "pointer", textTransform: "uppercase" }}>
              View Projects
            </button>
            <a href="mailto:chaudharirutvik110@gmail.com" className="hire-btn">Hire Me →</a>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[["9+", "Projects Built"], ["8.00", "CGPA · B.Tech CSE"], ["3+", "AI/ML Models"], ["1", "Freelance Client"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: ".7rem", color: "#6b7280", letterSpacing: ".08em", marginTop: ".2rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: "#0e1117", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={SL}>Technical Arsenal</p>
          <h2 style={ST}>Skills & Technologies</h2>
          <div style={SB} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1.5rem" }}>
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat} className="skill-card">
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: ".8rem", fontWeight: 700, color: "#00c9a7", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: ".05em" }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                  {tags.map(t => <span key={t} style={{ fontSize: ".62rem", padding: ".2rem .5rem", background: "#141820", border: "1px solid rgba(255,255,255,.07)", borderRadius: 3, color: "#6b7280" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={SL}>Work History</p>
          <h2 style={ST}>Experience</h2>
          <div style={SB} />
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-card">
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: exp.color, borderRadius: "8px 0 0 8px" }} />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: ".5rem", marginBottom: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: ".2rem" }}>{exp.company}</div>
                  <div style={{ fontSize: ".8rem", color: exp.color, marginBottom: ".2rem" }}>{exp.role}</div>
                  <div style={{ fontSize: ".7rem", color: "#6b7280" }}>{exp.period}</div>
                </div>
                <span style={{ fontSize: ".68rem", padding: ".3rem .8rem", border: `1px solid ${exp.color}`, borderRadius: "100px", color: exp.color, alignSelf: "flex-start" }}>{exp.badge}</span>
              </div>
              <ul style={{ listStyle: "none" }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: ".8rem", color: "#6b7280", lineHeight: 1.8, paddingLeft: "1.2rem", position: "relative", marginBottom: ".2rem" }}>
                    <span style={{ position: "absolute", left: 0, color: exp.color }}>→</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ background: "#0e1117", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={SL}>What I've Built</p>
          <h2 style={ST}>Projects</h2>
          <div style={SB} />

          {/* Filter buttons */}
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {filterCats.map(cat => (
              <button key={cat} className={`filter-btn${filter === cat ? " active" : ""}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.5rem" }}>
            {visibleProjects.map(p => (
              <div key={p.id} className={`proj-card${p.highlight ? " highlight" : ""}`}>
                {/* Freelance badge ribbon */}
                {p.badge && (
                  <div style={{ position: "absolute", top: 14, right: 14, fontSize: ".6rem", padding: ".2rem .6rem", background: `${p.color}22`, border: `1px solid ${p.color}66`, borderRadius: "100px", color: p.color, letterSpacing: ".06em", textTransform: "uppercase" }}>{p.badge}</div>
                )}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: ".2rem" }}>{p.title}</div>
                <div style={{ fontSize: ".7rem", color: "#6b7280", marginBottom: ".85rem", letterSpacing: ".05em", textTransform: "uppercase" }}>{p.subtitle}</div>
                <div style={{ fontSize: ".78rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1rem" }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: ".62rem", padding: ".15rem .5rem", borderRadius: "100px", border: `1px solid ${p.color}66`, color: p.color }}>{t}</span>)}
                </div>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="live-link">↗ Live</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={SL}>Academic Background</p>
          <h2 style={ST}>Education</h2>
          <div style={SB} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              { degree: "B.Tech – CSE",  inst: "Indrashil University",                      score: "CGPA: 8.00", year: "2026" },
              { degree: "HSC",           inst: "Adarsh Vidhyalaya, Visnagar",               score: "74.50%",     year: "" },
              { degree: "SSC",           inst: "Shree B.M. Chaudhari High School, Gorisna", score: "81.33%",     year: "" },
            ].map(e => (
              <div key={e.degree} style={{ background: "#0e1117", border: "1px solid rgba(255,255,255,.07)", borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: ".25rem" }}>{e.degree}</div>
                <div style={{ fontSize: ".78rem", color: "#00c9a7", marginBottom: ".25rem" }}>{e.inst}</div>
                <div style={{ fontSize: ".7rem", color: "#6b7280" }}>{e.score}{e.year ? ` · ${e.year}` : ""}</div>
              </div>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>Achievements</h3>
          {[
            "Solved 200+ DSA problems on LeetCode and GeeksforGeeks — consistently in top 15% for Python submissions.",
            "Delivered a freelance production website for Uma Paints Industries (Ahmedabad) using Next.js 14 & TypeScript — live and client-approved.",
            "Built and deployed 9+ AI/ML and full-stack applications independently, covering the complete SDLC.",
            "Developed AI chatbot systems using Google Gemini API for a UK-based company during internship.",
            "Built and deployed real-time web apps on Vercel and Render.",
          ].map(a => (
            <div key={a} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start", marginBottom: ".75rem" }}>
              <span style={{ color: "#00c9a7", fontSize: ".8rem", marginTop: ".15rem", flexShrink: 0 }}>★</span>
              <span style={{ fontSize: ".82rem", color: "#6b7280", lineHeight: 1.7 }}>{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#0e1117", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={SL}>Get In Touch</p>
          <h2 style={ST}>Contact</h2>
          <div style={SB} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              {[
                { icon: "✉", label: "Email",    val: "chaudharirutvik110@gmail.com", href: "mailto:chaudharirutvik110@gmail.com" },
                { icon: "📍", label: "Location", val: "Kheralu, Mehsana, Gujarat",   href: null },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, background: "#090b10", border: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: ".65rem", color: "#6b7280", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".2rem" }}>{c.label}</div>
                    {c.href ? <a href={c.href} style={{ fontSize: ".82rem", color: "#e8eaf0", textDecoration: "none" }}>{c.val}</a> : <span style={{ fontSize: ".82rem", color: "#e8eaf0" }}>{c.val}</span>}
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <a href="https://linkedin.com/in/rutvik-p-chaudhari-a9595a28a" target="_blank" rel="noopener noreferrer" className="social-btn">↗ LinkedIn</a>
                <a href="https://github.com/RutvikCh" target="_blank" rel="noopener noreferrer" className="social-btn">↗ GitHub</a>
              </div>
            </div>
            <div style={{ background: "#090b10", border: "1px solid rgba(255,255,255,.07)", borderRadius: 8, padding: "2rem" }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: ".5rem" }}>Open to Opportunities</h3>
              <p style={{ fontSize: ".78rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "1.5rem" }}>Looking for full-time roles in AI/ML and Full Stack development. Let's build something remarkable together.</p>
              <div style={{ marginBottom: "1.5rem" }}>
                {["AI/ML Engineer", "Full Stack Dev", "Python Developer", "Remote OK", "On-site Gujarat"].map(c => (
                  <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".68rem", padding: ".25rem .65rem", border: "1px solid rgba(255,255,255,.07)", borderRadius: "100px", color: "#6b7280", margin: ".2rem" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00c9a7", display: "inline-block" }} />{c}
                  </span>
                ))}
              </div>
              <a href="mailto:chaudharirutvik110@gmail.com" style={{ display: "inline-block", padding: ".75rem 2rem", background: "#00c9a7", color: "#000", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".8rem", letterSpacing: ".05em", borderRadius: 4, textDecoration: "none", textTransform: "uppercase" }}>Send Email →</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", fontSize: ".72rem", color: "#6b7280", borderTop: "1px solid rgba(255,255,255,.07)" }}>
        <p style={{ marginBottom: ".4rem", fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#00c9a7" }}>Rutvik Chaudhari</p>
        Built with React · AI Developer · ML Enthusiast · Full Stack Developer · Fresher 2026
      </footer>
    </div>
  );
}