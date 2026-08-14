# Portfolio Recruiter-First Redesign V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio from a long technical showcase into a recruiter-first software engineering portfolio with progressive disclosure, clean English copy, 4 featured horizontal project cards, compact secondary project grid, interactive technical case-study modal, streamlined supporting sections (Engineering Focus, 3-tier Skills, compact About, compact Certifications, Beyond Code), and correct repository button handling (Vijaco & Aivora without GitHub buttons; public projects linked to `https://github.com/qwan30/...`).

**Architecture:** Component-driven Vite + React 19 + Tailwind CSS v4 architecture with decoupled, strongly typed data layer in `src/data/portfolioData.ts`, modular UI sections (`Navbar`, `Hero`, `FeaturedProjects`, `MoreProjects`, `EngineeringFocus`, `Skills`, `About`, `BeyondCode`, `ContactModal`, `CaseStudyModal`, `ImageLightbox`, `Footer`), accessible dialogs, and smooth performance-optimized rendering.

**Tech Stack:** React 19, TypeScript 6, Vite 8, Tailwind CSS v4, Lucide React.

---

## Global Constraints

- Use English consistently across all UI labels, metadata, captions, and descriptions (no Vietnamese UI strings like "Bấm để phóng to", "Sao chép", "Đã chép", "Gửi Mail").
- Vijaco and Aivora must NOT display GitHub / source repository buttons.
- Public projects must link to their respective repositories under `https://github.com/qwan30`.
- Preserve the signature aesthetic: warm beige canvas (`bg-canvas`), bold editorial display typography (`Anton`), serif accents (`Playfair Display`), blue primary accent, pastel project category badges, terminal motif, rounded project surfaces, architecture and benchmark visuals.
- Resume button must link directly to `/Tran_Thanh_Quan_Java_Software_Engineer_Kms.pdf`.
- Exactly 4 featured projects on homepage (Vijaco, Flash Sale Concurrency Engine, Hospital Management System, AI Hospital Knowledge Assistant), 120-180 words each, 3 engineered decisions, proof chips, max 6 tech badges, max 4 visible images (1 primary + 3 thumbnails).
- Technical depth lives in the rich Case Study modal / drawer.
- Direct push to master without branch as requested by user.

---

## Task Decomposition

### Task 1: Data Architecture & English Content Normalization (`portfolioData.ts`)

**Files:**
- Modify: `src/data/portfolioData.ts`

- [ ] Step 1: Define TypeScript interfaces for `FeaturedProjectItem`, `SecondaryProjectItem`, `CaseStudyDetail`, `EngineeredDecision`, `ProofChip`, `EngineeringFocusArea`, `CertificationItem`, and `PersonalData`.
- [ ] Step 2: Rewrite project copy to concise English meeting the 120-180 word budget for featured cards, with exactly 3 engineered decisions each (`Technique → Mechanism → Engineering Property`).
- [ ] Step 3: Configure repository links (`githubUrl: undefined` for Vijaco & Aivora; public GitHub URLs for all other projects).
- [ ] Step 4: Add structured data for 4 Engineering Focus areas, 3-tier Technical Skills matrix, compact Certifications with credentials, and Beyond Code activity.
- [ ] Step 5: Verify types with `npm run build`.

### Task 2: Top Navigation & Hero Section (`Navbar`, `Hero.tsx`)

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Hero.tsx`

- [ ] Step 1: Update desktop and mobile navigation in `src/App.tsx` to `Projects · Engineering · Skills · About · Resume · Contact` with direct link to `/Tran_Thanh_Quan_Java_Software_Engineer_Kms.pdf`.
- [ ] Step 2: Refactor `src/components/Hero.tsx` to include the standard eyebrow (`SOFTWARE ENGINEERING · BACKEND & SYSTEMS`), identity (`Tran Thanh Quan`), primary statement (`I BUILD RELIABLE SYSTEMS.`), supporting statement, CTAs (`View Engineering Work`, `Resume`, `GitHub`), clean 5-line technical terminal, and 3-item proof strip.
- [ ] Step 3: Run `npm run build` to verify compilation.

### Task 3: Selected Engineering Work — 4 Featured Project Cards (`Projects.tsx`)

**Files:**
- Modify: `src/components/Projects.tsx`

- [ ] Step 1: Build the 4 featured horizontal project cards (`Vijaco`, `Flash Sale Concurrency Engine`, `Enterprise Hospital Management System`, `AI Hospital Knowledge Assistant`) using the 55% story / 45% visual layout.
- [ ] Step 2: Enforce the 120-180 word budget, 3 engineered decisions, 2-3 proof chips, max 6 tech badges, and action buttons (`Read Case Study →`, `Live` if applicable, `Source` only if public repo).
- [ ] Step 3: Implement 1 primary visual + max 3 thumbnails (max 4 visible images per card) with interactive thumbnail switching and high-res lightbox trigger.
- [ ] Step 4: Run `npm run build` to verify layout.

### Task 4: More Engineering Work — Compact Project Grid (`MoreProjects.tsx`)

**Files:**
- Create: `src/components/MoreProjects.tsx`
- Modify: `src/App.tsx`

- [ ] Step 1: Implement the compact project grid for secondary projects (`Aivora` [no github button], `Ledger Credit System`, `Mini Digital Banking Platform`, `Inventory & Flash Sale System [Prototype]`).
- [ ] Step 2: Ensure compact cards display title, category, one-line thesis, 1 representative visual, 3-5 tech badges, 1 proof chip, `Read Case Study →`, and GitHub button if public.
- [ ] Step 3: Run `npm run build` to verify.

### Task 5: Deep Technical Case Study Modal & Image Lightbox (`CaseStudyModal.tsx`, `ImageLightbox.tsx`)

**Files:**
- Create: `src/components/CaseStudyModal.tsx`
- Create: `src/components/ImageLightbox.tsx`
- Modify: `src/App.tsx`

- [ ] Step 1: Build `CaseStudyModal.tsx` covering all technical depth sections (Executive Summary, Constraints, Architecture, Decisions, Trade-offs & Failure Modes, Testing/Benchmarks, Observability, Outcomes, Evidence Gallery, Links).
- [ ] Step 2: Build `ImageLightbox.tsx` with smooth zoom, keyboard escape, caption, and backdrop blur.
- [ ] Step 3: Connect all featured and secondary project cards to open the Case Study modal and Lightbox.
- [ ] Step 4: Run `npm run build` to test modal interactions.

### Task 6: Supporting Sections (`EngineeringFocus.tsx`, `Skills.tsx`, `About.tsx`, `Certifications.tsx`, `Activities.tsx`, `Footer.tsx`)

**Files:**
- Create: `src/components/EngineeringFocus.tsx`
- Modify: `src/components/Skills.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Activities.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] Step 1: Replace Expertise with `EngineeringFocus.tsx` (Backend Systems, Concurrency & Reliability, Delivery & Operations, Applied AI) with direct links to representative projects.
- [ ] Step 2: Refactor `Skills.tsx` into 3 clean tiers: Core Backend (8-10 items), Systems & Delivery (6-8 items), Applied AI (4-6 items).
- [ ] Step 3: Refactor `About.tsx` into a compact background card with education (FPT University, GPA 8.0/10) and summary (~1 viewport height max).
- [ ] Step 4: Add compact credential cards in Certifications with interactive modal view for certificate images.
- [ ] Step 5: Refactor `Activities.tsx` into compact Beyond Code section (Tết Luôn Vui fundraising project, 3 compact images).
- [ ] Step 6: Refactor Contact modal in `App.tsx` and Footer banner in `Footer.tsx` to 100% English.
- [ ] Step 7: Run `npm run build` to verify.

### Task 7: SEO, Accessibility & Verification

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

- [ ] Step 1: Update `index.html` metadata, title, and open-graph tags in English.
- [ ] Step 2: Ensure responsive breakpoints, touch target sizing, and accessibility standards.
- [ ] Step 3: Run `npm run build` and `npm run lint`.

### Task 8: Direct Git Push to Master

- [ ] Step 1: Check git status and diff.
- [ ] Step 2: `git add .` and `git commit -m "feat: portfolio recruiter-first redesign v2"`.
- [ ] Step 3: `git push origin master`.
