import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const SKILLS = {
  "AI & ML": ["Google Gemini API", "TensorFlow/Keras", "ANN", "CNN", "NLP", "Scikit-learn", "Prompt Engineering", "Supervised/Unsupervised Learning"],
  "Full Stack": ["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "Django", ".NET", "Angular"],
  "Languages": ["Python", "JavaScript", "Java", "C++", "C", "SQL"],
  "Database": ["MongoDB", "MySQL", "MSSQL"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Swagger", "JWT Auth"],
};

// 🔥 VIDEO PATHS CONFIG - REPLACE THESE PATHS WITH YOUR VIDEOS IN public/videos/
const VIDEO_PATHS = {
  ann: "/videos/ann-demo.mp4",    // <- Put your ANN video here
  chat: "/videos/chat-demo.mp4",  // <- Put your Chat app video here  
  ai: "/videos/ai-demo.mp4",      // <- Put your AI Assistant video here
  movie: "/videos/movie-demo.mp4", // <- Put your Movie Rec video here
  house: "/videos/house-demo.mp4", // <- Put your House Price video here
  spam: "/videos/spam-demo.mp4",   // <- Put your Spam Detection video here
  recr: "/videos/recr-demo.mp4",   // <- Put your Recruitment video here
  paste: "/videos/paste-demo.mp4", // <- Put your Paste app video here
  // Just add your video files to public/videos/ folder and update paths above
};

const PROJECTS = [
  { id: "ann",   title: "ANN Customer Churn Prediction",   subtitle: "Deep Learning · Flask · React",             desc: "Deep learning model using ANN in TensorFlow/Keras to predict customer churn. Includes preprocessing, multi-layer neural network, and Flask API for real-time predictions via a React frontend.", tags: ["TensorFlow","Keras","Flask","React","ANN"],         color: "#ff6b35", icon: "🧠", live: null },
  { id: "chat",  title: "MERN Chat Application",             subtitle: "Real-time · JWT · WebSockets",              desc: "Real-time chat app with React, Node.js, Express & MongoDB. Secure JWT authentication, protected routes, and live messaging via WebSockets.",                                                                                  tags: ["React","Node.js","MongoDB","JWT","WebSocket"],      color: "#00c9a7", icon: "💬", live: "https://baatchit-nine.vercel.app" },
  { id: "ai",    title: "AI Virtual Assistant",              subtitle: "Google Gemini · MERN · Prompt Engineering", desc: "AI-powered assistant using React and Node.js integrated with Google Gemini API. Advanced prompt engineering for multi-command handling and response accuracy.",                           tags: ["Gemini API","React","Node.js","Prompt Eng."],       color: "#7c5cbf", icon: "🤖", live: "https://ai-assistant-pvww.onrender.com" },
  { id: "movie", title: "Movie Recommendation System",       subtitle: "ML · Flask · Collaborative Filtering",      desc: "Machine learning model for personalized movie recommendations. Trained on user preference data with a Flask backend serving predictions.",                                                                                  tags: ["Python","Flask","Scikit-learn","ML"],               color: "#f7b731", icon: "🎬", live: null },
  { id: "house", title: "House Price Prediction",            subtitle: "Regression · Flask · Data Science",         desc: "Predictive model using Linear, Ridge & Lasso Regression to estimate house prices. Feature engineering, model evaluation, and Flask REST API integration.",                                    tags: ["Regression","Flask","Pandas","NumPy"],              color: "#fc5c65", icon: "🏠", live: null },
  { id: "spam",  title: "Email Spam Detection",              subtitle: "NLP · Classification · ML",                 desc: "NLP-based email spam classifier using text preprocessing, TF-IDF vectorization, and machine learning classification algorithms.",                                                                                           tags: ["NLP","Python","Scikit-learn","Classification"],     color: "#26de81", icon: "📧", live: null },
  { id: "recr",  title: "Recruitment Management System",     subtitle: ".NET · Angular · MSSQL",                    desc: "Full-featured recruitment platform built with .NET backend, Angular frontend, and MSSQL database. Manages job postings, applications, and candidate tracking.",                                  tags: [".NET","Angular","MSSQL","Full Stack"],              color: "#45aaf2", icon: "👔", live: null },
  { id: "paste", title: "Paste App",                         subtitle: "React · CRUD · Clipboard",                  desc: "A React-based paste/snippet manager app for saving, organizing, and sharing code snippets and text. Clean UI with full CRUD operations.",                                                                                     tags: ["React","JavaScript","CRUD"],                        color: "#fd9644", icon: "📋", live: null },
];

const roles = ["AI Developer", "ML Enthusiast", "Full Stack Developer"];

export default function Portfolio() {
  const [activeSection, setActiveSection]   = useState("about");
  const [roleIdx,       setRoleIdx]          = useState(0);
  const [charIdx,       setCharIdx]          = useState(0);
  const [deleting,      setDeleting]         = useState(false);

  /* ── Typewriter ── */
  useEffect(() => {
    const role = roles[roleIdx];
    let t;
    if (!deleting && charIdx < role.length)      t = setTimeout(() => { setCharIdx(c=>c+1); }, 80);
    else if (!deleting && charIdx===role.length)  t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting  && charIdx > 0)            t = setTimeout(() => { setCharIdx(c=>c-1); }, 40);
    else { setDeleting(false); setRoleIdx(i=>(i+1)%roles.length); }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  /* ── Active section ── */
  useEffect(() => {
    const onScroll = () => {
      for (const id of [...NAV_LINKS.map(n=>n.toLowerCase())].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:"smooth" });

  /* ── Styles ── */
  const SL = { fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#00c9a7", marginBottom:"0.75rem" };
  const ST = { fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"#fff", marginBottom:"1rem" };
  const SB = { width:60, height:2, background:"#00c9a7", marginBottom:"3rem" };

  return (
    <div style={{ background:"#090b10", color:"#e8eaf0", fontFamily:"'DM Mono',monospace", minHeight:"100vh" }}>
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
        .pulse-dot { animation:pulse2 2s infinite; }
        .blink-cur { animation:blink2 1s step-end infinite; }

        .nav-link { cursor:pointer; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; color:#6b7280; padding-bottom:2px; border-bottom:1px solid transparent; transition:color .2s,border-color .2s; user-select:none; }
        .nav-link:hover { color:#e8eaf0; }
        .nav-link.active { color:#e8eaf0; border-bottom-color:#00c9a7; }

        .proj-card { background:#090b10; border:1px solid rgba(255,255,255,.07); border-radius:8px; padding:1.75rem; transition:border-color .25s,transform .25s; }
        .proj-card:hover { border-color:rgba(255,255,255,.2); transform:translateY(-3px); }

        .skill-card { background:#090b10; border:1px solid rgba(255,255,255,.07); border-radius:8px; padding:1.5rem; transition:border-color .25s; }
        .skill-card:hover { border-color:#00c9a7; }

        .live-link { font-size:.7rem; padding:.45rem 1rem; border-radius:4px; border:1px solid rgba(255,255,255,.12); background:transparent; color:#e8eaf0; cursor:pointer; font-family:'DM Mono',monospace; text-decoration:none; display:inline-flex; align-items:center; gap:.3rem; transition:border-color .2s,color .2s; }
        .live-link:hover { border-color:#00c9a7; color:#00c9a7; }

        .hire-btn { display:inline-flex; align-items:center; padding:.75rem 2rem; background:transparent; color:#e8eaf0; font-family:'Syne',sans-serif; font-weight:700; font-size:.8rem; letter-spacing:.05em; border:1px solid rgba(255,255,255,.12); border-radius:4px; text-transform:uppercase; text-decoration:none; transition:border-color .2s,color .2s; }
        .hire-btn:hover { border-color:#00c9a7; color:#00c9a7; }

        .social-btn { padding:.6rem 1.2rem; border:1px solid rgba(255,255,255,.12); border-radius:4px; font-size:.72rem; color:#6b7280; text-decoration:none; font-family:'DM Mono',monospace; transition:border-color .2s,color .2s; }
        .social-btn:hover { border-color:#00c9a7; color:#00c9a7; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 2rem", background:"rgba(9,11,16,.92)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,.07)" }}>
        <div onClick={() => scrollTo("about")} style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.2rem", color:"#00c9a7", cursor:"pointer", letterSpacing:"-0.02em", userSelect:"none" }}>RC.</div>
        <div style={{ display:"flex", gap:"2rem", alignItems:"center", flexWrap:"wrap" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link${activeSection===l.toLowerCase()?" active":""}`} onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"6rem 2rem 4rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,201,167,.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, opacity:.025, backgroundImage:"linear-gradient(#e8eaf0 1px,transparent 1px),linear-gradient(90deg,#e8eaf0 1px,transparent 1px)", backgroundSize:"40px 40px", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:900, width:"100%", margin:"0 auto" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:".5rem", padding:".35rem .9rem", border:"1px solid #00c9a7", borderRadius:"100px", fontSize:".7rem", letterSpacing:".1em", textTransform:"uppercase", color:"#00c9a7", marginBottom:"2rem" }}>
            <span className="pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:"#00c9a7", display:"inline-block" }} />
            Available for Opportunities
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(3rem,8vw,6rem)", fontWeight:800, lineHeight:1, letterSpacing:"-0.03em", color:"#fff", marginBottom:"1rem" }}>
            Rutvik<br /><span style={{ color:"#00c9a7" }}>Chaudhari</span>
          </h1>
          <p style={{ fontSize:"clamp(1rem,2vw,1.3rem)", color:"#6b7280", marginBottom:"1rem", minHeight:"2rem" }}>
            <span style={{ color:"#ff6b35", fontStyle:"italic" }}>{roles[roleIdx].slice(0, charIdx)}{charIdx < roles[roleIdx].length && <span className="blink-cur" style={{ display:"inline-block", width:2, height:"1em", background:"#ff6b35", marginLeft:2, verticalAlign:"text-bottom" }} />}</span>
          </p>
          <p style={{ maxWidth:580, color:"#6b7280", lineHeight:1.8, fontSize:".85rem", marginBottom:"2.5rem" }}>
            Final-year CSE student building intelligent software — from ANN models to real-time chat apps. Passionate about AI, ML, and full-stack development. 200+ DSA problems solved.
          </p>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
            <button onClick={() => scrollTo("projects")} style={{ padding:".75rem 2rem", background:"#00c9a7", color:"#000", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:".8rem", letterSpacing:".05em", border:"none", borderRadius:4, cursor:"pointer", textTransform:"uppercase" }}>
              View Projects
            </button>
            <a href="mailto:chaudharirutvik110@gmail.com" className="hire-btn">Hire Me →</a>
          </div>
          <div style={{ display:"flex", gap:"2.5rem", flexWrap:"wrap" }}>
            {[["8+","Projects Built"],["200+","DSA Problems"],["3+","AI/ML Models"],["7.91","CGPA"]].map(([num,label]) => (
              <div key={label}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"2rem", fontWeight:800, color:"#fff", lineHeight:1 }}>{num}</div>
                <div style={{ fontSize:".7rem", color:"#6b7280", letterSpacing:".08em", marginTop:".2rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background:"#0e1117", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={SL}>Technical Arsenal</p>
          <h2 style={ST}>Skills & Technologies</h2>
          <div style={SB} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"1.5rem" }}>
            {Object.entries(SKILLS).map(([cat,tags]) => (
              <div key={cat} className="skill-card">
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:".8rem", fontWeight:700, color:"#00c9a7", marginBottom:"1rem", textTransform:"uppercase", letterSpacing:".05em" }}>{cat}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:".4rem" }}>
                  {tags.map(t => <span key={t} style={{ fontSize:".62rem", padding:".2rem .5rem", background:"#141820", border:"1px solid rgba(255,255,255,.07)", borderRadius:3, color:"#6b7280" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={SL}>Work History</p>
          <h2 style={ST}>Experience</h2>
          <div style={SB} />
          <div style={{ background:"#0e1117", border:"1px solid rgba(255,255,255,.07)", borderRadius:8, padding:"2rem", position:"relative" }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3, background:"linear-gradient(180deg,#00c9a7,#7c5cbf)", borderRadius:"8px 0 0 8px" }} />
            <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:".5rem", marginBottom:"1rem" }}>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:800, color:"#fff", marginBottom:".2rem" }}>Jayadhi Limited, UK</div>
                <div style={{ fontSize:".8rem", color:"#00c9a7", marginBottom:".2rem" }}>AI/ML Intern · Remote</div>
                <div style={{ fontSize:".7rem", color:"#6b7280" }}>Jun 2025 – Aug 2025</div>
              </div>
              <span style={{ fontSize:".68rem", padding:".3rem .8rem", border:"1px solid #00c9a7", borderRadius:"100px", color:"#00c9a7", alignSelf:"flex-start" }}>Internship</span>
            </div>
            <ul style={{ listStyle:"none" }}>
              {["Developed an AI-powered learning chatbot using Google Gemini API","Applied advanced prompt engineering techniques to improve contextual response accuracy","Integrated AI capabilities within an educational platform","Collaborated remotely with developers to enhance chatbot performance and usability"].map(pt => (
                <li key={pt} style={{ fontSize:".8rem", color:"#6b7280", lineHeight:1.8, paddingLeft:"1.2rem", position:"relative", marginBottom:".2rem" }}>
                  <span style={{ position:"absolute", left:0, color:"#00c9a7" }}>→</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ background:"#0e1117", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={SL}>What I've Built</p>
          <h2 style={ST}>Projects</h2>
          <div style={SB} />


          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"1.5rem" }}>
            {PROJECTS.map(p => (
              <div key={p.id} className="proj-card">
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1rem" }}>
                  <span style={{ fontSize:"2rem" }}>{p.icon}</span>
                </div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.05rem", fontWeight:700, color:"#fff", marginBottom:".2rem" }}>{p.title}</div>
                <div style={{ fontSize:".7rem", color:"#6b7280", marginBottom:".85rem", letterSpacing:".05em", textTransform:"uppercase" }}>{p.subtitle}</div>
                <div style={{ fontSize:".78rem", color:"#6b7280", lineHeight:1.7, marginBottom:"1.25rem" }}>{p.desc}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:".4rem", marginBottom:"1rem" }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize:".62rem", padding:".15rem .5rem", borderRadius:"100px", border:`1px solid ${p.color}66`, color:p.color }}>{t}</span>)}
                </div>
                <div style={{ display:"flex", gap:".75rem", alignItems:"center", flexWrap:"wrap" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="live-link">↗ Live</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={SL}>Academic Background</p>
          <h2 style={ST}>Education</h2>
          <div style={SB} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem", marginBottom:"3rem" }}>
            {[
              { degree:"B.Tech – CSE",  inst:"Indrashil University",                 score:"CGPA: 7.91", year:"2026 (Pursuing)" },
              { degree:"HSC",           inst:"Adarsh Vidhyalaya, Visnagar",          score:"74.50%",     year:"" },
              { degree:"SSC",           inst:"Shree B.M. Chaudhari High School, Gorisna", score:"81.33%",   year:"" },
            ].map(e => (
              <div key={e.degree} style={{ background:"#0e1117", border:"1px solid rgba(255,255,255,.07)", borderRadius:8, padding:"1.5rem" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1rem", fontWeight:700, color:"#fff", marginBottom:".25rem" }}>{e.degree}</div>
                <div style={{ fontSize:".78rem", color:"#00c9a7", marginBottom:".25rem" }}>{e.inst}</div>
                <div style={{ fontSize:".7rem", color:"#6b7280" }}>{e.score}{e.year ? ` · ${e.year}` : ""}</div>
              </div>
            ))}
          </div>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:700, color:"#fff", marginBottom:"1.5rem" }}>Achievements</h3>
          {["Solved 200+ DSA problems on LeetCode and GeeksforGeeks","Built 8+ AI, ML, and full-stack projects independently","Developed AI chatbot systems using Google Gemini API for a UK-based company","Built and deployed real-time web apps on Vercel and Render"].map(a => (
            <div key={a} style={{ display:"flex", gap:".75rem", alignItems:"flex-start", marginBottom:".75rem" }}>
              <span style={{ color:"#00c9a7", fontSize:".8rem", marginTop:".15rem", flexShrink:0 }}>★</span>
              <span style={{ fontSize:".82rem", color:"#6b7280", lineHeight:1.7 }}>{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background:"#0e1117", padding:"6rem 2rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p style={SL}>Get In Touch</p>
          <h2 style={ST}>Contact</h2>
          <div style={SB} />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem" }}>
            <div>
              {[{ icon:"✉", label:"Email", val:"rpc4524@gmail.com", href:"mailto:rpc4524@gmail.com" },{ icon:"📍", label:"Location", val:"Mehsana, Gujarat", href:null }].map(c => (
                <div key={c.label} style={{ display:"flex", alignItems:"flex-start", gap:"1rem", marginBottom:"1.5rem" }}>
                  <div style={{ width:38, height:38, borderRadius:6, background:"#090b10", border:"1px solid rgba(255,255,255,.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:".65rem", color:"#6b7280", letterSpacing:".1em", textTransform:"uppercase", marginBottom:".2rem" }}>{c.label}</div>
                    {c.href ? <a href={c.href} style={{ fontSize:".82rem", color:"#e8eaf0", textDecoration:"none" }}>{c.val}</a> : <span style={{ fontSize:".82rem", color:"#e8eaf0" }}>{c.val}</span>}
                  </div>
                </div>
              ))}
              <div style={{ display:"flex", gap:"1rem", marginTop:"2rem" }}>
                <a href="https://linkedin.com/in/rutvik-p-chaudhari-a9595a28a" target="_blank" rel="noopener noreferrer" className="social-btn">↗ LinkedIn</a>
                <a href="https://github.com/RutvikCh" target="_blank" rel="noopener noreferrer" className="social-btn">↗ GitHub</a>
              </div>
            </div>
            <div style={{ background:"#090b10", border:"1px solid rgba(255,255,255,.07)", borderRadius:8, padding:"2rem" }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.2rem", fontWeight:700, color:"#fff", marginBottom:".5rem" }}>Open to Opportunities</h3>
              <p style={{ fontSize:".78rem", color:"#6b7280", lineHeight:1.8, marginBottom:"1.5rem" }}>Looking for full-time roles or internships in AI/ML and Full Stack development. Let's build something remarkable together.</p>
              <div style={{ marginBottom:"1.5rem" }}>
                {["AI/ML Engineer","Full Stack Dev","Remote OK","On-site Gujarat"].map(c => (
                  <span key={c} style={{ display:"inline-flex", alignItems:"center", gap:".4rem", fontSize:".68rem", padding:".25rem .65rem", border:"1px solid rgba(255,255,255,.07)", borderRadius:"100px", color:"#6b7280", margin:".2rem" }}>
                    <span style={{ width:5, height:5, borderRadius:"50%", background:"#00c9a7", display:"inline-block" }} />{c}
                  </span>
                ))}
              </div>
              <a href="mailto:chaudharirutvik110@gmail.com" style={{ display:"inline-block", padding:".75rem 2rem", background:"#00c9a7", color:"#000", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:".8rem", letterSpacing:".05em", borderRadius:4, textDecoration:"none", textTransform:"uppercase" }}>Send Email →</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign:"center", padding:"2rem", fontSize:".72rem", color:"#6b7280", borderTop:"1px solid rgba(255,255,255,.07)" }}>
        <p style={{ marginBottom:".4rem", fontFamily:"'Syne',sans-serif", fontWeight:700, color:"#00c9a7" }}>Rutvik Chaudhari</p>
        Built with React · AI Developer · ML Enthusiast · Full Stack Developer
      </footer>

    </div>
  );
}