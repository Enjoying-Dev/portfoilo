import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://linkedin.com/in/", 
    pdf: "./resume.pdf",
  },
  personal: {
    name: "Mark Yamato",
    title: "Senior Backend Engineer | AI Infrastructure & Microservices | Golang, AWS, Kubernetes",
    headline: "Golang · AWS · Kubernetes · Distributed Systems · AI/ML Integration",
    avatar: "./avatar.jpg",
    summary:
      "Senior Backend Engineer with 7+ years building high-performance distributed systems and scaling platforms from startup to enterprise. Specialized in Golang microservices, database optimization, and production AI integration—pioneered GPT-3 deployment in 2021 before ChatGPT existed. Delivered critical infrastructure during high-stakes scenarios: sustained system stability through WeWork's 2,400-person layoff and BetterHelp's 300% COVID-19 traffic surge. Combines deep technical execution with business impact, reducing operational costs 40-70% while maintaining 99.9%+ uptime across systems serving millions of users.",
    contact: {
      email: "mrmarkg101@gmail.com",
      phone: "+1 727 339 0767",
      location: "Tokyo, Japan",
      socials: [
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/mark-yamato/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Architected end-to-end multi-LLM gateway reducing client expenses by 70%",
    "Pioneered GPT-3 deployment in 2021 before ChatGPT launch",
    "Sustained 99.99% uptime for BetterHelp during 300% COVID-19 traffic surge",
    "Reduced operational costs by 40-70% across multiple enterprises"
  ],
  skills: [
    {
      title: "Languages",
      skills: [
        { name: "Golang", level: 95, icon: "SiGo", category: "backend", years: 5 },
        { name: "Python", level: 98, icon: "SiPython", category: "backend", years: 7 },
        { name: "TypeScript", level: 85, icon: "SiTypescript", category: "frontend", years: 4 },
        { name: "Java", level: 90, icon: "SiOpenjdk", category: "backend", years: 5 },
        { name: "SQL", level: 95, icon: "SiPostgresql", category: "database", years: 7 },
        { name: "Bash", level: 90, icon: "SiGnubash", category: "tooling", years: 5 },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js", level: 95, icon: "SiNodedotjs", category: "backend" },
        { name: "AWS", level: 90, icon: "SiAmazonwebservices", category: "devops" },
        { name: "Kubernetes", level: 90, icon: "SiKubernetes", category: "devops" },
        { name: "Docker", level: 90, icon: "SiDocker", category: "devops" },
        { name: "Terraform", level: 90, icon: "SiTerraform", category: "devops" },
        { name: "Redis", level: 90, icon: "SiRedis", category: "database" },
        { name: "PostgreSQL", level: 95, icon: "SiPostgresql", category: "database" },
        { name: "MongoDB", level: 99, icon: "SiMongodb", category: "database" },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { name: "OpenAI API", level: 95, icon: "SiOpenai", category: "data" },
        { name: "Pinecone", level: 90, category: "database" },
        { name: "TensorFlow", level: 90, icon: "SiTensorflow", category: "data" },
        { name: "PyTorch", level: 90, icon: "SiPytorch", category: "data" },
        { name: "RAG", level: 95, category: "data" },
        { name: "LangChain", level: 95, category: "data" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "SiReact", category: "frontend" },
        { name: "Vue.js", level: 95, icon: "SiVuedotjs", category: "frontend" },
        { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss", category: "frontend" },
      ],
    }
  ],
  experience: [
    {
      id: "connexai",
      title: "Senior Software Engineer",
      company: "ConnexAI",
      location: "Miami, FL (Hybrid)",
      date: { start: "2023-03", present: true },
      summary: "Architecting multi-LLM gateways and production RAG systems.",
      bullets: [
        "Architected end-to-end multi-LLM gateway orchestrating GPT-4, Claude, and PaLM with proprietary routing algorithm, reducing client LLM expenses by 70% across 2M+ monthly requests.",
        "Constructed production RAG system using Pinecone vector database with semantic chunking achieving <300ms P95 latency across multi-million token enterprise document repositories—among earliest enterprise implementations.",
        "Engineered multi-tenancy security architecture with strict data isolation, enterprise SSO integration, automated PII detection via NER models, and audit logging infrastructure for compliance requirements.",
        "Developed proprietary AI function calling framework integrated with LangChain for complex multi-step reasoning—launched in parallel with OpenAI API release to support custom autonomous agent orchestration.",
        "Established engineering excellence initiatives including code review standards and CI/CD improvements driving daily releases, reducing production incidents by 65% while mentoring 3 engineers from junior to mid-level."
      ],
      tech: ["Golang", "Python", "OpenAI", "Pinecone", "LangChain", "RAG"]
    },
    {
        id: "connexai-backend",
        title: "Backend Engineer",
        company: "ConnexAI",
        location: "Miami, FL (Hybrid)",
        date: { start: "2021-10", end: "2023-02" },
        summary: "Early adoption of GPT-3 and building core orchestration services.",
        bullets: [
            "Architected core conversation orchestration service in Golang with WebSocket server managing 500K+ concurrent conversations monthly at <200ms P95 latency with graceful degradation under load.",
            "Integrated OpenAI GPT-3 API in November 2021—one year before ChatGPT launch—building prompt engineering frameworks and context management systems when industry best practices didn't exist.",
            "Built infrastructure including API Gateway with JWT authentication, Redis Pub/Sub for multi-instance routing, DynamoDB state management, and circuit breaker patterns for API failures with fallback responses.",
            "Optimized semantic caching using vector similarity and conversation context windowing reducing OpenAI API costs by 60% across 15 enterprise clients supporting millions of messages monthly."
        ],
        tech: ["Golang", "WebSockets", "OpenAI GPT-3", "Redis", "DynamoDB"]
    },
    {
      id: "betterhelp-backend",
      title: "Backend Engineer",
      company: "BetterHelp",
      location: "Deerfield Beach, FL",
      date: { start: "2020-11", end: "2021-08" },
      bullets: [
        "Owned complete project lifecycle architecting and deploying Golang microservice replacing legacy matcher, supporting 10X therapist network growth from 3K to 30K profiles with sub-50ms search performance.",
        "Developed weighted scoring system evaluating 14+ compatibility factors with Elasticsearch integration executing complex searches across 30K therapist profiles, improving compatibility scores by 42% via post-session surveys.",
        "Delivered 93% latency reduction for total user matching flow via query optimization and parallel processing; system handled 15K+ matches daily at 99.99% uptime during peak demand periods.",
        "Integrated ML ranking model via REST API with circuit breaker fallback; deployed A/B testing framework showing 23% improvement in 90-day engagement and 28% reduction in first-session cancellations."
      ],
      tech: ["Golang", "Elasticsearch", "Microservices", "ML"]
    },
     {
      id: "betterhelp-fullstack",
      title: "Full Stack Engineer",
      company: "BetterHelp",
      location: "Deerfield Beach, FL",
      date: { start: "2020-03", end: "2020-10" },
      bullets: [
        "Diagnosed critical bottlenecks during March 2020 pandemic surge, deploying emergency performance fixes sustaining system stability across unprecedented 100K to 400K concurrent user growth in 3 months.",
        "Rebuilt therapist search UI with React Hooks and virtual scrolling, added Redis caching, replaced synchronous flows with AWS SQS async queuing cutting processing time from 4.2 minutes to 45 seconds.",
        "Sustained 99.8% uptime supporting 500K+ people accessing critical mental health services with zero major outages despite 4X traffic increase via auto-scaling infrastructure and rate limiting.",
        "Optimized PostgreSQL queries with strategic indexes reducing query times from 8+ seconds to sub-200ms, added connection pooling decreasing page load time by 65%."
      ],
      tech: ["React", "Redis", "AWS SQS", "PostgreSQL"]
    },
    {
      id: "wework-backend",
      title: "Junior Backend Engineer",
      company: "WeWork",
      location: "Miami, FL",
      date: { start: "2018-05", end: "2020-01" },
      bullets: [
        "Migrated Booking Service from Rails monolith to Java Spring Boot microservice with RESTful APIs and RabbitMQ achieving 85% latency reduction for sub-second booking confirmations across 400+ locations.",
        "Deployed containerized services on AWS ECS with RDS Multi-AZ, CloudWatch monitoring, and Lambda-based reporting supporting 50K+ daily API requests at peak processing volumes.",
        "Sustained 99.9% uptime for critical booking infrastructure during WeWork near-collapse with skeleton crew, preventing data loss and keeping revenue-generating systems operational across company restructuring.",
        "Cut AWS infrastructure costs by 40% via rightsizing instances, S3 lifecycle policies, and RDS configuration optimization preserving performance SLAs across 18 months."
      ],
      tech: ["Java Spring Boot", "AWS ECS", "RabbitMQ", "Ruby on Rails"]
    },
    {
      id: "wework-frontend",
      title: "Junior Frontend Engineer",
      company: "WeWork",
      location: "Miami, FL",
      date: { start: "2017-07", end: "2018-03" },
      bullets: [
        "Rebuilt member dashboard with React/Redux featuring code splitting and lazy loading reducing initial page load time from 4.2s to 1.8s improving user experience and engagement metrics.",
        "Created responsive mobile-first interface with optimistic UI patterns for space booking flows increasing booking completion rate by 34% via reduced friction."
      ],
      tech: ["React", "Redux", "JavaScript"]
    }
  ],
  education: [
    {
      degree: "Bachelor’s Degree",
      field: "Computer Science",
      school: "Florida State University",
      date: "Mar 2013 - May 2017",
    },
  ],
  projects: [
    {
      id: "landing-zone-orchestrator",
      title: "Landing Zone Orchestrator",
      description: "A production-ready platform that transforms cloud infrastructure provisioning from manual IaC coding to an intuitive, form-driven workflow. Built with React, FastAPI, and MongoDB to generate validated Terraform templates for AWS, Azure, and GCP. Features include schema-driven form builder for VPC, Subnets, IAM, and networking resources, real-time Terraform code generation and validation, JWT-based authentication, MongoDB storage for projects and templates, and multi-cloud support.",
      tags: ["Terraform", "IaC", "React", "FastAPI", "MongoDB", "AWS", "Azure", "Full Stack"],
      image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtuYjY1emtsZmNjMXp1czdrdXR5bXE5ZDJheHVvZjY1azZxYnJieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzImRjQVb2OUI84mTt/giphy.gif",
      href: "https://orchestrator.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev/landing-zone-orchestrator-ui",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "diagrammatic",
      title: "Diagrammatic",
      description: "Diagrammatic (System Design Playground): A component library and living documentation for a design system.",
      tags: ["System Design", "Ai & ML", "React"],
      image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://diagrammatic.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev/diagrammatic",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "mui-color-wheel",
      title: "MUI Color Wheel",
      description:
        "A Material-UI based color wheel component with real-time color picking.",
      tags: ["React", "Material-UI", "NPM Package", "Storybook"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJxYjhmdTVjam41aWlzczZreGZ2eXc5eThjdDRpMXgxYzVuYTAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWnCyw4rmoFY8CmhLV/giphy.gif",
      href: "https://mui-color-wheel.vercel.app/",
      links: [
        {
          label: "Storybook",
          url: "https://mui-color-wheel.vercel.app/",
          icon: "SiStorybook",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/mui-color-wheel",
          icon: "SiNpm",
        },
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev/mui-color-wheel",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "alochona",
      title: "Alochona",
      description: "Alochona is an experimental chatbot hosted on Hugging Face Spaces. It uses OpenAI under the hood for responses. This project was built as a way to explore chatbot UIs, Hugging Face deployment, and integrating OpenAI APIs.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      // href: "https://huggingface.co/spaces/satya00089/alochona",
      links: [
        // {
        //   label: "Huggingface",
        //   url: "https://huggingface.co/spaces/satya00089/alochona/tree/main",
        //   icon: "SiHuggingface",
        // },
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev/alochona",
          icon: "SiGithub",
        },
      ],
      tags: ["Chatbot", "OpenAI", "Hugging Face", "Beginner Project"],
    },
    {
      id: "night-sky",
      title: "Night Skyline",
      description: "A breathtaking recreation of the city skyline under a starlit night sky, capturing the serene beauty and glowing atmosphere of the evening.",
      tags: ["React", "CSS"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RjaHAxY3N3enY0d3RldWVpczg2ZTNzMHhsY2dpam0yYnp6bWh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2jddT5c9g9OeHI17p/giphy.gif",
      // href: "https://satya00089.github.io/night-sky",
      links: [
        // {
        //   label: "Watch",
        //   url: "https://www.loom.com/share/1516014366e34135a67f5dd4e551fec5",
        //   icon: "FaPlay",
        // },
        {
          label: "GitHub",
          url: "https://github.com/Enjoying-Dev/night-sky",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "learn-algo",
      title: "Learn Algo",
      description: "Interactive visualizations that transform abstract concepts into intuitive understanding. Watch sorting, searching, and ML algorithms execute step-by-step.",
      tags: ["Algorithms", "DSA", "ML", "AI", "Visualization", "Next.js"],
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqYWFhbnBraWt3ZXhvajZsdjg5andyMGZzY2VibGg3bXE0MWxwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2PuPWxuLV1FGyh03Ja/giphy.gif",
      href: "https://www.learn-algo.com",
      links: [
        // {
        //   label: "GitHub",
        //   url: "https://github.com/Enjoying-Dev/learn-algo",
        //   icon: "SiGithub",
        // },
      ],
      isUnderDevelopment: true,
    },
    // {
    //   id: "data-dashboard-poc",
    //   title: "Data Dashboard (POC)",
    //   description: "Real-time charts and alerts for operational metrics.",
    //   tags: ["React", "D3", "Realtime"],
    //   image: undefined,
    //   href: "#",
    //   isUnderDevelopment: true,
    // }
  ],
  certifications: [
     {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["AI", "Distributed Systems", "FinTech"]
  }
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  "Chatbot": "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
  // New Tags
  Golang: "bg-cyan-600 text-white",
  Python: "bg-yellow-500 text-black",
  "OpenAI GPT-3": "bg-green-600 text-white",
  Pinecone: "bg-purple-500 text-white",
  LangChain: "bg-orange-500 text-white",
  RAG: "bg-indigo-600 text-white",
  WebSockets: "bg-gray-700 text-white",
  Redis: "bg-red-600 text-white",
  DynamoDB: "bg-blue-700 text-white",
  Elasticsearch: "bg-yellow-600 text-white",
  Microservices: "bg-gray-600 text-white",
  ML: "bg-pink-600 text-white",
  "AWS SQS": "bg-orange-600 text-white",
  PostgreSQL: "bg-blue-600 text-white",
  "Java Spring Boot": "bg-green-500 text-white",
  "AWS ECS": "bg-orange-500 text-white",
  RabbitMQ: "bg-orange-600 text-white",
  "Ruby on Rails": "bg-red-500 text-white",
  Redux: "bg-purple-600 text-white",
  JavaScript: "bg-yellow-400 text-black",
};
