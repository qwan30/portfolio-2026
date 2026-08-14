import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const n = name.toLowerCase();

  // Java
  if (n.includes('java')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M8.85 17.84s-.89.53.63.7c1.84.21 2.89.18 5.01-.22 0 0 .73.46 1.54.85-4.44 1.83-9.57.3-7.18-1.33zm-.57-2.61s-1.03.74.51.93c2.19.27 3.96.25 7.42-.37 0 0 .52.36 1.09.62-5.46 1.94-11.96.65-9.02-1.18zm8.68-4.47c1.06 1.22.42 2.45-.63 3.42-.99.91-2.31 1.4-3.63 1.83-1.63.53-3.34.82-5.06.87-.27 0-.58-.02-.8-.18-.28-.21-.26-.64-.09-.94.3-.54.86-.91 1.41-1.22 2.68-1.52 5.8-1.89 8.8-3.78zm-4.78-7.76c.44.83.21 1.86-.18 2.72-.47 1.04-1.16 1.96-1.89 2.84-.28.34-.6.67-.79 1.07-.3.62-.2 1.4.26 1.92.51.57 1.3.83 2.05.99 1.46.31 2.97.35 4.45.15.28-.04.57-.1.84-.2.27-.1.49-.31.6-.58.17-.43.08-.94-.18-1.31-.38-.54-.99-.87-1.58-1.16-1.5-74-2.88-1.69-3.58-3.44zm8.64 12.82c-.39 0-.74-.08-1.07-.22 2.87-2.52 1.34-5.32-1.02-7.29.56 1.04.81 2.3.43 3.45-.33 1-.99 1.87-1.81 2.54 2.83.61 4.54 1.44 3.47 1.52zm-15.65 3.3c3.42.41 7.22.37 10.59-.44 1.05-.25 2.1-.59 3.09-1.04.28-.13.56-.28.84-.42.23.41.4.87.5 1.34-1.23.63-2.54 1.13-3.89 1.49-3.77 1.01-7.85.9-11.63-.32-.23-.07-.47-.16-.67-.28.18-.32.33-.67.47-1.03.27.23.49.46.7.7z"
          fill="#E76F00"
        />
        <path
          d="M12.18 3c.78 1.47.38 3.3-.41 4.79-.8 1.5-1.92 2.8-3.04 4.09-.45.52-.94 1.03-1.29 1.63-.53.92-.56 2.1.04 2.95.74 1.04 1.99 1.55 3.23 1.82 2.37.52 4.84.45 7.23-.1.42-.1.85-.23 1.25-.43.37-.19.67-.5.8-.9.19-.59.04-1.28-.35-1.76-.55-.68-1.42-1.09-2.27-1.44-2.25-93-4.22-2.18-5.19-4.65z"
          fill="#5382A1"
        />
      </svg>
    );
  }

  // Python
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.92 2c-5.26 0-4.94 2.28-4.94 2.28l.01 2.37h5.03v.71H4.96S2 7.02 2 12.3c0 5.28 2.58 5.17 2.58 5.17h1.54v-2.16s-.08-2.58 2.53-2.58h4.94s2.42.04 2.42-2.36V4.46S16.48 2 11.92 2zm-2.7 1.54c.48 0 .87.39.87.87s-.39.87-.87.87-.87-.39-.87-.87.39-.87.87-.87z"
          fill="#3776AB"
        />
        <path
          d="M12.08 22c5.26 0 4.94-2.28 4.94-2.28l-.01-2.37h-5.03v-.71h7.06S22 16.98 22 11.7c0-5.28-2.58-5.17-2.58-5.17h-1.54v2.16s.08 2.58-2.53 2.58h-4.94s-2.42-.04-2.42 2.36v7.91s-.41 2.46 4.09 2.46zm2.7-1.54c-.48 0-.87-.39-.87-.87s.39-.87.87-.87.87.39.87.87-.39.87-.87.87z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // TypeScript
  if (n.includes('typescript') || n === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M3 3h18v18H3V3zm8.5 7.5H6.5v2h1.5v6.5h2V12.5h1.5v-2zm7 3.5c-.3-.8-.9-1.4-1.8-1.7-.5-.2-1.3-.4-2-.6-.5-.1-.8-.3-1-.5-.2-.2-.2-.4-.2-.6 0-.3.1-.5.4-.7.3-.2.7-.3 1.2-.3.5 0 .9.1 1.2.3.3.2.5.5.6.9h2c-.1-.8-.5-1.5-1.1-2-.6-.5-1.5-.7-2.7-.7-1.1 0-2 .3-2.6.8-.6.5-.9 1.2-.9 2 0 .6.2 1.1.6 1.5.4.4 1.1.7 2 .9.6.1 1.1.3 1.4.5.3.2.4.5.4.8 0 .4-.1.7-.4.9-.3.2-.8.3-1.4.3-.6 0-1.1-.1-1.5-.4-.4-.3-.6-.7-.7-1.3H11c.1 1 .5 1.8 1.2 2.3.7.5 1.7.8 2.9.8 1.2 0 2.1-.3 2.8-.8.7-.5 1-1.3 1-2.2 0-.8-.2-1.3-.4-1.7z"
          fill="white"
        />
      </svg>
    );
  }

  // SQL
  if (n === 'sql' || n.includes('sql server')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          d="M5 9c0-1.66 3.13-3 7-3s7 1.34 7 3-3.13 3-7 3-7-1.34-7-3zm0 3c0 1.66 3.13 3 7 3s7-1.34 7-3v2c0 1.66-3.13 3-7 3s-7-1.34-7-3v-2zm0 4c0 1.66 3.13 3 7 3s7-1.34 7-3v2c0 1.66-3.13 3-7 3s-7-1.34-7-3v-2z"
          fill="white"
        />
      </svg>
    );
  }

  // Spring Security
  if (n.includes('spring security')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"
          fill="#6DB33F"
        />
        <path
          d="M12 8a2.5 2.5 0 0 0-2.5 2.5V12h-.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1.5A2.5 2.5 0 0 0 12 8zm1 4h-2v-1.5a1 1 0 0 1 2 0V12z"
          fill="white"
        />
      </svg>
    );
  }

  // Spring / Spring Boot
  if (n.includes('spring')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.57 9.87c-.52-3.87-3.83-6.93-7.82-7.18-4.32-.27-8.15 2.76-8.89 7.03-.49 2.82.46 5.58 2.45 7.43l-3.23 3.23c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l3.32-3.32c2.04 1.42 4.6 1.93 7.07 1.34 4.05-.97 7.09-4.48 7.37-8.64.04-.44-.31-.8-.75-.8-.41 0-.74.31-.77.72-.25 3.51-2.82 6.47-6.24 7.29-2.09.5-4.25.07-5.97-1.13l3.69-3.69c1.95-1.95 2.46-4.88 1.25-7.36-.2-.41-.7-.57-1.11-.37-.41.2-.57.7-.37 1.11.96 1.97.55 4.31-1.01 5.87l-3.64 3.64c-1.58-1.49-2.34-3.69-1.95-5.94.61-3.5 3.75-5.98 7.29-5.76 3.27.2 5.98 2.71 6.41 5.88.06.44.45.75.89.69.43-.06.74-.45.68-.89z"
          fill="#6DB33F"
        />
        <path
          d="M12.44 11.56c-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41z"
          fill="#6DB33F"
        />
      </svg>
    );
  }

  // FastAPI
  if (n.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path
          d="M13.5 4L7 13.5H12L10.5 20L17 10.5H12L13.5 4Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // JPA / Hibernate
  if (n.includes('hibernate') || n.includes('jpa')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#59666C" />
        <path
          d="M7 6v12h2.5v-4.5h5V18H17V6h-2.5v5h-5V6H7z"
          fill="#BCAE79"
        />
      </svg>
    );
  }

  // REST APIs
  if (n.includes('rest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2563EB" />
        <path
          d="M6 12h12M14 8l4 4-4 4M10 16l-4-4 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M17.47 7.78c-.28-.7-.71-1.32-1.26-1.82-.77-.7-1.75-1.13-2.8-1.23-.74-.07-1.48.04-2.17.33-.8.34-1.49.88-2.02 1.57-.74.96-1.16 2.14-1.21 3.36-.05 1.17.26 2.33.88 3.32.48.77 1.14 1.4 1.93 1.84.45.25.95.42 1.46.5.76.12 1.54.04 2.26-.24.78-.3 1.46-.79 2-1.42.66-.77 1.1-1.69 1.29-2.68.14-.73.12-1.48-.05-2.2-.1-.44-.26-.87-.47-1.27v-.06z"
          fill="#336791"
        />
        <circle cx="12" cy="12" r="9.5" stroke="#336791" strokeWidth="1.5" />
      </svg>
    );
  }

  // MySQL
  if (n.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.72 13.57c-.42-.81-1.07-1.48-1.87-1.92-.81-.44-1.74-.63-2.66-.54-.62.06-1.22.25-1.76.56-.54.31-.99.74-1.32 1.25-.43.66-.67 1.43-.69 2.22-.02.79.18 1.57.57 2.25.39.68.96 1.23 1.64 1.59.68.36 1.46.51 2.24.43.78-.08 1.52-.38 2.14-.86.62-.48 1.09-1.12 1.36-1.85.27-.73.32-1.52.15-2.28-.08-.3-.22-.59-.4-.85v-.06z"
          fill="#00758F"
        />
        <path
          d="M6.5 15.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="#F29111"
        />
      </svg>
    );
  }

  // Redis / Redis RQ
  if (n.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.5 8.5L12 3.5 2.5 8.5 12 13.5l9.5-5zM2.5 11.5l9.5 5 9.5-5v3l-9.5 5-9.5-5v-3zM2.5 15.5l9.5 5 9.5-5v3l-9.5 5-9.5-5v-3z"
          fill="#DC382D"
        />
      </svg>
    );
  }

  // pgvector
  if (n.includes('pgvector') || n.includes('vector')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#3B82F6" />
        <path
          d="M12 6v12m-6-6h12m-9.5-3.5l7 7m0-7l-7 7"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Kafka
  if (n.includes('kafka')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#231F20" />
        <path
          d="M13 16.5v-2.18c2.14-.42 3.75-2.31 3.75-4.57 0-2.26-1.61-4.15-3.75-4.57V3c3.39.49 6 3.39 6 6.9s-2.61 6.41-6 6.9zM11 7.5v9h-2v-9h2z"
          fill="white"
        />
      </svg>
    );
  }

  // Flyway
  if (n.includes('flyway')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#CC0000" />
        <path
          d="M7 16l4-8h2l4 8h-2.5l-.8-2h-3.4l-.8 2H7zm4.2-3.8h2.6L12.5 10l-1.3 2.2z"
          fill="white"
        />
      </svg>
    );
  }

  // JUnit
  if (n.includes('junit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#25A162" />
        <path
          d="M8.5 7h2v6.5a2 2 0 0 1-4 0v-1h2v1a.5.5 0 0 0 1 0V7zm7 0h2v6.5a2 2 0 0 1-4 0V7h2v6.5a.5.5 0 0 0 1 0V7z"
          fill="white"
        />
      </svg>
    );
  }

  // Testcontainers
  if (n.includes('testcontainer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1B81C4" />
        <path
          d="M6 7h12v3H6V7zm0 4h12v3H6v-3zm0 4h12v3H6v-3z"
          fill="white"
        />
      </svg>
    );
  }

  // JMeter
  if (n.includes('jmeter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#D22128" />
        <path
          d="M6 13l3-4 3 4 3-5 3 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // k6
  if (n.includes('k6')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#7D64FF" />
        <path
          d="M7 6v12h2.5v-4.5L13 18h3.5l-4.5-6 4-6H13l-3.5 5V6H7z"
          fill="white"
        />
      </svg>
    );
  }

  // Prometheus
  if (n.includes('prometheus')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#E6522C" />
        <path
          d="M12 5c-1.5 2.5-3 5-3 8a3 3 0 0 0 6 0c0-3-1.5-5.5-3-8z"
          fill="white"
        />
      </svg>
    );
  }

  // Playwright
  if (n.includes('playwright')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M16.5 4.5C14.01 4.5 12 6.51 12 9c0 .74.18 1.44.5 2.06L7.5 16.06c-.62-.32-1.32-.5-2.06-.5-2.49 0-4.5 2.01-4.5 4.5S2.95 24.5 5.44 24.5s4.5-2.01 4.5-4.5c0-.74-.18-1.44-.5-2.06l5-5c.62.32 1.32.5 2.06.5 2.49 0 4.5-2.01 4.5-4.5s-2.01-4.44-4.5-4.44z"
          fill="#2EAD33"
        />
        <path
          d="M17.5 3.5C15.01 3.5 13 5.51 13 8c0 .74.18 1.44.5 2.06l-4 4c-.62-.32-1.32-.5-2.06-.5-2.49 0-4.5 2.01-4.5 4.5S4.95 22.5 7.44 22.5s4.5-2.01 4.5-4.5c0-.74-.18-1.44-.5-2.06l4-4c.62.32 1.32.5 2.06.5 2.49 0 4.5-2.01 4.5-4.5S19.99 3.5 17.5 3.5z"
          fill="#C03A62"
          opacity="0.85"
        />
      </svg>
    );
  }

  // Grafana
  if (n.includes('grafana')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F46800" />
        <path
          d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          fill="white"
        />
      </svg>
    );
  }

  // Loki
  if (n.includes('loki')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F46800" />
        <path
          d="M6 18h12M9 14l3-6 3 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ELK
  if (n.includes('elk') || n.includes('elastic')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#005571" />
        <path
          d="M6 12h12M12 6v12"
          stroke="#FED10A"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Docker Compose
  if (n.includes('docker compose')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#2496ED" />
        <path
          d="M6 6h4v4H6V6zm8 0h4v4h-4V6zm-8 8h4v4H6v-4zm8 0h4v4h-4v-4z"
          fill="white"
        />
      </svg>
    );
  }

  // Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22.5 10.5c-.32-.23-.84-.33-1.42-.2-.17-.74-.6-1.37-1.25-1.8-.4-.27-.87-.42-1.35-.44-.06-.5-.28-.97-.62-1.34-.45-.49-1.07-.78-1.73-.82h-1.44v2.79H13V6H10.3v2.69H7.6V6H4.9v5.39H2.2c-.44.75-.58 1.63-.39 2.48.27 1.2 1.06 2.21 2.15 2.76 2.47 1.25 5.37 1.6 8.12 1 2.66-.58 5.04-2.07 6.69-4.18.98-.13 1.89-.58 2.58-1.26.54-.53.88-1.22.98-1.96.06-.48.01-.96-.17-1.41l-.06-.11zM7.6 11.39H4.9V8.69H7.6v2.7zm2.7 0H7.6V8.69h2.7v2.7zm2.7 0h-2.7V8.69H13v2.7zm2.7 0H13V8.69h2.7v2.7zm2.7 0h-2.7V8.69h2.7v2.7z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // Dokploy Traefik
  if (n.includes('dokploy') || n.includes('traefik')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#24A1C1" />
        <path
          d="M7 9l5-3 5 3v6l-5 3-5-3V9zm5 2l3-1.8-3-1.8-3 1.8 3 1.8z"
          fill="white"
        />
      </svg>
    );
  }

  // Nginx
  if (n.includes('nginx')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7.78v11.55L12 22l10-2.67V7.78L12 2zm6.5 13.91l-2.45-3.69v3.69h-2.1V8.09h2.1l2.45 3.69V8.09h2.1v7.82h-2.1z"
          fill="#009639"
        />
      </svg>
    );
  }

  // Git
  if (n === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F05032" />
        <path
          d="M8 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-2v-2a2 2 0 0 1 2-2h4m-6 6h6"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // GitHub Actions
  if (n.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2088FF" />
        <path
          d="M8.5 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-7-2v-3a2 2 0 0 1 2-2h3m-5 7h5"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // AWS
  if (n.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path
          d="M7.5 15c2.5 1.5 6.5 1.5 9 0m-8.5-4.5L10 6l2 4.5m-3-1.5h2m2.5 1.5l1.5-4.5 1.5 4.5m-2.5-1.5h2"
          stroke="#FF9900"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // AI-assisted PR Review
  if (n.includes('pr review') || n.includes('ai-assisted')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#8B5CF6" />
        <path
          d="M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-10-8v8m10-2l-6 4"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // SonarCloud
  if (n.includes('sonar')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FD5A24" />
        <path
          d="M7 16a6 6 0 0 1 0-8m3.5 6.5a3.5 3.5 0 0 1 0-5m3.5 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // CodeQL
  if (n.includes('codeql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#3B82F6" />
        <path
          d="M10 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.5 1l3.5 3.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Trivy
  if (n.includes('trivy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#199DE5" />
        <path
          d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6zm0 2.5l4 2.3-4 2.3-4-2.3 4-2.3z"
          fill="white"
        />
      </svg>
    );
  }

  // Dependabot
  if (n.includes('dependabot')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#02569B" />
        <path
          d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9zm2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2-4v1m0 8v1"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#4B5563" strokeWidth="2" />
      <path d="M7 12h10M12 7v10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default TechIcon;
