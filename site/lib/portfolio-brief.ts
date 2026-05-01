export type ResumeProject = {
  title: string;
  label: string;
  stack: string;
  summary: string;
  outcome: string;
  proof: string;
  liveUrl: string;
  architectureUrl?: string;
  visual?: ResumeProjectVisual;
  outcomes: readonly string[];
};

export type ResumeProjectVisual =
  | {
      type: "label";
    }
  | {
      type: "image";
      src: string;
      alt: string;
      sizes: string;
      priority?: boolean;
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
  need: "They are overwhelmed by repetitive, unstructured work and need reliable systems that convert messy inputs into clear outputs without rethinking each request.",
  signal:
    "Structured, fast, and dependable. The product should feel like an operational engine, not a chatbot experiment.",
  archetype: "Magician",
  claim: "I turn ambiguous problems into structured, reliable AI systems.",
  profiles: {
    linkedin: "https://www.linkedin.com/in/adriana-so-24071219b",
    github: "https://github.com/AdrianaSo123",
  },
  location: "Newark, NJ",
  availability: "Open to FDE and AI Product Engineer roles at startups.",
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
      label:
        "end-to-end AI systems delivered from ingestion and orchestration to validated outputs",
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
      title: "UX Synthesizer",
      label: "Qualitative research synthesis platform",
      stack: "Next.js, TypeScript, OpenAI, Zod, Tailwind",
      summary:
        "AI-assisted qualitative UX research synthesis: ingest transcripts, notes, and survey verbatims and produce structured insights—themes, pain points, personas, codebook, and recommendations—with grounding checks and a transcript cleanup pipeline.",
      outcome:
        "Researchers move from raw qualitative data to schema-valid, quote-backed outputs they can review, copy, and export—without losing traceability to the source.",
      proof:
        "Zod-validated analysis JSON, deterministic transcript normalization with optional LLM repair, evidence repair for ungrounded snippets, and Vitest plus Playwright coverage with CI.",
      liveUrl: "https://so-kind-research-r9i5.vercel.app",
      architectureUrl: "https://github.com/AdrianaSo123/soKind_research",
      outcomes: [
        "Built ingest for paste and upload (.txt, .pdf, .docx) with API extraction routes and a transcript pipeline before synthesis.",
        "Shipped OpenAI-powered analysis behind a strict JSON schema with validation, grounding checks, and portfolio-aligned UX (status stages, inline errors, load previous export).",
        "Implemented provenance and trust signals (demo vs live AI, canonical sourceText for evidence) and automated quality gates via lint, build, unit, and E2E tests.",
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
      liveUrl: "https://github.com/AdrianaSo123/ops_ai",
      architectureUrl: "https://github.com/AdrianaSo123/ops_ai",
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
