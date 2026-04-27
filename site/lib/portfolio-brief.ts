export type ResumeProject = {
  title: string;
  label: string;
  stack: string;
  summary: string;
  outcome: string;
  proof: string;
  liveUrl: string;
  architectureUrl?: string;
  outcomes: readonly string[];
};

export type PortfolioPrinciple = {
  title: string;
  summary: string;
};

export const portfolioBrief = {
  ownerName: "Adriana So",
  role: "AI Systems Builder",
  audience:
    "Early-stage AI startup founder or Head of Product hiring a second or third technical hire.",
  need:
    "They are overwhelmed by repetitive, unstructured work and need reliable systems that convert messy inputs into clear outputs without rethinking each request.",
  signal:
    "Structured, fast, and dependable. The product should feel like an operational engine, not a chatbot experiment.",
  archetype: "Magician",
  claim: "I turn ambiguous problems into structured, reliable AI systems.",
  profiles: {
    linkedin: "https://www.linkedin.com/in/adriana-so-24071219b",
    github: "https://github.com/AdrianaSo123",
  },
  location: "Newark, NJ",
  availability: "Open to AI systems engineering internships and early-stage startup roles",
  headline:
    "I build AI systems that convert messy operational inputs into structured outputs teams can use immediately.",
  intro:
    "My work sits at the intersection of product thinking and AI systems engineering: define ambiguous requirements, design reliable structure, validate outputs, and ship workflows people trust under real constraints.",
  metrics: [
    {
      value: "65K",
      label: "enterprise platform users influenced by structured UX and AI workflow translation",
    },
    {
      value: "$1.5M",
      label: "fundraising initiative supported by deployed workflow clarity and experience design",
    },
    {
      value: "5",
      label: "end-to-end AI systems delivered from ingestion and orchestration to validated outputs",
    },
  ] as const,
  principles: [
    {
      title: "Structure ambiguity early",
      summary:
        "I begin by turning fuzzy requirements into explicit input-output contracts so teams can align before implementation drift starts.",
    },
    {
      title: "Validate outputs, not intentions",
      summary:
        "I build schema checks, tests, and guardrails directly into AI workflows so reliability is measurable instead of assumed.",
    },
    {
      title: "Design for operational handoff",
      summary:
        "My systems are built so engineers, product leads, and operators can all inspect, iterate, and run them without fragile tribal knowledge.",
    },
  ] as const satisfies readonly PortfolioPrinciple[],
  quote: {
    quote:
      "Adriana consistently turned ambiguous business requests into clear, executable workflow structures with strong UX judgment.",
    attribution: "Wakefern leadership feedback",
    role: "UX and AI Systems Internship",
  },
  projects: [
    {
      title: "Business Document Intelligence System",
      label: "Enterprise Document Workflow Engine",
      stack: "Python, FastAPI, OpenAI, Celery, Redis",
      summary:
        "Production-grade AI system that transforms unstructured business documents into structured insights using Clean Architecture.",
      outcome:
        "Automated document processing with PII sanitization and high-confidence data extraction.",
      proof:
        "Hexagonal architecture, comprehensive evaluation layer, and circuit breaker resilience.",
      liveUrl: "https://github.com/AdrianaSo123/document_intelligence_system",
      architectureUrl: "https://github.com/AdrianaSo123/document_intelligence_system",
      outcomes: [
        "Implemented PII sanitization and deterministic normalization for reliable data extraction.",
        "Built a resilient pipeline with circuit breakers, retries, and automated evaluation benchmarking.",
        "Architected the system using Ports and Adapters (Hexagonal) pattern for strict separation of concerns.",
      ],
    },
    {
      title: "AI Landscape Intelligence and Monitoring Pipeline",
      label: "Data ingestion and structuring system",
      stack: "Python, OpenAI API, Docker",
      summary:
        "Built a modular ingestion pipeline that extracts and structures AI funding and capital event data from noisy sources.",
      outcome:
        "Enabled repeatable transformation of noisy external signals into analysis-ready structured outputs.",
      proof:
        "Strict JSON schema validation, test-driven iteration loops, and containerized scheduled runs.",
      liveUrl: "https://github.com/AdrianaSo123/ordo_with_scraper",
      architectureUrl: "https://github.com/AdrianaSo123/ordo_with_scraper",
      outcomes: [
        "Implemented LLM processing with strict JSON schema validation and iterative test-driven development for output reliability.",
        "Containerized and scheduled ingestion workflows for reproducible, scalable automation without manual intervention.",
      ],
    },
    {
      title: "OpsAI Workflow Automation Engine",
      label: "AI-powered operations platform",
      stack: "Python, FastAPI, Pydantic, OpenAI API, Docker",
      summary:
        "Designed a FastAPI-based workflow automation service that executes and validates operational tasks using AI orchestration.",
      outcome:
        "Automated manual operational workflows with structured logging and high test coverage.",
      proof:
        "Modular service architecture, pluggable workflow engine, and robust error mapping for AI integrations.",
      liveUrl: "https://github.com/AdrianaSo123/ai_operations_engine",
      architectureUrl: "https://github.com/AdrianaSo123/ai_operations_engine",
      outcomes: [
        "Engineered a FastAPI service with typed request/response models for reliable workflow execution.",
        "Implemented an AI integration layer with automated retries, error mapping, and result validation.",
        "Containerized the engine for scalable deployment and achieved high coverage through automated unit and integration tests.",
      ],
    },
    {
      title: "So Studio Platform",
      label: "Voice-to-content AI workflow",
      stack: "Swift, Node.js, OpenAI API, Whisper",
      summary:
        "Created an end-to-end system converting voice input to structured blog content with conversational retrieval.",
      outcome:
        "Delivered a working pipeline from raw voice to validated publishable content and guided retrieval.",
      proof:
        "Multi-stage orchestration, suggestion-based chat UX, and authentication-gated admin tooling.",
      liveUrl: "https://so-studio-pi.vercel.app/",
      architectureUrl: "https://github.com/AdrianaSo123/autoSite",
      outcomes: [
        "Engineered a multi-stage pipeline (audio to transcription to LLM to validation to publishing).",
        "Built chat UX with dynamic suggestion chips for guided exploration.",
        "Implemented authentication-gated tool access for admin-only capabilities.",
      ],
    },
  ] as const satisfies readonly ResumeProject[],
};
