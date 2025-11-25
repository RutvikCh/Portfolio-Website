import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const projects = [
    {
      title: "Virtual Assistant using MERN & Google Gemini",
      duration: "Jun 2025 — Aug 2025",
      technologies: ["React.js", "Node.js", "Google Gemini API", "Prompt Engineering", "Voice Recognition"],
      links: [
        { url: "https://ai-assistant-pvww.onrender.com", type: "external" }
      ],
      description: [
        "Developed an AI-powered voice assistant using React and Node.js with Gemini API integration.",
        "Applied prompt engineering to enhance accuracy, context understanding, and multi-command handling.",
        "Implemented voice recognition for seamless user interaction with the AI assistant.",
        "Deployed live application with real-time AI responses and conversation management."
      ]
    },
    {
      title: "MERN Chat App with JWT Authentication",
      duration: "Apr 2025 — May 2025",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "WebSockets"],
      links: [
        { url: "https://baatchit-nine.vercel.app", type: "external" },
        { url: "https://github.com/RutvikCh", type: "github" }
      ],
      description: [
        "Built a real-time chat application using React, Node.js, Express, MongoDB and WebSockets for messaging.",
        "Implemented secure JWT authentication and protected routes for safe login sessions.",
        "Designed responsive UI with real-time message delivery and user presence indicators.",
        "Deployed on Vercel with full-stack functionality and database integration."
      ]
    },
    {
      title: "House Price Prediction ML Model",
      duration: "Mar 2025 — Apr 2025",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Lasso Regression", "Ridge Regression"],
      links: [
        { url: "https://github.com/RutvikCh", type: "github" }
      ],
      description: [
        "Designed machine learning model using Ridge and Lasso Regression to predict real estate prices.",
        "Performed feature engineering, data preprocessing, hyperparameter tuning and model evaluation.",
        "Analyzed housing market data to identify key price indicators and optimize model accuracy.",
        "Achieved high prediction accuracy through systematic model comparison and optimization."
      ]
    },
    {
      title: "Spam Email Detection & Movie Recommendation System",
      duration: "Feb 2025 — Mar 2025",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Natural Language Processing", "Machine Learning"],
      links: [
        { url: "https://github.com/RutvikCh", type: "github" }
      ],
      description: [
        "Developed a spam email classification system using Natural Language Processing and machine learning algorithms.",
        "Built a movie recommendation system using collaborative filtering and content-based filtering techniques.",
        "Implemented text preprocessing, feature extraction, and model training for email classification.",
        "Achieved high accuracy in spam detection and personalized movie recommendations based on user preferences."
      ]
    },
    {
      title: "Data Structures & Algorithms (DSA) Practice",
      duration: "Jul 2024 — Present",
      technologies: ["C++", "Java", "C"],
      links: [
        { url: "https://leetcode.com/u/RPchaudhari/", type: "external" },
        { url: "https://www.geeksforgeeks.org/user/rutvikz8sv/", type: "external" }
      ],
      description: [
        "Solved 250+ DSA problems on platforms like LeetCode and GeeksforGeeks.",
        "Strengthened core concepts of arrays, trees, graphs, dynamic programming, and greedy algorithms."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
          <h1 className="text-xl font-bold">Rutvik Chaudhari</h1>
          <div className="flex gap-4">
            <a href="https://github.com/RutvikCh" className="text-gray-600 hover:text-black"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/rutvik-p-chaudhari-a9595a28a" className="text-gray-600 hover:text-black"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-5xl font-bold">Rutvik Chaudhari</h2>
        <p className="text-xl text-gray-600 mt-4">Full-Stack Developer | MERN | AI/ML | React.js Specialist</p>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="border-b">
          {["about", "projects", "skills", "contact"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-1 pb-4 mr-8 capitalize ${activeTab === tab ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* About */}
        {activeTab === "about" && (
          <div className="mt-8 text-lg text-gray-700 leading-relaxed">
            <p>I am a passionate full-stack developer with expertise in MERN stack and AI-powered applications.</p>
            <p className="mt-4">Previously worked as an AI/ML Intern at Jayadhi Limited (UK), gaining real-world industry experience.</p>
          </div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          <div className="space-y-10 mt-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl p-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((t, j) => (
                    <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-md">{t}</span>
                  ))}
                </div>

                <ul className="mt-3 text-gray-600 space-y-1">
                  {project.description.map((d, j) => (
                    <li key={j}>• {d}</li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="flex gap-4 mt-4">
                    {project.links.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" className="flex items-center text-blue-600 hover:text-blue-800">
                        {l.type === "github" ? <Github size={16} className="mr-1" /> : <ExternalLink size={16} className="mr-1" />}
                        {l.type === "github" ? "GitHub" : "Live"}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Programming */}
            <SkillCard title="Programming Languages" items={["C++", "Python", "JavaScript", "Java"]} />
            
            {/* Frontend */}
            <SkillCard title="Frontend Development" items={["React.js", "Tailwind CSS", "HTML/CSS"]} />

            {/* Backend */}
            <SkillCard title="Backend Development" items={["Node.js", "Express.js", "MongoDB", "JWT Authentication"]} />

            {/* Machine Learning */}
            <SkillCard title="Data Science & ML" items={["Pandas", "Scikit-learn", "NLP", "Seaborn / Matplotlib"]} />
          </div>
        )}

        {/* Contact */}
        {activeTab === "contact" && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-3"><Github /> <a href="https://github.com/RutvikCh" className="text-blue-600">github.com/RutvikCh</a></div>
            <div className="flex items-center gap-3"><Linkedin /> <a href="https://www.linkedin.com/in/rutvik-p-chaudhari-a9595a28a" className="text-blue-600">LinkedIn</a></div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Rutvik Chaudhari — All Rights Reserved
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((i, k) => (
          <li key={k} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
