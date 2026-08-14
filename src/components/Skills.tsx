import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Coffee,
  FileCode,
  Hash,
  Database,
  Code2,
  Server,
  Leaf,
  Zap,
  Network,
  Layers,
  Compass,
  Cloud,
  Package,
  FastForward,
  GitBranch,
  PlayCircle,
  Plane,
  Box,
  TestTube,
  Activity,
  Blocks,
  Workflow,
  ShieldCheck,
  BrainCircuit,
  ChevronRight,
  Cpu,
  Lock,
  Search
} from "lucide-react";

const getIconForSkill = (skill: string) => {
  switch (skill) {
    case 'Java': return <Coffee className="w-4 h-4 text-orange-600" />;
    case 'Python': return <FileCode className="w-4 h-4 text-blue-500" />;
    case 'C#': return <Hash className="w-4 h-4 text-purple-600" />;
    case 'SQL': return <Database className="w-4 h-4 text-blue-400" />;
    case 'TypeScript': return <Code2 className="w-4 h-4 text-blue-600" />;

    case 'Spring Boot': return <Leaf className="w-4 h-4 text-green-500" />;
    case 'Spring Security': return <Lock className="w-4 h-4 text-green-600" />;
    case '.NET 10': return <Server className="w-4 h-4 text-purple-500" />;
    case 'FastAPI': return <Zap className="w-4 h-4 text-teal-500" />;
    case 'REST APIs': return <Network className="w-4 h-4 text-gray-500" />;
    case 'JPA/Hibernate': return <Database className="w-4 h-4 text-orange-400" />;
    case 'SignalR': return <Activity className="w-4 h-4 text-pink-500" />;
    case 'Redis/RQ': return <Layers className="w-4 h-4 text-red-500" />;

    case 'PostgreSQL': return <Database className="w-4 h-4 text-blue-600" />;
    case 'MySQL': return <Database className="w-4 h-4 text-orange-500" />;
    case 'Redis': return <Layers className="w-4 h-4 text-red-500" />;
    case 'pgvector': return <Compass className="w-4 h-4 text-indigo-500" />;
    case 'Kafka': return <FastForward className="w-4 h-4 text-black" />;
    case 'Flyway': return <Plane className="w-4 h-4 text-red-500" />;

    case 'JUnit': return <TestTube className="w-4 h-4 text-green-500" />;
    case 'Testcontainers': return <Box className="w-4 h-4 text-blue-400" />;
    case 'JMeter': return <Activity className="w-4 h-4 text-red-600" />;
    case 'k6': return <Activity className="w-4 h-4 text-purple-500" />;
    case 'Prometheus': return <Activity className="w-4 h-4 text-orange-500" />;
    case 'Playwright': return <TestTube className="w-4 h-4 text-green-600" />;
    case 'Grafana': return <Activity className="w-4 h-4 text-orange-400" />;
    case 'Loki': return <Search className="w-4 h-4 text-blue-400" />;

    case 'Docker': return <Package className="w-4 h-4 text-blue-500" />;
    case 'Docker Compose': return <Package className="w-4 h-4 text-blue-600" />;
    case 'Nginx': return <Server className="w-4 h-4 text-green-600" />;
    case 'Git': return <GitBranch className="w-4 h-4 text-orange-600" />;
    case 'GitHub Actions': return <PlayCircle className="w-4 h-4 text-blue-600" />;
    case 'GHCR': return <Package className="w-4 h-4 text-purple-500" />;
    case 'AWS': return <Cloud className="w-4 h-4 text-orange-500" />;

    case 'AI-assisted PR Review': return <BrainCircuit className="w-4 h-4 text-purple-600" />;
    case 'SonarCloud': return <ShieldCheck className="w-4 h-4 text-blue-500" />;
    case 'CodeQL': return <ShieldCheck className="w-4 h-4 text-purple-500" />;
    case 'Trivy': return <ShieldCheck className="w-4 h-4 text-teal-500" />;
    case 'Dependabot': return <ShieldCheck className="w-4 h-4 text-blue-600" />;

    case 'Domain-Driven Design': return <Blocks className="w-4 h-4 text-blue-500" />;
    case 'Event-Driven': return <Workflow className="w-4 h-4 text-green-500" />;
    case 'Transactional Outbox': return <Cpu className="w-4 h-4 text-orange-500" />;
    case 'Hybrid Retrieval': return <Search className="w-4 h-4 text-indigo-500" />;
    case 'RAG': return <BrainCircuit className="w-4 h-4 text-purple-500" />;

    default: return <ChevronRight className="w-4 h-4 text-gray-400" />;
  }
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll('.reveal-init');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('reveal-visible');
              }, index * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const technicalSkills = (portfolioData.personal as any).technicalSkills || {};

  const stats = [
    { number: "30+", label: "ACTIVE STAFF USERS" },
    { number: "5,000", label: "REQ LOAD (0 OVERSELL)" },
    { number: "95.2%", label: "RAG CITATION SCORE" },
    { number: "100%", label: "ESCROW ACCURACY" }
  ];

  return (
    <section ref={containerRef}>
      
      {/* Top Tagline Banner */}
      <div className="bg-canvas py-20 px-6 md:px-12 border-t border-hairline">
        <div className="max-w-6xl mx-auto text-left reveal-init">
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-ink font-display uppercase tracking-tight">
            TURNING <span className="text-accent font-serif italic normal-case">complex systems</span> INTO <span className="whitespace-nowrap">RELIABLE PRODUCTS</span>
          </h2>
        </div>
      </div>

      {/* PROOF OF ENGINEERING Banner */}
      <div className="w-full bg-ink text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-xl uppercase tracking-widest text-gray-400 mb-12 text-center reveal-init">
            PROOF OF ENGINEERING & METRICS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal-init">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-accent font-display text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="font-mono text-xs md:text-sm tracking-widest text-white uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECHNICAL SKILLS MATRIX Section (7 CV Categories) */}
      <div id="skills" className="bg-canvas py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto reveal-init">
          <div className="flex items-center gap-3 mb-16">
            <Cpu className="w-6 h-6 text-blue-600" />
            <h3 className="font-display text-2xl uppercase tracking-widest text-ink">
              TECHNICAL SKILLS MATRIX
            </h3>
          </div>

          <div className="flex flex-col gap-12">
            {Object.entries(technicalSkills).map(([category, items]) => (
              (items as string[]).length > 0 && (
                <div key={category} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 pb-10 border-b border-hairline last:border-0 last:pb-0">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">CATEGORY</span>
                    <span className="font-display text-lg uppercase font-bold text-ink leading-snug">
                      {category}
                    </span>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex flex-wrap gap-2.5">
                      {(items as string[]).map(skill => (
                        <div key={skill} className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-hairline shadow-sm hover:border-blue-600 hover:shadow-md transition-all duration-300">
                          {getIconForSkill(skill)}
                          <span className="text-ink font-medium text-xs md:text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
