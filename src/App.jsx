import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const projects = [
    {
      title: "Real-Time Chat Application",
      duration: "Jan 2025 — Feb 2025",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cookies"],
      links: [
        { url: "https://github.com/RutvikCh", type: "github" }
      ],
      description: [
        "Built a full-stack real-time chat application using MERN stack for instant messaging.",
        "Implemented JWT-based authentication with secure cookie storage for user sessions.",
        "Integrated real-time bidirectional communication between users.",
        "Designed responsive UI with message threading, online status indicators, and typing indicators."
      ]
    },
    {
      title: "Spam Email Detection & Movie Recommendation System",
      duration: "Dec 2024 — Jan 2025",
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
      technologies: ["C++"],
      links: [
        { url: "https://leetcode.com/u/RPchaudhari/", type: "external" },
        { url: "https://www.geeksforgeeks.org/user/rutvikz8sv/", type: "external" }
      ],
      description: [
        "Completed 250+ problems on platforms like LeetCode and GeeksforGeeks, focusing on algorithm optimization and efficient problem-solving techniques.",
        "Gained a deep understanding of data structures like arrays, trees, graphs, and dynamic programming."
      ]
    },
    {
      title: "Paste Application",
      duration: "Feb 2025 — Mar 2025",
      technologies: ["React.js", "Tailwind CSS"],
      links: [],
      description: [
        "Developed a web-based paste tool for quickly storing and sharing code or text snippets.",
        "Designed a clean and responsive user interface using Tailwind CSS and component-based architecture in React.",
        "Implemented features like unique paste links, clipboard copy, and auto-expanding input areas.",
        "Focused on user experience, fast performance, and modern UI practices."
      ]
    },
    {
      title: "House Price Prediction (Machine Learning)",
      duration: "Mar 2025 — Apr 2025",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn", "Lasso Regression", "Ridge Regression"],
      links: [
        { url: "https://github.com/RutvikCh", type: "github" }
      ],
      description: [
        "Built a machine learning model to predict house prices using historical data.",
        "Used Pandas for data preprocessing and cleaning.",
        "Applied Lasso and Ridge Regression to reduce overfitting and improve model generalization.",
        "Visualized data and model performance with Seaborn and Matplotlib."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Rutvik Chaudhari</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/RutvikCh" target="_blank" className="text-gray-500 hover:text-gray-700">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rutvik-p-chaudhari-a9595a28a" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={20} />
              </a>
              {/* <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700">
                <Mail size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Rutvik Chaudhari
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Full-Stack Developer | MERN Stack | AI/ML | React.js Specialist
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-4 px-1 ${
                activeTab === 'about'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-4 px-1 ${
                activeTab === 'projects'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`pb-4 px-1 ${
                activeTab === 'skills'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`pb-4 px-1 ${
                activeTab === 'contact'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'about' && (
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-gray-700">
                I am a passionate full-stack developer with expertise in the MERN stack and modern web technologies. 
                My experience includes building real-time applications, implementing secure authentication systems, and developing machine learning solutions.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Recently completed a remote AI/ML internship at Jayadhi Limited (UK), where I gained valuable industry experience in artificial intelligence and machine learning applications.
                With a solid foundation in data structures and algorithms, I approach problems methodically to create efficient, scalable solutions.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Experience</h3>
                <p className="text-gray-700">
                  <strong>AI/ML Intern</strong> - Jayadhi Limited, UK (Remote) | 1 Month<br/>
                  Worked on artificial intelligence and machine learning projects, gaining hands-on experience with industry-standard practices and technologies.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Projects</h2>
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      {project.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-gray-600 mt-1">• {desc}</p>
                      ))}
                    </div>
                    
                    {project.links.length > 0 && (
                      <div className="mt-4 flex space-x-3">
                        {project.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex} 
                            href={link.url} 
                            target="_blank"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800"
                          >
                            {link.type === 'github' ? (
                              <><Github size={16} className="mr-1" /> GitHub</>
                            ) : link.type === 'external' ? (
                              <><ExternalLink size={16} className="mr-1" /> View</>
                            ) : (
                              <><Code size={16} className="mr-1" /> Code</>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>C++</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>JavaScript</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>React.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>HTML/CSS</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Express.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>MongoDB</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>JWT Authentication</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Science & ML</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Pandas</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Scikit-learn</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>NLP</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Seaborn/Matplotlib</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">MERN Stack</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Real-time Applications</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Data Structures</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Algorithms</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Problem Solving</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Natural Language Processing</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Regression Models</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Data Visualization</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">UI/UX Design</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  
                  <div className="flex items-center">
                    <Github className="text-blue-500 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <a href="https://github.com/RutvikCh" className="text-blue-600 hover:text-blue-800">
                        github.com/RutvikCh
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="text-blue-500 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/rutvik-p-chaudhari-a9595a28a" className="text-blue-600 hover:text-blue-800">
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="text" 
                        id="email" 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    
                    <button 
                      onClick={() => alert('Message sent!')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Rutvik Chaudhari</p>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/RutvikCh" target="_blank" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}