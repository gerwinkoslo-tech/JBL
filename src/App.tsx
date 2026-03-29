/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  ExternalLink,
  FileText,
  Calendar,
  Database,
  Headphones,
  ArrowRight
} from "lucide-react";
import { cn } from "./lib/utils";

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/60 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 bg-neon-green mx-auto mt-6 rounded-full"
    />
  </div>
);

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("glass-card p-6 md:p-8 hover:bg-white/10 transition-all duration-300", className)}>
    {children}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          JBL<span className="text-neon-green">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-neon-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="neon-button py-2 px-6 text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white/70"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="neon-button text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-height-[100vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jeremie B. <br />
            <span className="text-neon-green">Lumocso</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-medium">
            Virtual Assistant | Administrative Support Specialist
          </p>
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Reliable, detail-oriented support to keep your business running smoothly. I specialize in streamlining workflows and managing administrative tasks with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="neon-button flex items-center gap-2">
              Hire Me <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="outline-button">
              View Portfolio
            </a>
          </div>

          <div className="mt-12 flex gap-8 items-center">
            <div>
              <p className="text-3xl font-bold text-neon-green">2+</p>
              <p className="text-sm text-white/40 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-neon-green">100%</p>
              <p className="text-sm text-white/40 uppercase tracking-wider">Reliability</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
            {/* Placeholder for Jeremie's Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
            <div className="absolute -inset-4 bg-neon-green/20 rounded-full blur-3xl -z-10 animate-pulse" />
            
            {/* 
              IMPORTANT: This is where the user's photo should be placed.
              The user requested to extract ONLY the central person and remove the background.
            */}
            <img 
              src="https://drive.google.com/uc?export=view&id=15IDfc8KWt7BwOWNcEikcbWWF7In7uXul"
              alt="Jeremie B. Lumocso" 
              className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Floating Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card py-2 px-4 border-neon-green/30"
            >
              <p className="text-xs font-bold text-neon-green">Admin Specialist</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -left-8 glass-card py-2 px-4 border-neon-green/30"
            >
              <p className="text-xs font-bold text-neon-green">2+ Years Exp.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="A quick look into my professional DNA and work approach.">
          Professional Summary
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-neon-green">My Approach</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I am a dedicated Administrative Support Specialist with a passion for organization and efficiency. With over 2 years of experience in both virtual and on-site administrative roles, I have developed a keen eye for detail and a proactive approach to problem-solving.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                My goal is to alleviate the administrative burden from business owners and professionals, allowing them to focus on their core objectives. I pride myself on being reliable, communicative, and adaptable to various business needs and tools.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-neon-green mt-1" size={20} />
                  <div>
                    <p className="font-bold">Detail-Oriented</p>
                    <p className="text-sm text-white/50">Precision in every task</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-neon-green mt-1" size={20} />
                  <div>
                    <p className="font-bold">Proactive</p>
                    <p className="text-sm text-white/50">Anticipating needs</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="border-neon-green/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-neon-green/10 text-neon-green">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-bold text-xl">Expertise</h4>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-neon-green" /> Admin Support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-neon-green" /> Virtual Assistance</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-neon-green" /> Data Management</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-neon-green/10 text-neon-green">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-xl">Commitment</h4>
              </div>
              <p className="text-white/60 text-sm">
                Committed to delivering high-quality results within deadlines, ensuring your business operations remain seamless.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Administrative Support",
      description: "Comprehensive support including documentation, scheduling, and detailed reporting to keep your operations organized.",
      icon: <FileText size={32} />,
      tools: ["MS Excel", "MS Word", "Google Docs"]
    },
    {
      title: "Virtual Assistance",
      description: "Efficient email management, calendar coordination, and day-to-day task handling to free up your valuable time.",
      icon: <Calendar size={32} />,
      tools: ["Google Workspace", "Outlook", "Slack"]
    },
    {
      title: "Data Entry & Research",
      description: "Accurate data handling, entry, and thorough web research to provide you with actionable insights and clean databases.",
      icon: <Database size={32} />,
      tools: ["Google Sheets", "Excel", "Web Research"]
    },
    {
      title: "Customer Support",
      description: "Professional communication via chat and email, ensuring your customers receive timely and helpful responses.",
      icon: <Headphones size={32} />,
      tools: ["Email", "Chat Tools", "CRM Basics"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Tailored solutions to streamline your business and boost productivity.">
          My Services
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col group hover:border-neon-green/40">
                <div className="text-neon-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map(tool => (
                      <span key={tool} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 text-white/80">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Executive Calendar Management",
      description: "Streamlined scheduling for a busy executive, reducing meeting conflicts by 40%.",
      problem: "Disorganized schedule leading to missed opportunities.",
      task: "Audit current calendar and implement a strict booking system.",
      result: "100% attendance rate and improved time management.",
      tags: ["Scheduling", "Admin"]
    },
    {
      title: "Data Migration & Cleanup",
      description: "Cleaned and migrated a database of 5,000+ entries for a retail client.",
      problem: "Duplicate and outdated customer records causing marketing errors.",
      task: "Deduplicate data and verify contact information.",
      result: "25% increase in email marketing engagement.",
      tags: ["Data Entry", "Excel"]
    },
    {
      title: "Workflow Documentation",
      description: "Created a comprehensive SOP manual for a remote startup team.",
      problem: "Lack of clear processes leading to inconsistent output.",
      task: "Interview team members and document step-by-step workflows.",
      result: "Reduced onboarding time for new hires by 50%.",
      tags: ["Documentation", "SOP"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="A showcase of administrative excellence and successful task completions.">
          Featured Portfolio
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col group">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-neon-green transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6">{project.description}</p>
                
                <div className="space-y-4 mt-auto pt-6 border-t border-white/5">
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase">Problem</p>
                    <p className="text-xs text-white/80">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase">Task</p>
                    <p className="text-xs text-white/80">{project.task}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neon-green uppercase">Result</p>
                    <p className="text-xs text-neon-green/80 font-medium">{project.result}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Administrative Assistant",
      company: "DSWD Region 7",
      period: "March 2025 – September 2025",
      points: [
        "Managed documentation and filing systems for regional projects.",
        "Coordinated with various departments for report consolidation.",
        "Assisted in organizing regional events and meetings."
      ]
    },
    {
      role: "Virtual Assistant",
      company: "Freelance / Remote",
      period: "May 2023 – December 2024",
      points: [
        "Provided executive-level support to international clients.",
        "Handled email correspondence and calendar management.",
        "Conducted market research and data entry tasks with high accuracy."
      ]
    },
    {
      role: "Service Crew",
      company: "Mang Inasal",
      period: "June 2019 – December 2019",
      points: [
        "Developed strong communication and customer service skills.",
        "Managed fast-paced tasks and team collaboration.",
        "Ensured high standards of service and operational efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My professional journey and the roles that shaped my expertise.">
          Work Experience
        </SectionHeading>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-ml-px" />
              
              <div className={cn(
                "md:w-[calc(50%-2rem)]",
                index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
              )}>
                <div className={cn(
                  "absolute left-0 top-2 w-4 h-4 rounded-full bg-neon-green border-4 border-charcoal md:left-1/2 md:-ml-2",
                  "shadow-[0_0_10px_rgba(78,255,138,0.5)]"
                )} />
                
                <GlassCard className="relative">
                  <p className="text-neon-green font-bold text-sm mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-white/50 text-sm mb-4">{exp.company}</p>
                  <ul className={cn(
                    "space-y-2 text-sm text-white/70",
                    index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""
                  )}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {index % 2 !== 0 && <ChevronRight size={14} className="text-neon-green mt-1 shrink-0" />}
                        <span>{point}</span>
                        {index % 2 === 0 && <ChevronRight size={14} className="text-neon-green mt-1 shrink-0 hidden md:block" />}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const items = [
    {
      title: "Bachelor of Secondary Education",
      institution: "Cebu Normal University",
      period: "2021 – 2025",
      icon: <GraduationCap size={24} />
    },
    {
      title: "Web Development Masterclass",
      institution: "YouAccel",
      period: "2024",
      icon: <Award size={24} />
    },
    {
      title: "HTML Certification",
      institution: "YouAccel",
      period: "2025",
      icon: <Award size={24} />
    },
    {
      title: "Domain & Hosting Certification",
      institution: "YouAccel",
      period: "2025",
      icon: <Award size={24} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Academic background and professional certifications.">
          Education & Certs
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="text-neon-green mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/50 text-xs mb-2">{item.institution}</p>
                <p className="text-neon-green/80 text-[10px] font-bold uppercase tracking-widest">{item.period}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const technical = ["MS Office (Excel, Word)", "Google Workspace", "Data Entry", "Documentation", "Web Research", "Basic Web Dev"];
  const soft = ["Communication", "Time Management", "Adaptability", "Team Collaboration", "Problem Solving", "Reliability"];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="The tools and traits I bring to every project.">
          Skills & Expertise
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-neon-green" /> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technical.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:border-neon-green/40 hover:bg-neon-green/5 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-neon-green" /> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map(skill => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:border-neon-green/40 hover:bg-neon-green/5 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // @ts-ignore - EmailJS is loaded via script tag
    if (window.emailjs) {
      // @ts-ignore
      window.emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current)
        .then(() => {
          alert("Message sent successfully!");
          formRef.current?.reset();
          setIsSubmitting(false);
        }, (error: any) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again or email directly.");
          setIsSubmitting(false);
        });
    } else {
      alert("Email service not ready. Please try again in a moment.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Ready to streamline your business? Let's discuss how I can help.">
          Get In Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's work together</h3>
            <p className="text-white/60 mb-10 text-lg">
              Whether you need long-term administrative support or help with a one-time project, I'm here to help you succeed.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-neon-green/10 text-neon-green">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Email Me</p>
                  <a href="mailto:lympayne@gmail.com" className="text-lg font-medium hover:text-neon-green transition-colors">
                    lympayne@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-neon-green/10 text-neon-green">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Call Me</p>
                  <p className="text-lg font-medium">+63 985 834 4342</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-neon-green/10 text-neon-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Location</p>
                  <p className="text-lg font-medium">Cebu City, Philippines</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/60">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/60">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/60">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="neon-button w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={18} />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
      <p className="text-white/40 text-sm">
        © {new Date().getFullYear()} Jeremie B. Lumocso. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-white/40 hover:text-neon-green transition-colors">Privacy Policy</a>
        <a href="#" className="text-white/40 hover:text-neon-green transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  useEffect(() => {
    // Initialize EmailJS
    // @ts-ignore
    if (window.emailjs) {
      // @ts-ignore
      window.emailjs.init("YOUR_PUBLIC_KEY");
    }
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky Hire Me Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="#contact" className="neon-button shadow-2xl flex items-center gap-2 px-6">
          Hire Me <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
