import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
// import Typewriter from './TypeWriter';

const Portfolio = () => {

   const personalInfo = {
      name: "Joel Antony",
      role: "MCA Student",
      bio: "MCA student with experience in MERN, Django, and PHP. I build responsive web apps, have worked with Xmigrate, and hold certifications in cybersecurity, AI, and system administration. Always learning.",
      email: "joelantony2107@gmail.com",
      socials: {
         github: "https://github.com/itzzFirenze",
         linkedin: "https://www.linkedin.com/in/joel--antony/"
      }
   };

   const skills = [
      "React", "Tailwind CSS", "Node.js", "JavaScript", "C++", "Python", "Java"
   ];

   const projects = [
      {
         title: "Antony's Boutique (E-Commerce)",
         description:
            "A full MERN stack boutique website with products, authentication, admin dashboard, and direct messaging through Contact Us. Includes stitching service details and order handling.",
         tags: ["React", "Express", "MongoDB", "Tailwind"],
         link: "https://antonys-store-frontend.onrender.com/"
      },
      {
         title: "AI Exam Platform",
         description:
            "A web-based platform for teachers and students where teachers upload notes, AI generates questions, students take exams in fullscreen mode, and AI evaluates answers.",
         tags: ["MERN", "OCR", "GenAI", "LLM"],
         link: "https://ai-exam-frontend-n8f4.onrender.com/"
      },
      {
         title: "xmigrate Company Website",
         description:
            "A dynamic and responsive website developed during internship, featuring modern UI, animations, and optimized layout.",
         tags: ["Next.Js", "CSS", "Tailwind"],
         link: "https://deploy-preview-6--practical-minsky-8e26c4.netlify.app/"
      }
   ];

   return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-slate-200 dot-grid">
         <nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-sm z-50 border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
               <span className="font-bold text-lg tracking-tight text-slate-900">{personalInfo.name}</span>
               <div className="flex gap-6 text-sm font-medium text-slate-500">
                  <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
                  <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
                  <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
               </div>
            </div>
         </nav>

         <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
            <section id="about" className="mb-24 fade-in-up">
               <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                  {personalInfo.role}
               </h1>
               {/* <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 flex gap-2">
                  <Typewriter
                     texts={[
                        "Full Stack Engineer",
                        "Joel Antony"
                     ]}
                  />
               </h1> */}

               <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                  {personalInfo.bio}
               </p>

               <div className="flex items-center gap-4">
                  <a
                     href={personalInfo.socials.github}
                     target="_blank"
                     rel="noreferrer"
                     className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 bg-slate-100 rounded-lg transition-all shadow-xl/10"
                  >
                     <SiGithub size={24} />
                  </a>
                  <a
                     href={personalInfo.socials.linkedin}
                     target="_blank"
                     rel="noreferrer"
                     className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 bg-slate-100 rounded-lg transition-all shadow-xl/10"
                  >
                     <FaLinkedin size={24} />
                  </a>
                  <a
                     href={`mailto:${personalInfo.email}`}
                     className="px-6 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                     <Mail size={18} />
                     Let's Talk
                  </a>
               </div>
            </section>

            <section className="mb-8">
               <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Technologies</h2>
               <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                     <span
                        key={index}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-400 transition-colors cursor-default shadow-xl/10"
                     >
                        {skill}
                     </span>
                  ))}
               </div>
            </section>

            <section id="projects" className="mb-24">
               <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-8">Selected Works</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                     >
                        <div className="flex justify-between items-start mb-4">
                           <div className="p-3 bg-slate-100 rounded-lg text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                              <Code2 size={24} />
                           </div>
                           <a href={project.link} target='_blank' className="text-slate-400 hover:text-slate-900 transition-colors">
                              <ExternalLink size={20} />
                           </a>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                           {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                 #{tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            <footer id="contact" className="border-t border-slate-200 pt-12 mt-12 text-center">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to collaborate?</h2>
               <p className="text-slate-600 mb-8">
                  Feel free to reach out for projects, collaborations, or just to say hello.
               </p>
               <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-900 font-semibold border-b-2 border-slate-900 hover:text-slate-600 hover:border-slate-600 transition-colors pb-1"
               >
                  {personalInfo.email}
               </a>
               <div className="mt-12 text-slate-400 text-sm">
                  © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
               </div>
            </footer>

         </main>
      </div>
   );
};

export default Portfolio;