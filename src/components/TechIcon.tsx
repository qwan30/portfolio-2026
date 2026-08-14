import React, { useState } from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TECH_ICON_MAP: Record<string, string> = {
  // Languages
  'java': '/tech-stack/Languages/Java.png',
  'python': '/tech-stack/Languages/Python.png',
  'sql': '/tech-stack/Languages/SQL.png',
  'typescript': '/tech-stack/Languages/TypeScript.png',
  'ts': '/tech-stack/Languages/TypeScript.png',

  // Backend
  'spring boot': '/tech-stack/Backend/Spring-Boot.png',
  'spring security': '/tech-stack/Backend/Spring-Security.png',
  'spring': '/tech-stack/Backend/Spring-Boot.png',
  'fastapi': '/tech-stack/Backend/FastAPI.png',
  'jpa/hibernate': '/tech-stack/Backend/JPA-Hibernate.png',
  'hibernate': '/tech-stack/Backend/JPA-Hibernate.png',
  'jpa': '/tech-stack/Backend/JPA-Hibernate.png',
  'rest apis': '/tech-stack/Backend/REST-APIs.png',
  'rest': '/tech-stack/Backend/REST-APIs.png',
  'rest api': '/tech-stack/Backend/REST-APIs.png',
  'redis/rq': '/tech-stack/Backend/Redis-RQ.png',
  'redis / rq': '/tech-stack/Backend/Redis-RQ.png',
  'rq': '/tech-stack/Backend/Redis-RQ.png',

  // Data & Messaging
  'postgresql': '/tech-stack/Data-and-Messaging/PostgreSQL.png',
  'postgres': '/tech-stack/Data-and-Messaging/PostgreSQL.png',
  'mysql': '/tech-stack/Data-and-Messaging/MySQL.png',
  'redis': '/tech-stack/Data-and-Messaging/Redis.png',
  'pgvector': '/tech-stack/Data-and-Messaging/pgvector.png',
  'vector': '/tech-stack/Data-and-Messaging/pgvector.png',
  'kafka': '/tech-stack/Data-and-Messaging/Kafka.png',
  'flyway': '/tech-stack/Data-and-Messaging/Flyway.png',

  // Testing & Observability
  'junit': '/tech-stack/Testing-and-Observability/JUnit.png',
  'junit 5': '/tech-stack/Testing-and-Observability/JUnit.png',
  'testcontainers': '/tech-stack/Testing-and-Observability/Testcontainers.png',
  'testcontainer': '/tech-stack/Testing-and-Observability/Testcontainers.png',
  'jmeter': '/tech-stack/Testing-and-Observability/JMeter.png',
  'k6': '/tech-stack/Testing-and-Observability/k6.png',
  'prometheus': '/tech-stack/Testing-and-Observability/Prometheus.png',
  'playwright': '/tech-stack/Testing-and-Observability/Playwright.png',
  'grafana': '/tech-stack/Testing-and-Observability/Grafana.png',
  'loki': '/tech-stack/Testing-and-Observability/Loki.png',
  'elk': '/tech-stack/Testing-and-Observability/ELK.png',
  'elastic': '/tech-stack/Testing-and-Observability/ELK.png',
  'elasticsearch': '/tech-stack/Testing-and-Observability/ELK.png',

  // DevOps & Cloud
  'docker': '/tech-stack/DevOps-and-Cloud/Docker.png',
  'docker compose': '/tech-stack/DevOps-and-Cloud/Docker-Compose.png',
  'dokploy traefik': '/tech-stack/DevOps-and-Cloud/Dokploy-Traefik.png',
  'dokploy': '/tech-stack/DevOps-and-Cloud/Dokploy.png',
  'traefik': '/tech-stack/DevOps-and-Cloud/Traefik.png',
  'nginx': '/tech-stack/DevOps-and-Cloud/Nginx.png',
  'git': '/tech-stack/DevOps-and-Cloud/Git.png',
  'github actions': '/tech-stack/DevOps-and-Cloud/GitHub-Actions.png',
  'github': '/tech-stack/DevOps-and-Cloud/GitHub-Actions.png',
  'aws': '/tech-stack/DevOps-and-Cloud/AWS.png',

  // Code Quality & Security
  'ai-assisted pr review': '/tech-stack/Code-Quality-and-Security/AI-assisted-PR-Review.png',
  'ai-assisted pr': '/tech-stack/Code-Quality-and-Security/AI-assisted-PR-Review.png',
  'sonarcloud': '/tech-stack/Code-Quality-and-Security/SonarCloud.png',
  'sonar': '/tech-stack/Code-Quality-and-Security/SonarCloud.png',
  'codeql': '/tech-stack/Code-Quality-and-Security/CodeQL.png',
  'trivy': '/tech-stack/Code-Quality-and-Security/Trivy.png',
  'dependabot': '/tech-stack/Code-Quality-and-Security/Dependabot.png',
};

function getIconSrc(name: string): string | null {
  const clean = name.trim().toLowerCase();
  if (TECH_ICON_MAP[clean]) {
    return TECH_ICON_MAP[clean];
  }

  // Find longest matching key
  const match = Object.keys(TECH_ICON_MAP)
    .filter((key) => clean.includes(key))
    .sort((a, b) => b.length - a.length)[0];

  return match ? TECH_ICON_MAP[match] : null;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const [hasError, setHasError] = useState(false);
  const iconSrc = getIconSrc(name);

  if (iconSrc && !hasError) {
    return (
      <img
        src={iconSrc}
        alt={name}
        className={`${className} object-contain inline-block flex-shrink-0 select-none`}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
    );
  }

  const n = name.toLowerCase();

  // React
  if (n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // Next.js
  if (n.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <path d="M9 7.5v9M15 7.5v9M9.5 8l7 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // NestJS
  if (n.includes('nest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#E0234E" />
        <path d="M12 6c-3 3-3 8 0 12 1-3 3-5 5-6-2-2-4-4-5-6z" fill="white" />
      </svg>
    );
  }

  // Flutter
  if (n.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3L6 10.5l4.5 4.5L18 7.5 13.5 3z" fill="#02569B" />
        <path d="M10.5 15l3 3 4.5-4.5-3-3-4.5 4.5z" fill="#0175C2" />
        <path d="M13.5 18l3 3h4.5l-5.25-5.25-2.25 2.25z" fill="#29B6F6" />
      </svg>
    );
  }

  // .NET / C#
  if (n.includes('.net') || n.includes('c#')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#512BD4" />
        <path d="M7 8h3v8H7zm7 0h3v8h-3z" fill="white" />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.5" />
      <path d="M8 12h8M12 8v8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default TechIcon;
